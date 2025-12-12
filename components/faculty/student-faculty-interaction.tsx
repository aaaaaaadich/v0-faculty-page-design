import { Clock, MessageCircle, Lightbulb, CheckCircle } from "lucide-react"

const interactions = [
  {
    icon: Clock,
    title: "Office Hours",
    description:
      "Every faculty member maintains dedicated consultation hours. Your questions matter, and our doors are always open.",
  },
  {
    icon: MessageCircle,
    title: "Mentorship Program",
    description:
      "Get paired with faculty mentors who guide your academic journey, career choices, and personal development.",
  },
  {
    icon: Lightbulb,
    title: "Research Opportunities",
    description:
      "Participate in cutting-edge research projects with faculty. Publish your findings and contribute to Nepal's tech innovation ecosystem.",
  },
  {
    icon: CheckCircle,
    title: "Continuous Feedback",
    description: "Regular assessments, personalized feedback, and improvement plans ensure you're always growing.",
  },
]

const testimonials = [
  {
    quote: "Prof. Bhatta didn't just teach me data analytics—he helped me land my first job at a fintech company.",
    author: "Prashant Khadka",
    role: "BBIS '23, Data Analyst at Esewa",
  },
  {
    quote: "The faculty here treats you like a future colleague, not just a student. That respect changes everything.",
    author: "Shreya Maharjan",
    role: "BBIS '24, Software Engineer at Leapfrog",
  },
  {
    quote: "My thesis advisor spent countless hours helping me refine my research. That dedication is rare.",
    author: "Rohan Paudel",
    role: "BBIS '22, Pursuing MS at TU Munich",
  },
]

export function StudentFacultyInteraction() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Student Experience</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            More Than Teachers—Mentors for Life
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            At KU SOM, the relationship between students and faculty goes beyond the classroom. It's a partnership built
            on respect, guidance, and shared ambition.
          </p>
        </div>

        {/* Interaction features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {interactions.map((item) => (
            <div key={item.title} className="p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Student testimonials */}
        <div className="text-center mb-10">
          <h3 className="font-serif text-2xl font-bold text-foreground">What Students Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="p-6 lg:p-8 rounded-2xl bg-card border border-border">
              <p className="text-foreground italic mb-6 leading-relaxed text-pretty">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
