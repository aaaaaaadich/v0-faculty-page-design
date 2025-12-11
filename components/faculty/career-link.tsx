import { ArrowRight, Briefcase, TrendingUp, Award } from "lucide-react"
import Link from "next/link"

const careerConnections = [
  {
    skill: "Data Analytics & Business Intelligence",
    taught: "Prof. Dr. Raju Bhatta",
    careers: ["Data Analyst", "BI Specialist", "Business Consultant"],
  },
  {
    skill: "Software Development & Architecture",
    taught: "Dr. Prakash Poudel, Mr. Bikram Karki",
    careers: ["Software Engineer", "Full-Stack Developer", "Solutions Architect"],
  },
  {
    skill: "Strategic Thinking & Innovation",
    taught: "Dr. Sarita Shrestha",
    careers: ["Product Manager", "Strategy Consultant", "Startup Founder"],
  },
  {
    skill: "UX Design & Human-Computer Interaction",
    taught: "Ms. Srijana Tamang",
    careers: ["UX Designer", "Product Designer", "Research Analyst"],
  },
]

export function CareerLink() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Career-Ready Education</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              From Classroom to Career
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Every skill our faculty teaches maps directly to real-world career opportunities. Here's how your
              education translates into employment.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 rounded-xl bg-secondary">
                <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-2xl font-bold text-foreground">95%</span>
                <p className="text-xs text-muted-foreground">Employment Rate</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary">
                <Briefcase className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-2xl font-bold text-foreground">6</span>
                <p className="text-xs text-muted-foreground">Months to Job</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary">
                <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-2xl font-bold text-foreground">40%</span>
                <p className="text-xs text-muted-foreground">Go Abroad for MS</p>
              </div>
            </div>

            <Link href="/careers" className="inline-flex items-center text-primary font-medium hover:underline">
              View Career Outcomes Report
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Skills to careers mapping */}
          <div className="space-y-4">
            {careerConnections.map((connection) => (
              <div
                key={connection.skill}
                className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-foreground mb-1">{connection.skill}</h3>
                <p className="text-sm text-muted-foreground mb-3">Taught by: {connection.taught}</p>
                <div className="flex flex-wrap gap-2">
                  {connection.careers.map((career) => (
                    <span key={career} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
