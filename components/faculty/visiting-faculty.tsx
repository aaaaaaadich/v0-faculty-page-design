import Image from "next/image"
import { Building2, Globe, Calendar } from "lucide-react"

const visitingExperts = [
  {
    name: "Mr. Ajay Shrestha",
    title: "CEO, F1Soft International",
    expertise: "Fintech & Digital Payments",
    image: "/nepali-male-ceo-tech-executive-professional-portra.jpg",
    sessions: ["Fintech Revolution in Nepal", "Building Scalable Tech Companies"],
  },
  {
    name: "Ms. Roshani Chettri",
    title: "CTO, CloudFactory",
    expertise: "AI & Cloud Operations",
    image: "/nepali-female-cto-tech-executive-professional-port.jpg",
    sessions: ["AI in Business Operations", "Building Remote-First Tech Teams"],
  },
  {
    name: "Dr. Suman Shakya",
    title: "Director, World Bank Nepal",
    expertise: "Economic Development & Policy",
    image: "/nepali-male-economist-world-bank-professional-port.jpg",
    sessions: ["Digital Economy & Development", "Technology Policy in South Asia"],
  },
  {
    name: "Mr. Bikal Shrestha",
    title: "VP Engineering, Leapfrog",
    expertise: "Software Architecture",
    image: "/nepali-male-vp-engineering-tech-professional-portr.jpg",
    sessions: ["Building Enterprise Software", "Career Paths in Tech"],
  },
]

export function VisitingFaculty() {
  return (
    <section id="visiting" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Industry Connection</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Learn From Industry Icons
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Our visiting faculty program brings Nepal's most successful tech leaders, entrepreneurs, and industry
              experts directly into your classroom. These aren't just lectures—they're career-changing conversations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
              <Building2 className="w-8 h-8 text-primary mb-3" />
              <span className="text-3xl font-bold text-foreground">50+</span>
              <p className="text-sm text-muted-foreground mt-1">Partner Organizations</p>
            </div>
            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
              <Globe className="w-8 h-8 text-primary mb-3" />
              <span className="text-3xl font-bold text-foreground">20+</span>
              <p className="text-sm text-muted-foreground mt-1">Guest Lectures/Year</p>
            </div>
            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 col-span-2">
              <Calendar className="w-8 h-8 text-primary mb-3" />
              <span className="text-3xl font-bold text-foreground">10+</span>
              <p className="text-sm text-muted-foreground mt-1">Industry Workshops Annually</p>
            </div>
          </div>
        </div>

        {/* Visiting faculty grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visitingExperts.map((expert) => (
            <div
              key={expert.name}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={expert.image || "/placeholder.svg"}
                  alt={expert.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium text-accent px-2 py-1 rounded-full bg-background/90">
                    {expert.expertise}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-foreground">{expert.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{expert.title}</p>

                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Recent Sessions</p>
                  {expert.sessions.map((session) => (
                    <p key={session} className="text-xs text-foreground">
                      • {session}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
