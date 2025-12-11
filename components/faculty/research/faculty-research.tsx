"use client"

import { FileText, Award, BookOpen, TrendingUp } from "lucide-react"

const publications = [
  {
    author: "Dr. Raju Bhatta",
    title: "Business Intelligence and Real-Time Analytics in Enterprise Systems",
    journal: "Journal of Information Systems Research",
    year: 2023,
    citations: 12,
    type: "Journal Article",
  },
  {
    author: "Dr. Raju Bhatta",
    title: "Digital Transformation Strategy for SMEs in Emerging Markets",
    journal: "International Journal of Business Technology",
    year: 2023,
    citations: 8,
    type: "Journal Article",
  },
  {
    author: "Dr. Sarita Shrestha",
    title: "Innovation Strategy and Organizational Resilience in Digital Ecosystems",
    journal: "Strategic Management Review",
    year: 2022,
    citations: 15,
    type: "Journal Article",
  },
  {
    author: "Dr. Sarita Shrestha",
    title: "Entrepreneurship in Technology-Driven Environments: A South Asian Perspective",
    conference: "International Conference on Innovation and Entrepreneurship",
    year: 2022,
    citations: 7,
    type: "Conference Paper",
  },
  {
    author: "Dr. Prakash Poudel",
    title: "Machine Learning Applications in Business Process Optimization",
    journal: "IEEE Transactions on Software Engineering",
    year: 2023,
    citations: 19,
    type: "Journal Article",
  },
  {
    author: "Dr. Prakash Poudel",
    title: "Scalable Software Architecture for AI-Driven Enterprise Systems",
    conference: "Asia-Pacific Software Engineering Conference",
    year: 2023,
    citations: 11,
    type: "Conference Paper",
  },
  {
    author: "Dr. Anita Adhikari",
    title: "Quantitative Finance and Risk Assessment in Digital Banking",
    journal: "Journal of Financial Technology",
    year: 2022,
    citations: 9,
    type: "Journal Article",
  },
  {
    author: "Mr. Bikram Karki",
    title: "Cloud-Native Architecture and DevOps Best Practices",
    conference: "Cloud Computing and Services Summit",
    year: 2023,
    citations: 5,
    type: "Workshop Paper",
  },
]

const researchAreas = [
  {
    icon: TrendingUp,
    title: "Business Intelligence & Analytics",
    description: "Leveraging data analytics for strategic business decisions and competitive advantage",
    facultyCount: 3,
  },
  {
    icon: BookOpen,
    title: "Software Engineering & Architecture",
    description: "Designing scalable, maintainable systems that solve real-world business problems",
    facultyCount: 4,
  },
  {
    icon: Award,
    title: "Strategic Innovation & Entrepreneurship",
    description: "Understanding how organizations innovate and create value in dynamic markets",
    facultyCount: 2,
  },
  {
    icon: FileText,
    title: "Financial Technology & Risk Management",
    description: "Exploring the intersection of technology and finance in digital economies",
    facultyCount: 2,
  },
]

export function FacultyResearchSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Academic Excellence</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Faculty Research & Publications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our faculty are not just exceptional teachers—they're active researchers contributing to global knowledge in
            information systems, management, and technology.
          </p>
        </div>

        {/* Research areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20 lg:mb-32">
          {researchAreas.map((area) => (
            <div key={area.title} className="p-8 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <area.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{area.title}</h3>
                  <p className="text-muted-foreground mb-3 text-pretty">{area.description}</p>
                  <p className="text-sm font-medium text-primary">{area.facultyCount} faculty members researching</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Publications */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">Recent Publications</h3>
            <p className="text-muted-foreground mt-2">100+ publications in peer-reviewed journals and conferences</p>
          </div>

          <div className="space-y-4">
            {publications.map((pub, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {pub.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{pub.year}</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1 text-pretty">{pub.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {pub.journal || pub.conference} · <span className="font-medium">{pub.author}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{pub.citations} citations</p>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                    <FileText className="w-6 h-6 text-muted-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research impact */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border">
          <div className="text-center p-6">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">100+</div>
            <p className="text-muted-foreground">Research Publications</p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">150+</div>
            <p className="text-muted-foreground">Total Citations</p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">8</div>
            <p className="text-muted-foreground">Funded Research Projects</p>
          </div>
        </div>
      </div>
    </section>
  )
}
