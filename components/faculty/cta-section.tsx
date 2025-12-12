import { ArrowRight, BookOpen, Heart, FlaskConical } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const ctaLinks = [
  {
    icon: BookOpen,
    title: "See the Full Curriculum",
    description: "Explore courses and learning outcomes",
    href: "/bbis/curriculum",
  },
  {
    icon: FlaskConical,
    title: "Learn About Labs & Resources",
    description: "Discover our learning labs and facilities",
    href: "/bbis/resources",
  },
  {
    icon: Heart,
    title: "Experience Student Life at KU",
    description: "Discover campus culture and student activities",
    href: "/student-life",
  },
]

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Ready to Learn From the Best?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto text-pretty">
            The faculty at KU SOM BBIS program are waiting to guide your journey. Explore more about what makes this
            program exceptional.
          </p>
        </div>

        {/* CTA cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {ctaLinks.map((cta) => (
            <Link
              key={cta.title}
              href={cta.href}
              className="group p-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all"
            >
              <cta.icon className="w-8 h-8 mb-4 text-primary-foreground" />
              <h3 className="font-semibold text-lg mb-2">{cta.title}</h3>
              <p className="text-sm text-primary-foreground/70 mb-4">{cta.description}</p>
              <span className="inline-flex items-center text-sm font-medium group-hover:underline">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <p className="text-primary-foreground/80 mb-4">Have questions about our faculty or program?</p>
          <Button
            variant="secondary"
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Contact the BBIS Department
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
