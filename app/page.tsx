"use client"

import { useState, useRef } from "react"
import { Download, Mail, GitlabIcon as GitHub, Linkedin, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { generatePDF } from "@/lib/pdf-generator"

export default function ResumePage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [activeTab, setActiveTab] = useState("fullstack")
  const resumeRef = useRef<HTMLDivElement>(null)

  const handleDownload = async () => {
    if (!resumeRef.current) return

    setIsGenerating(true)
    try {
      const fileName = activeTab === "fullstack" ? "Mujeeb_Ur_Rehman_FullStack_CV.pdf" : "Mujeeb_Ur_Rehman_BDO_CV.pdf"
      await generatePDF(resumeRef.current, fileName)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="fullstack">Full Stack Developer</TabsTrigger>
            <TabsTrigger value="business">Business Development Officer</TabsTrigger>
          </TabsList>

          <div className="flex justify-end mb-4 mt-4">
            <Button onClick={handleDownload} disabled={isGenerating} className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2 h-4 w-4" />
              {isGenerating ? "Generating..." : "Download PDF"}
            </Button>
          </div>

          <TabsContent value="fullstack">
            <div ref={resumeRef} className="bg-white p-8 rounded-lg shadow-md">
              <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Mujeeb Ur Rehman</h1>
                <h2 className="text-xl text-blue-600 font-medium mt-1">Full Stack Web Developer</h2>

                <div className="flex flex-wrap gap-3 mt-4">
                  <Badge variant="outline" className="flex items-center gap-1 text-sm">
                    <Mail className="h-3.5 w-3.5" />
                    <span>shamimujeeb623@gmail.com</span>
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1 text-sm">
                    <GitHub className="h-3.5 w-3.5" />
                    <span>github.com/MujeebBinAzhar</span>
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1 text-sm">
                    <Linkedin className="h-3.5 w-3.5" />
                    <span>linkedin.com/in/mujeeb-bin-azhar</span>
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1 text-sm">
                    <Phone className="h-3.5 w-3.5" />
                    <span>+92 303 7336897</span>
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1 text-sm">
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>+92 344 4464658 (WhatsApp)</span>
                  </Badge>
                </div>
              </header>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Professional Summary</h3>
                <Card className="p-4 bg-gray-50">
                  <p className="text-gray-700">
                    Dedicated Full Stack Web Developer with expertise in building responsive and scalable web
                    applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Proficient in both
                    frontend and backend technologies with a strong foundation in modern JavaScript frameworks and
                    libraries. Experienced in developing RESTful APIs, implementing authentication systems, and
                    deploying applications to production environments. Passionate about creating intuitive user
                    interfaces and optimizing application performance.
                  </p>
                </Card>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Skills</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-medium text-blue-600 mb-2">Frontend Development</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "HTML5",
                        "CSS3",
                        "JavaScript (ES6+)",
                        "TypeScript",
                        "React.js",
                        "Next.js",
                        "Tailwind CSS",
                        "Bootstrap",
                        "Responsive Design",
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-medium text-blue-600 mb-2">Backend Development</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Node.js",
                        "Express.js",
                        "RESTful APIs",
                        "GraphQL",
                        "MongoDB",
                        "Mongoose",
                        "SQL",
                        "PostgreSQL",
                        "Firebase",
                        "Authentication",
                        "Authorization",
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-medium text-blue-600 mb-2">DevOps & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Git",
                        "GitHub",
                        "CI/CD",
                        "AWS",
                        "Vercel",
                        "Netlify",
                        "Heroku",
                        "Testing (Jest, React Testing Library)",
                        "Webpack",
                        "npm/yarn",
                        "Figma",
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-medium text-blue-600 mb-2">Soft Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Problem Solving",
                        "Communication",
                        "Team Collaboration",
                        "Time Management",
                        "Agile Methodology",
                        "Project Management",
                        "Client Communication",
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Professional Experience</h3>

                <div className="space-y-6">
                  <Card className="p-5">
                    <div className="flex flex-col md:flex-row md:justify-between mb-2">
                      <h4 className="font-medium text-blue-600">Full Stack Developer</h4>
                      <span className="text-gray-600 text-sm mt-1 md:mt-0">July 2025 - Present</span>
                    </div>
                    <h5 className="text-gray-700 mb-2">MUST Services</h5>
                    <ul className="space-y-3 text-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Developing scalable web applications using the MERN stack (MongoDB, Express.js, React.js,
                          Node.js) for enterprise clients.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Implementing modern frontend solutions with React.js, Next.js, and TypeScript for enhanced
                          user experiences.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Building robust backend APIs using Node.js and Express.js with MongoDB database integration.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Utilizing modern development tools including Git, Docker, and cloud deployment platforms.
                        </p>
                      </div>
                    </ul>
                  </Card>

                  <Card className="p-5">
                    <div className="flex flex-col md:flex-row md:justify-between mb-2">
                      <h4 className="font-medium text-blue-600">Full Stack Web Developer</h4>
                      <span className="text-gray-600 text-sm mt-1 md:mt-0">2022 - Present</span>
                    </div>
                    <h5 className="text-gray-700 mb-2">Freelance (Fiverr)</h5>
                    <ul className="space-y-3 text-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Delivered 50+ custom web applications using the MERN stack for international clients across
                          various industries.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Specialized in React.js frontend development with state management using Redux and Context
                          API.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Developed RESTful APIs and GraphQL endpoints using Node.js and Express.js with MongoDB
                          database.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Implemented authentication systems using JWT, OAuth, and integrated payment gateways like
                          Stripe.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Deployed applications to cloud platforms including AWS, Vercel, Netlify, and Heroku with CI/CD
                          pipelines.
                        </p>
                      </div>
                    </ul>
                  </Card>

                  <Card className="p-5">
                    <div className="flex flex-col md:flex-row md:justify-between mb-2">
                      <h4 className="font-medium text-blue-600">Junior Full Stack Developer</h4>
                      <span className="text-gray-600 text-sm mt-1 md:mt-0">August 2024 - July 2025</span>
                    </div>
                    <h5 className="text-gray-700 mb-2">TEKULSE</h5>
                    <ul className="space-y-3 text-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Contributed to multiple MERN stack projects, focusing on React.js frontend development and
                          Node.js backend services.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Collaborated with senior developers using Agile methodology and participated in daily standups
                          and sprint planning.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Implemented responsive UI components using React.js, Material-UI, and Tailwind CSS for optimal
                          user experience.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Worked with MongoDB databases, creating efficient queries and data models using Mongoose ODM.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Participated in code reviews, testing with Jest and React Testing Library, and debugging
                          complex issues.
                        </p>
                      </div>
                    </ul>
                  </Card>

                  <Card className="p-5">
                    <div className="flex flex-col md:flex-row md:justify-between mb-2">
                      <h4 className="font-medium text-blue-600">Front-End Developer</h4>
                      <span className="text-gray-600 text-sm mt-1 md:mt-0">January 2020 - September 2021</span>
                    </div>
                    <h5 className="text-gray-700 mb-2">Izandu Enterprises VINOXA, Sargodha Office</h5>
                    <ul className="space-y-3 text-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Developed responsive web interfaces using HTML5, CSS3, JavaScript, and React.js for various
                          client projects.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Implemented pixel-perfect designs from Figma and Adobe XD mockups using Bootstrap and custom
                          CSS.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Integrated frontend applications with RESTful APIs and worked closely with backend developers.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Optimized website performance, ensured cross-browser compatibility, and implemented SEO best
                          practices.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Technologies: React.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap, jQuery, Git, and modern
                          development tools.
                        </p>
                      </div>
                    </ul>
                  </Card>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Education</h3>
                <Card className="p-5">
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h4 className="font-medium text-blue-600">Bachelor of Science in Software Engineering</h4>
                    <span className="text-gray-600 text-sm mt-1 md:mt-0">Oct 2018 - Jun 2022</span>
                  </div>
                  <h5 className="text-gray-700">University of Sargodha, Sargodha, Pakistan</h5>
                </Card>
              </section>
            </div>
          </TabsContent>

          <TabsContent value="business">
            <div ref={resumeRef} className="bg-white p-8 rounded-lg shadow-md">
              <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Mujeeb Ur Rehman</h1>
                <h2 className="text-xl text-blue-600 font-medium mt-1">
                  Business Development Officer & Software Engineer
                </h2>

                <div className="flex flex-wrap gap-3 mt-4">
                  <Badge variant="outline" className="flex items-center gap-1 text-sm">
                    <Mail className="h-3.5 w-3.5" />
                    <span>shamimujeeb623@gmail.com</span>
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1 text-sm">
                    <GitHub className="h-3.5 w-3.5" />
                    <span>github.com/MujeebBinAzhar</span>
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1 text-sm">
                    <Linkedin className="h-3.5 w-3.5" />
                    <span>linkedin.com/in/mujeeb-bin-azhar</span>
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1 text-sm">
                    <Phone className="h-3.5 w-3.5" />
                    <span>+92 303 7336897</span>
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1 text-sm">
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>+92 344 4464658 (WhatsApp)</span>
                  </Badge>
                </div>
              </header>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Objective</h3>
                <Card className="p-4 bg-gray-50">
                  <p className="text-gray-700">
                    Motivated and results-driven software engineer with hands-on experience in web development and
                    business development processes. Currently seeking a challenging role as a Business Development
                    Officer in a dynamic software company where I can contribute to client acquisition, project bidding,
                    and business growth strategies. Skilled in client communication, proposal writing, and leveraging
                    freelance platforms like Fiverr and Upwork to secure projects. Technical foundation in MERN Stack,
                    paired with a keen eye for market trends and customer needs.
                  </p>
                </Card>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Professional Experience</h3>

                <div className="space-y-6">
                  <Card className="p-5">
                    <div className="flex flex-col md:flex-row md:justify-between mb-2">
                      <h4 className="font-medium text-blue-600">Business Development Officer - Freelance Platforms</h4>
                      <span className="text-gray-600 text-sm mt-1 md:mt-0">2021 - Present</span>
                    </div>
                    <h5 className="text-gray-700 mb-2">Fiverr & Upwork</h5>
                    <ul className="space-y-3 text-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Drafted compelling project proposals and handled client communication for web and software
                          development projects.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Secured multiple successful bids on Fiverr and Upwork, helping clients build custom web
                          applications.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Collaborated with development teams to align client requirements with project deliverables.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Tools Used: Fiverr, Upwork, Trello, Slack, Google Workspace, CRM tools
                        </p>
                      </div>
                    </ul>
                  </Card>

                  <Card className="p-5">
                    <div className="flex flex-col md:flex-row md:justify-between mb-2">
                      <h4 className="font-medium text-blue-600">Front-End Developer</h4>
                      <span className="text-gray-600 text-sm mt-1 md:mt-0">2020 - 2021</span>
                    </div>
                    <h5 className="text-gray-700 mb-2">Izandu Enterprises VINOXA, Sargodha Office</h5>
                    <ul className="space-y-3 text-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Designed and developed responsive websites with modern UI/UX best practices.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Technologies: HTML, CSS, JavaScript, Bootstrap, jQuery
                        </p>
                      </div>
                    </ul>
                  </Card>

                  <Card className="p-5">
                    <div className="flex flex-col md:flex-row md:justify-between mb-2">
                      <h4 className="font-medium text-blue-600">Website Developer</h4>
                      <span className="text-gray-600 text-sm mt-1 md:mt-0">2021 - Present</span>
                    </div>
                    <h5 className="text-gray-700 mb-2">Fiverr.com</h5>
                    <ul className="space-y-3 text-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Delivered custom website development services to global clients.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Specialized in MERN Stack, React.js, and modern frontend tools.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Built a strong reputation through quality work and clear communication.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Technologies: MERN Stack, Next.js, React, Web Frontend Tools
                        </p>
                      </div>
                    </ul>
                  </Card>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Skills</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-medium text-blue-600 mb-2">Business Development</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Bidding (Fiverr, Upwork)", "Client Acquisition", "Proposal Writing", "CRM"].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-medium text-blue-600 mb-2">Frontend Development</h4>
                    <div className="flex flex-wrap gap-2">
                      {["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "React.js", "Next.js"].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-medium text-blue-600 mb-2">Full Stack Development</h4>
                    <div className="flex flex-wrap gap-2">
                      {["MERN Stack", "MongoDB", "Express", "React", "Node.js"].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-medium text-blue-600 mb-2">Soft Skills & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Communication",
                        "Negotiation",
                        "Time Management",
                        "Team Collaboration",
                        "Figma",
                        "Adobe XD",
                        "Trello",
                        "Slack",
                        "GitHub",
                        "Google Docs",
                        "Notion",
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Education</h3>
                <Card className="p-5">
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h4 className="font-medium text-blue-600">Bachelor of Science in Software Engineering</h4>
                    <span className="text-gray-600 text-sm mt-1 md:mt-0">Oct 2018 - Jun 2022</span>
                  </div>
                  <h5 className="text-gray-700">University of Sargodha, Sargodha, Pakistan</h5>
                </Card>
              </section>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
