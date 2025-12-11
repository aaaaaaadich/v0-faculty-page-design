import { Lightbulb, Users, Laptop, Presentation, FlaskConical, MessageSquare, Target } from "lucide-react"

const approaches = [
  {
    icon: Lightbulb,
    title: "Case-Based Learning",
    description:
      "Analyze real business challenges from Nepal and global markets. Every case connects theory to practice.",
    highlight: "Real-world cases",
  },
  {
    icon: FlaskConical,
    title: "Project-Based Learning",
    description: "Build actual solutions for real companies. Your coursework becomes your portfolio.",
    highlight: "Live projects",
  },
  {
    icon: Laptop,
    title: "Lab-Based Sessions",
    description: "State-of-the-art computer labs with enterprise software. Learn by doing, not just reading.",
    highlight: "Hands-on practice",
  },
  {
    icon: Presentation,
    title: "Presentation Skills",
    description: "Regular presentations develop your communication confidence. Graduate ready to pitch ideas.",
    highlight: "Communication focus",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Group projects mirror real workplace dynamics. Build teamwork and leadership skills.",
    highlight: "Team-based",
  },
  {
    icon: Target,
    title: "Research-Driven Assignments",
    description: "Develop analytical thinking through guided research. Contribute to real academic knowledge.",
    highlight: "Original research",
  },
]

export function TeachingApproach() {
  return (
    <section id="approach" className="py-20 lg:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Pedagogy That Works</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            How We Teach Matters
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto text-pretty">
            Modern learning isn't about lectures and exams. It's about experience, application, and growth. Here's how
            our faculty transforms education.
          </p>
        </div>

        {/* Approaches grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {approaches.map((approach, index) => (
            <div
              key={approach.title}
              className="group relative p-6 lg:p-8 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 hover:border-background/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/30 transition-colors">
                <approach.icon className="w-6 h-6 text-accent" />
              </div>

              {/* Highlight badge */}
              <span className="inline-block text-xs font-medium text-accent uppercase tracking-wider mb-3">
                {approach.highlight}
              </span>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{approach.title}</h3>
              <p className="text-background/70 leading-relaxed text-pretty">{approach.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background/10 border border-background/20">
            <MessageSquare className="w-5 h-5 text-accent" />
            <span className="text-sm">
              "The teaching style here changed how I think about problems." — BBIS Graduate, Class of 2024
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
