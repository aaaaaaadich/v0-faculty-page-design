import Image from "next/image"
import { Briefcase, Users, Calendar } from "lucide-react"

const workshops = [
  {
    name: "Fintech Revolution in Nepal",
    instructor: "Mr. Ajay Shrestha",
    title: "CEO, F1Soft International",
    image: "/nepali-male-ceo-tech-executive-professional-portra.jpg",
    description: "Explore how fintech is transforming Nepal's financial landscape and the opportunities for tech professionals.",
    duration: "2 sessions",
    topics: ["Digital Payments", "Blockchain Basics", "Startup Funding"],
  },
  {
    name: "AI & Machine Learning for Business",
    instructor: "Ms. Roshani Chettri",
    title: "CTO, CloudFactory",
    image: "/nepali-female-cto-tech-executive-professional-port.jpg",
    description: "Hands-on workshop on implementing AI solutions in real-world business scenarios and scaling ML models.",
    duration: "3 sessions",
    topics: ["ML Fundamentals", "Practical AI Applications", "Data Strategy"],
  },
  {
    name: "Digital Economy & Development Policy",
    instructor: "Dr. Suman Shakya",
    title: "Director, World Bank Nepal",
    image: "/nepali-male-economist-world-bank-professional-port.jpg",
    description: "Understand how technology shapes economic development and policy-making in emerging markets.",
    duration: "2 sessions",
    topics: ["Tech Policy", "Digital Inclusion", "Market Analysis"],
  },
  {
    name: "Enterprise Software Architecture",
    instructor: "Mr. Bikal Shrestha",
    title: "VP Engineering, Leapfrog",
    image: "/nepali-male-vp-engineering-tech-professional-portr.jpg",
    description: "Learn system design principles and architectural patterns used in building scalable enterprise systems.",
    duration: "3 sessions",
    topics: ["System Design", "Microservices", "Performance Optimization"],
  },
]

export function VisitingFaculty() {
  return (
    <section id="workshops" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Professional Development</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Industry-Led Workshops
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Gain practical skills and industry insights through intensive workshops led by Nepal's top tech leaders. 
              From fintech to AI, these hands-on sessions bridge the gap between theory and real-world application.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="p-6 rounded-2xl bg-card border border-border text-center">
              <Briefcase className="w-8 h-8 text-primary mx-auto mb-3" />
              <span className="text-3xl font-bold text-foreground">10+</span>
              <p className="text-sm text-muted-foreground mt-1">Workshops Annually</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <span className="text-3xl font-bold text-foreground">200+</span>
              <p className="text-sm text-muted-foreground mt-1">Students Trained</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border text-center">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <span className="text-3xl font-bold text-foreground">30+</span>
              <p className="text-sm text-muted-foreground mt-1">Total Session Hours</p>
            </div>
          </div>
        </div>

        {/* Workshops grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workshops.map((workshop) => (
            <div
              key={workshop.name}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              {/* Image section */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={workshop.image}
                  alt={`${workshop.instructor}, instructor for ${workshop.name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-bold text-white text-lg">{workshop.name}</h3>
                  <p className="text-sm text-primary-foreground/90 mt-1">Led by {workshop.instructor.split(" ").pop()}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-1">{workshop.title}</p>
                <p className="text-sm text-foreground mb-4">{workshop.description}</p>

                <div className="mb-4 pb-4 border-b border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Duration</p>
                  <p className="text-sm font-medium text-primary">{workshop.duration}</p>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Topics Covered</p>
                  <div className="flex flex-wrap gap-2">
                    {workshop.topics.map((topic) => (
                      <span key={topic} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
