"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Briefcase } from "lucide-react"

const experts = [
  {
    name: "Mr. Amod Niroula",
    title: "CEO & Founder",
    company: "Act360",
    image: "/Amod-Niroula.webp",
    academicBackground: [
      "M.Phil in Marketing - KUSOM",
    ],
    notablePositions: [
      "Former Chief Operating Officer - Shangrila Software",
      "Former Marketing and Social Media Consultant - International Trade Center",
      "Former Digital Marketing Consultant - NMB Bank",
    ],
    teaches: [
      "Digital Marketing","E-Commerce",
    ],
    yearsExperience: "12+",
    expertise: ["Fintech", "Leadership", "Tech Innovation"],
    featured: true,
  },
  {
    name: "Mr. Bikash Karna",
    title: "ICT Solution Manager",
    company: "Ncell",
    image: "/Bikash Karna.jpg",
    academicBackground: [
      "Executive MBA - KUSOM",
    ],
    notablePositions: [
      "Former Network Administrator - WorldLink Communications",
    ],
    teaches: [
      "Management Information Systems",
    ],
    yearsExperience: "14+",
    expertise: ["AI & ML", "Cloud Operations", "Team Leadership"],
    featured: true,
  },
  {
    name: "Chandra Mohan Thakur",
    title: "Head of Engineering",
    company: "PetsVivo",
    image: "/CMT.jpg",
    academicBackground: [
      "Executive MBA - KUSOM",
    ],
    notablePositions: [
      "Former Senior Software Engineer - Cloudfactory.com",
      "Former Director of Cloud Operations - KUDO Technologies",
    ],
    teaches: [
      "Database Management Systems",
    ],
    yearsExperience: "13+",
    expertise: ["Development Economics", "Policy Making", "Global Finance"],
    featured: false,
  },
  {
    name: "Mr. Sunetra Pradhanang",
    title: "Founder & Chairman",
    company: "Bhaktapur Eurokids Educational Institute",
    image: "/SP.jpg",
    academicBackground: [
      "M.Phil in Educational Leadership and General Administration - KU",
    ],
    notablePositions: [
      "Former Relationship Manager - Prime Commercial Bank",
      "Former Academic Director - Kantipur Valley College",
    ],
    teaches: [
      "Strategic Management",
    ],
    yearsExperience: "16+",
    expertise: ["Software Architecture", "Enterprise Systems", "Engineering Leadership"],
    featured: false,
  },
  {
    name: "Mr. Rupak Raj Ghimire",
    title: "Founder",
    company: "Uniaxial Software Pvt. Ltd.",
    image: "/RRG.jpg",
    academicBackground: [
      "M.Eng. in Computer Engineering - KU",
    ],
    notablePositions: [
      "Former Software Developer - Department of Land Information and Archive, Government of Nepal",
      "Former Team Lead - Softech Foundation Pvt. Ltd.",
    ],
    teaches: [
      "Data Warehouse and Data Mining",
    ],
    yearsExperience: "16+",
    expertise: ["Software Architecture", "Enterprise Systems", "Engineering Leadership"],
    featured: false,
  },
  {
    name: "Mr. Raunak Maskay",
    title: "Head of Product Management",
    company: "F1Soft International",
    image: "/RM.jpg",
    academicBackground: [
      "Executive MBA - KUSOM",
    ],
    notablePositions: [
      "Atlassian Community Leader",
      "Treasurer - NSTQB",
      "Former Senior QA Engineer - Omnicom Media Group",
      "Former Senior QA Engineer - Agile IT Solutions ",
    ],
    teaches: [
      "Software Engineering",
    ],
    yearsExperience: "13+",
    expertise: ["Software Architecture", "Enterprise Systems", "Engineering Leadership"],
    featured: false,
  },
]

export function IndustryExpertsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null)

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    resetAutoPlay()
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % experts.length)
    resetAutoPlay()
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + experts.length) % experts.length)
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
      setCurrentIndex((prev) => (prev + 1) % experts.length)
    }, 10000)

    return () => {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current)
      }
    }
  }, [isAutoPlay])

  const currentExpert = experts[currentIndex]

  return (
    <section id="industry-experts" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Industry Pioneers</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Learn From Industry Game-Changers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            With distinguished visiting faculty from all over Nepal, BBIS connects students with tech innovators and leading entrepreneurs who are actively shaping the nation’s digital future, a true strength of our visiting faculty nepal network.</p>    
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
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-3xl blur-2xl opacity-20" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-accent/20 aspect-[3/4] lg:aspect-auto lg:h-[500px]">
                <Image
                  key={currentExpert.name}
                  src={currentExpert.image || "/placeholder.svg"}
                  alt={`${currentExpert.name}, ${currentExpert.title} at ${currentExpert.company}`}
                  fill
                  className="object-cover animate-fade-in"
                  priority
                />
              </div>
            </div>

            {/* Content section */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Briefcase className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Industry Expert</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {currentExpert.name}
              </h3>

              <div className="space-y-1 mb-8">
                <p className="text-lg font-semibold text-accent">{currentExpert.title}</p>
                <p className="text-lg text-muted-foreground">{currentExpert.company}</p>
                <p className="text-sm text-muted-foreground font-medium">{currentExpert.yearsExperience} years experience</p>
              </div>

              {/* Academic Background */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Academic Background</h4>
                <div className="flex flex-wrap gap-2">
                  {currentExpert.academicBackground?.map((bg) => (
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
                  {currentExpert.notablePositions?.map((pos) => (
                    <span key={pos} className="text-xs px-3 py-1.5 rounded-full bg-purple-100 text-purple-900 font-medium">
                      {pos}
                    </span>
                  ))}
                </div>
              </div>

              {/* Teaches in BBIS Program */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Teaches in BBIS Program</h4>
                <div className="flex flex-wrap gap-2">
                  {currentExpert.teaches?.map((subject) => (
                    <span key={subject} className="text-xs px-3 py-1.5 rounded-full bg-green-100 text-green-900 font-medium">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dot indicators */}
              <div className="flex gap-2 mt-8">
                {experts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? "bg-accent w-8 h-3"
                        : "bg-border hover:bg-muted w-2 h-2"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation buttons - positioned absolutely on slider */}
          <button
            onClick={prevSlide}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide counter */}
          <div className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 text-center text-sm text-muted-foreground bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="font-semibold text-foreground">{currentIndex + 1}</span> of{" "}
            <span className="font-semibold text-foreground">{experts.length}</span>
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
