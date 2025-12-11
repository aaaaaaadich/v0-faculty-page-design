import { ArrowRight, BookOpen, FileText, Award, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const researchers = [
  {
    name: "Prof. Dr. Biswo Nath Poudel",
    title: "Governor of Nepal",
    image: "/images/biswo-nath-poudel.jpg",
    publications: 45,
    citations: 2800,
    googleScholar: "https://scholar.google.com/citations?user=example1",
  },
  {
    name: "Prof. Dr. Rabindra Dhital",
    title: "Dean, School of Management",
    image: "/nepali-male-dean-professor-academic-portrait-profe.jpg",
    publications: 38,
    citations: 1950,
    googleScholar: "https://scholar.google.com/citations?user=example2",
  },
  {
    name: "Prof. Dr. Raju Bhatta",
    title: "Professor of Data Analytics",
    image: "/nepali-male-professor-computer-science-ai-professi.jpg",
    publications: 42,
    citations: 2100,
    googleScholar: "https://scholar.google.com/citations?user=example3",
  },
  {
    name: "Dr. Sarita Shrestha",
    title: "Associate Professor",
    image: "/nepali-female-professor-business-management-profes.jpg",
    publications: 28,
    citations: 1450,
    googleScholar: "https://scholar.google.com/citations?user=example4",
  },
  {
    name: "Dr. Prakash Poudel",
    title: "Assistant Professor",
    image: "/nepali-male-professor-information-systems-professi.jpg",
    publications: 22,
    citations: 980,
    googleScholar: "https://scholar.google.com/citations?user=example5",
  },
  {
    name: "Ms. Srijana Tamang",
    title: "Lecturer, UX & HCI",
    image: "/nepali-female-lecturer-ux-design-technology-profes.jpg",
    publications: 15,
    citations: 650,
    googleScholar: "https://scholar.google.com/citations?user=example6",
  },
]

export function CareerLink() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Faculty Research</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Research That Shapes BBIS
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Our faculty are active researchers publishing in international journals and conferences. Their research 
            directly informs our curriculum, ensuring you learn cutting-edge concepts.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
            <div className="text-center p-4 rounded-xl bg-card border border-border">
              <FileText className="w-6 h-6 text-primary mx-auto mb-2" />
              <span className="text-2xl font-bold text-foreground">100+</span>
              <p className="text-xs text-muted-foreground">Publications</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-card border border-border">
              <BookOpen className="w-6 h-6 text-primary mx-auto mb-2" />
              <span className="text-2xl font-bold text-foreground">15+</span>
              <p className="text-xs text-muted-foreground">Research Areas</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-card border border-border">
              <Award className="w-6 h-6 text-primary mx-auto mb-2" />
              <span className="text-2xl font-bold text-foreground">10K+</span>
              <p className="text-xs text-muted-foreground">Citations</p>
            </div>
          </div>
        </div>

        {/* Faculty Researchers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {researchers.map((researcher) => (
            <div
              key={researcher.name}
              className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={researcher.image}
                    alt={researcher.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm mb-1 line-clamp-2">
                    {researcher.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-1">{researcher.title}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center p-3 rounded-lg bg-secondary">
                  <p className="text-lg font-bold text-foreground">{researcher.publications}</p>
                  <p className="text-xs text-muted-foreground">Publications</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-secondary">
                  <p className="text-lg font-bold text-foreground">{researcher.citations}</p>
                  <p className="text-xs text-muted-foreground">Citations</p>
                </div>
              </div>

              <a
                href={researcher.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                View Google Scholar
                <ExternalLink className="w-3.5 h-3.5 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
