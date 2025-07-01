import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"

export async function generatePDF(element: HTMLElement, fileName: string): Promise<void> {
  // Create a clone of the element to avoid modifying the original
  const clone = element.cloneNode(true) as HTMLElement
  document.body.appendChild(clone)

  // Apply specific styles to ensure proper rendering
  clone.style.width = "800px"
  clone.style.position = "absolute"
  clone.style.top = "-9999px"
  clone.style.left = "-9999px"
  clone.style.padding = "20px"
  clone.style.margin = "0"
  clone.style.background = "white"
  clone.style.fontFamily = "Arial, sans-serif"

  // Fix badge and icon positioning
  const badges = clone.querySelectorAll('[class*="flex"][class*="items-center"]')
  badges.forEach((badge) => {
    const badgeElement = badge as HTMLElement
    badgeElement.style.display = "inline-flex"
    badgeElement.style.alignItems = "center"
    badgeElement.style.gap = "6px"
    badgeElement.style.marginRight = "8px"
    badgeElement.style.marginBottom = "4px"
    badgeElement.style.padding = "4px 8px"
    badgeElement.style.border = "1px solid #e5e7eb"
    badgeElement.style.borderRadius = "6px"
    badgeElement.style.fontSize = "14px"
    badgeElement.style.lineHeight = "1.2"
  })

  // Handle SVG icons specifically
  const svgIcons = clone.querySelectorAll("svg")
  svgIcons.forEach((svg, index) => {
    const svgElement = svg as SVGElement
    svgElement.style.display = "inline-block"
    svgElement.style.verticalAlign = "middle"
    svgElement.style.width = "14px"
    svgElement.style.height = "14px"
    svgElement.style.marginRight = "4px"
    svgElement.style.flexShrink = "0"

    // Add a fallback text representation for better PDF compatibility
    const parent = svgElement.parentElement
    if (parent) {
      const iconText = getIconText(svgElement)
      if (iconText) {
        const textSpan = document.createElement("span")
        textSpan.textContent = iconText
        textSpan.style.marginRight = "4px"
        textSpan.style.fontSize = "14px"
        parent.insertBefore(textSpan, svgElement)
        svgElement.style.display = "none" // Hide SVG, use text instead
      }
    }
  })

  // Ensure proper text rendering
  const textElements = clone.querySelectorAll("span, p, h1, h2, h3, h4, h5, li")
  textElements.forEach((element) => {
    const textElement = element as HTMLElement
    textElement.style.lineHeight = "1.4"
    textElement.style.fontSize = textElement.style.fontSize || "14px"
  })

  try {
    // Wait a bit for styles to apply
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Create a canvas from the element
    const canvas = await html2canvas(clone, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
      allowTaint: true,
      foreignObjectRendering: false, // Disable for better compatibility
      imageTimeout: 0,
      removeContainer: true,
    })

    // Calculate dimensions to maintain aspect ratio
    const imgWidth = 210 // A4 width in mm (210mm)
    const pageHeight = 297 // A4 height in mm (297mm)
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    // Initialize PDF document
    const pdf = new jsPDF("p", "mm", "a4")
    let position = 0

    // Add image to PDF
    pdf.addImage(canvas.toDataURL("image/jpeg", 0.95), "JPEG", 0, position, imgWidth, imgHeight)

    // If the content is longer than a single page, add more pages
    const remainingHeight = imgHeight - pageHeight
    if (remainingHeight > 0) {
      let heightLeft = remainingHeight
      let currentPosition = -pageHeight

      while (heightLeft > 0) {
        position = currentPosition
        pdf.addPage()
        pdf.addImage(canvas.toDataURL("image/jpeg", 0.95), "JPEG", 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
        currentPosition -= pageHeight
      }
    }

    // Save the PDF
    pdf.save(fileName)
  } finally {
    // Clean up the cloned element
    if (clone.parentNode) {
      clone.parentNode.removeChild(clone)
    }
  }
}

// Helper function to get text representation of icons
function getIconText(svgElement: SVGElement): string {
  const parent = svgElement.parentElement
  if (!parent) return ""

  const text = parent.textContent || ""

  // Map common patterns to appropriate symbols
  if (text.includes("@") || text.toLowerCase().includes("email")) return "✉"
  if (text.includes("github")) return "⚡"
  if (text.includes("linkedin")) return "💼"
  if (text.includes("+") || text.includes("phone")) return "📞"
  if (text.includes("whatsapp")) return "💬"

  return "•" // Default bullet point
}
