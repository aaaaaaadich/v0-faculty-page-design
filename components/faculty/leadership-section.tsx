import Image from "next/image"
import { Quote } from "lucide-react"

const leaders = [
  {
    name: "Prof. Dr. Biswo Nath Poudel",
    title: "Governor of Nepal",
    role: "Professor, KU School of Management",
    image: "/nepali-professor-biswo-nath-poudel-leadership.jpg",
    quote:
      "Education is the cornerstone of economic development. At KU SOM, we're not just teaching business—we're building the architects of Nepal's economic future.",
    credentials: [
      "PhD in Agricultural Economics, UC Berkeley",
      "Former Vice Chairman, National Planning Commission",
      "Former Senior Economic Advisor, Ministry of Finance",
    ],
  },
  {
    name: "Prof. Dr. Subodh Sharma",
    title: "Vice-Chancellor",
    role: "Kathmandu University",
    image: "/nepali-male-academic-vice-chancellor-professional-.jpg",
    quote:
      "The BBIS program bridges technology and business, preparing students for a rapidly evolving global economy.",
    credentials: ["PhD Management Science", "International Academic Fellow", "Education Reform Leader"],
  },
  {
    name: "Prof. Dr. Rabindra Dhital",
    title: "Dean",
    role: "School of Management",
    image: "/nepali-male-dean-professor-academic-portrait-profe.jpg",
    quote: "Our faculty brings real-world expertise into every classroom, ensuring students graduate ready to lead.",
    credentials: ["PhD Information Systems", "Industry Consultant", "Published Researcher"],
  },
]

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">⭐ Visionary Leadership</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Learn From Nepal's Most Powerful Minds
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Study under the architects of Nepal's economic policy, global thought leaders, and transformative educators
            who shape the nation's future.
          </p>
        </div>

        {/* Leadership cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {leaders.map((leader, index) => (
            <div
              key={leader.name}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={leader.image || "/placeholder.svg"}
                  alt={`${leader.name}, ${leader.title}, ${leader.role}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

                {/* Name overlay on image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-xl lg:text-2xl font-bold text-primary-foreground">{leader.name}</h3>
                  <p className="text-primary-foreground/90 text-sm mt-1">{leader.title}</p>
                  <p className="text-primary-foreground/70 text-xs">{leader.role}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground italic leading-relaxed pl-4 text-pretty">"{leader.quote}"</p>
                </div>

                {/* Credentials */}
                <div className="flex flex-wrap gap-2">
                  {leader.credentials.map((credential) => (
                    <span
                      key={credential}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {credential}
                    </span>
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
