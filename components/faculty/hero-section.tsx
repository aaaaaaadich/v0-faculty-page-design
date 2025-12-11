import { ArrowDown, Award, BookOpen, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,53,15,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,53,15,0.03),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <Award className="w-4 h-4" />
            BBIS Program • Kathmandu University
          </div>

          {/* Main headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 text-balance">
            Learn From Nepal's
            <span className="block text-primary">Brightest Minds</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-pretty">
            At KU School of Management, you don't just study information systems—you learn from
            <span className="text-foreground font-medium"> Nepal's Governor, vice-chancellors, nation-builders, </span>
            and <span className="text-foreground font-medium">celebrated professors</span> who are shaping the future of
            business and technology in Nepal.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 max-w-3xl mx-auto mb-16">
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border">
              <BookOpen className="w-8 h-8 text-primary mb-3" />
              <span className="text-3xl lg:text-4xl font-bold text-foreground">10+</span>
              <span className="text-sm text-muted-foreground mt-1">PhD & Industry Experts</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border">
              <Users className="w-8 h-8 text-primary mb-3" />
              <span className="text-3xl lg:text-4xl font-bold text-foreground">50+</span>
              <span className="text-sm text-muted-foreground mt-1">Years Combined Experience</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border">
              <Award className="w-8 h-8 text-primary mb-3" />
              <span className="text-3xl lg:text-4xl font-bold text-foreground">100+</span>
              <span className="text-sm text-muted-foreground mt-1">Research Publications</span>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm text-muted-foreground">Meet Our Leaders</span>
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
