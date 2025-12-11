"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const leaders = [
  {
    name: "Prof. Dr. Biswo Nath Poudel",
    title: "Governor of Nepal",
    role: "Ex-Professor, KU School of Management",
    image: "/biswo-nath-poudel.jpg",
    credentials: [
      "PhD in Agricultural Economics, UC Berkeley",
      "Former Vice Chairman, National Planning Commission",
      "Former Senior Economic Advisor, Ministry of Finance",
    ],
    academicBackground: [
      "PhD Agricultural Economics - UC Berkeley",
    ],
    notablePositions: [
      "Governor of Nepal",
      "Vice Chairman, National Planning Commission",
      "Chairperson, Board of Governors - ICIMOD",
      "President, Colombo Plan Council",
      "Chair, Regional Economic Cooperation & Integration (RECI)",
    ],
    teaches: [
      "Economics",
    ],
    valueProps: [
      "Direct insights into Nepal's national economic strategy and policy-making",
      "Understanding how technology and business shape national development",
      "International perspective from leading economic organizations (ICIMOD, Colombo Plan)",
      "Real-world applications of business concepts in government and policy",
    ],
    featured: true,
  },
  {
    name: "Prof. Dr. Achyut Prasad Wagle",
    title: "Vice-Chancellor",
    role: "Kathmandu University",
    image: "/Achyut-Wagle.jpg",
    credentials: ["PhD Management Science", "International Academic Fellow", "Education Reform Leader"],
    academicBackground: [
      "PhD Economics - IIT Kanpur",
    ],
    notablePositions: [
      "Vice-Chancellor, Kathmandu University",
      "Advisor to the Prime Minister of Nepal",
      "Advisor to the Governor, Nepal Rastra Bank",
      "Seasoned Fortnightly Columnist for The Kathmandu Post and Kantipur",
    ],
    teaches: [
      "Econometrics",
      
    ],
    valueProps: [
      "Vision for transforming education in Nepal and Asia",
      "Strategic oversight of university-wide initiatives and collaborations",
      "Connections to international academic networks and opportunities",
      "Guidance on building careers in academia and educational leadership",
    ],
    featured: false,
  },
  {
    name: "Assoc. Prof. Dr. Hem Raj Kafle",
    title: "Academic Excellence Director",
    role: "Kathmandu University",
    image: "/hrk.jpg",
    credentials: ["PhD Management Science", "International Academic Fellow", "Education Reform Leader"],
    academicBackground: [
      "PhD English (Rhetoric)",
    ],
    notablePositions: [
      "Academic Excellence Director, Kathmandu University",
      "Associate Dean, School of Education",
      "Life Member, NELTA",
    ],
    teaches: [
      "Used to teach Managerial Communication in BBIS",
      
    ],
    valueProps: [
      "Vision for transforming education in Nepal and Asia",
      "Strategic oversight of university-wide initiatives and collaborations",
      "Connections to international academic networks and opportunities",
      "Guidance on building careers in academia and educational leadership",
    ],
    featured: false,
  },
]

export function LeadershipMarqueeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null)

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    resetAutoPlay()
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % leaders.length)
    resetAutoPlay()
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + leaders.length) % leaders.length)
    resetAutoPlay()
  }

  const resetAutoPlay = () => {
    if (autoPlayTimer.current) {
      clearInterval(autoPlayTimer.current)
    }
    setIsAutoPlay(true)
  }

  useEffect(() => {
    if (!isAutoPlay) return

    autoPlayTimer.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % leaders.length)
    }, 10000)

    return () => {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current)
      }
    }
  }, [isAutoPlay])

  const currentLeader = leaders[currentIndex]

  return (
    <section id="leadership-marquee" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">⭐ Visionary Leadership</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Learn From Nepal's Most Powerful Minds
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Study under the architects of Nepal's policy, global thought leaders, and transformative educators
            who shape the nation's future.
          </p>
        </div>

        {/* Main slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Slide container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-card rounded-3xl border border-border p-8 lg:p-12 shadow-lg">
            {/* Image section */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-20" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/20 aspect-[3/4] lg:aspect-auto lg:h-[500px]">
                <Image
                  key={currentLeader.name}
                  src={currentLeader.image || "/placeholder.svg"}
                  alt={`${currentLeader.name}, ${currentLeader.title}`}
                  fill
                  className="object-cover animate-fade-in"
                  priority
                />
              </div>
            </div>

            {/* Content section */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-lg">👥</span>
                <span className="text-sm font-medium text-primary">Leadership</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {currentLeader.name}
              </h3>

              <div className="space-y-2 mb-8">
                <p className="text-lg font-semibold text-primary">{currentLeader.title}</p>
                <p className="text-lg text-muted-foreground">{currentLeader.role}</p>
              </div>

              {/* Academic Background */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Academic Background</h4>
                <div className="flex flex-wrap gap-2">
                  {currentLeader.academicBackground?.map((bg) => (
                    <span key={bg} className="text-xs px-3 py-1.5 rounded-full bg-blue-100 text-blue-900 font-medium">
                      {bg}
                    </span>
                  ))}
                </div>
              </div>

              {/* Notable Positions */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Notable Positions</h4>
                <div className="flex flex-wrap gap-2">
                  {currentLeader.notablePositions?.map((pos) => (
                    <span key={pos} className="text-xs px-3 py-1.5 rounded-full bg-purple-100 text-purple-900 font-medium">
                      {pos}
                    </span>
                  ))}
                </div>
              </div>

              {/* Teaches at KUSOM */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Teaches at KU SOM</h4>
                <div className="flex flex-wrap gap-2">
                  {currentLeader.teaches?.map((subject) => (
                    <span key={subject} className="text-xs px-3 py-1.5 rounded-full bg-green-100 text-green-900 font-medium">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              {/* Value proposition */}
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  {leaders.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentIndex
                          ? "bg-primary w-8 h-3"
                          : "bg-border hover:bg-muted w-2 h-2"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons - positioned absolutely on slider */}
          <button
            onClick={prevSlide}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide counter */}
          <div className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 text-center text-sm text-muted-foreground bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="font-semibold text-foreground">{currentIndex + 1}</span> of{" "}
            <span className="font-semibold text-foreground">{leaders.length}</span>
          </div>

          {/* Auto-play indicator */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
              <div className={`w-2 h-2 rounded-full ${isAutoPlay ? "bg-green-500 animate-pulse" : "bg-muted"}`} />
              {isAutoPlay ? "Auto-playing" : "Paused"}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
      `}</style>
    </section>
  )
}
