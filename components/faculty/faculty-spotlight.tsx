"use client"

import { useState } from "react"
import Image from "next/image"
import { GraduationCap, Briefcase, FileText, ExternalLink, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const facultyMembers = [
  {
    name: "Dr. Raju Bhatta",
    title: "Associate Professor",
    specialization: "Information Systems & Analytics",
    image: "/nepali-male-professor-information-systems-professi.jpg",
    education: "PhD in Information Systems, University of Melbourne",
    experience: "15+ years in IS research and consulting",
    research: ["Business Intelligence", "Data Analytics", "Digital Transformation"],
    courses: ["Management Information Systems", "Business Analytics", "Database Management"],
    publications: 28,
    featured: true,
  },
  {
    name: "Dr. Sarita Shrestha",
    title: "Associate Professor",
    specialization: "Strategic Management & Innovation",
    image: "/nepali-female-professor-business-management-profes.jpg",
    education: "PhD in Strategic Management, IIM Bangalore",
    experience: "12+ years in academia and strategy consulting",
    research: ["Innovation Strategy", "Entrepreneurship", "Organizational Behavior"],
    courses: ["Strategic Management", "Innovation & Entrepreneurship", "Business Policy"],
    publications: 22,
    featured: true,
  },
  {
    name: "Dr. Prakash Poudel",
    title: "Assistant Professor",
    specialization: "Software Engineering & AI",
    image: "/nepali-male-professor-computer-science-ai-professi.jpg",
    education: "PhD in Computer Science, KAIST, South Korea",
    experience: "10+ years in software development and research",
    research: ["Artificial Intelligence", "Machine Learning", "Software Architecture"],
    courses: ["Programming Fundamentals", "Software Engineering", "AI for Business"],
    publications: 18,
    featured: true,
  },
  {
    name: "Dr. Anita Adhikari",
    title: "Assistant Professor",
    specialization: "Finance & Quantitative Methods",
    image: "/nepali-female-professor-finance-economics-professi.jpg",
    education: "PhD in Finance, Tribhuvan University",
    experience: "8+ years in financial research and banking",
    research: ["Financial Analytics", "Risk Management", "Quantitative Finance"],
    courses: ["Financial Management", "Business Statistics", "Investment Analysis"],
    publications: 15,
    featured: false,
  },
  {
    name: "Mr. Bikram Karki",
    title: "Senior Lecturer",
    specialization: "Web Development & Cloud Computing",
    image: "/nepali-male-lecturer-technology-cloud-computing-pr.jpg",
    education: "M.Phil in Information Technology, KU",
    experience: "AWS Certified, Google Cloud Partner",
    research: ["Cloud Architecture", "DevOps", "Web Technologies"],
    courses: ["Web Development", "Cloud Computing", "System Administration"],
    publications: 8,
    featured: false,
  },
  {
    name: "Ms. Srijana Tamang",
    title: "Lecturer",
    specialization: "UX Design & Human-Computer Interaction",
    image: "/nepali-female-lecturer-ux-design-technology-profes.jpg",
    education: "MPhil in HCI, University of Copenhagen",
    experience: "Former UX Lead at Fusemachines",
    research: ["User Experience", "Interface Design", "Accessibility"],
    courses: ["Human-Computer Interaction", "UX Design", "Digital Product Design"],
    publications: 6,
    featured: false,
  },
]

export function FacultySpotlight() {
  const [selectedFaculty, setSelectedFaculty] = useState(facultyMembers[0])

  return (
    <section id="faculty" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Academic Excellence</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Meet Your Professors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            PhDs from world-class universities. Industry certifications from Google, AWS, and PMP. These are the mentors
            who will shape your career.
          </p>
        </div>

        {/* Featured faculty - Interactive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Faculty list */}
          <div className="lg:col-span-4 space-y-3">
            {facultyMembers.map((faculty) => (
              <button
                key={faculty.name}
                onClick={() => setSelectedFaculty(faculty)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                  selectedFaculty.name === faculty.name
                    ? "bg-primary text-primary-foreground border-primary shadow-lg"
                    : "bg-card border-border hover:border-primary/50 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-background">
                    <Image src={faculty.image || "/placeholder.svg"} alt={faculty.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4
                      className={`font-semibold truncate ${
                        selectedFaculty.name === faculty.name ? "text-primary-foreground" : "text-foreground"
                      }`}
                    >
                      {faculty.name}
                    </h4>
                    <p
                      className={`text-sm truncate ${
                        selectedFaculty.name === faculty.name ? "text-primary-foreground/80" : "text-muted-foreground"
                      }`}
                    >
                      {faculty.specialization}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 flex-shrink-0 ${
                      selectedFaculty.name === faculty.name ? "text-primary-foreground" : "text-muted-foreground"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Selected faculty detail */}
          <div className="lg:col-span-8">
            <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="aspect-square md:aspect-auto relative">
                  <Image
                    src={selectedFaculty.image || "/placeholder.svg"}
                    alt={selectedFaculty.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="p-6 lg:p-8 flex flex-col">
                  <div className="mb-6">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {selectedFaculty.title}
                    </span>
                    <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mt-2">
                      {selectedFaculty.name}
                    </h3>
                    <p className="text-muted-foreground mt-1">{selectedFaculty.specialization}</p>
                  </div>

                  <div className="space-y-4 flex-1">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Education</p>
                        <p className="text-sm text-foreground">{selectedFaculty.education}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Experience</p>
                        <p className="text-sm text-foreground">{selectedFaculty.experience}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Publications</p>
                        <p className="text-sm text-foreground">{selectedFaculty.publications} peer-reviewed papers</p>
                      </div>
                    </div>
                  </div>

                  {/* Research areas */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Research Areas</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedFaculty.research.map((area) => (
                        <span
                          key={area}
                          className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="mt-6 w-fit bg-transparent" size="sm">
                    View Full Profile
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
