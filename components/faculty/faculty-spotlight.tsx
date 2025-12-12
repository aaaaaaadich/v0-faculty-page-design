"use client"

import { useState } from "react"
import Image from "next/image"
import { GraduationCap, Briefcase, FileText, ExternalLink, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const facultyMembers = [
  {
    name: "Dr. Khagendra Acharya",
    title: "Associate Professor and Associate Dean",
    specialization: "English",
    image: "/Khagendra.jpg",
    education: "PhD, Kathmandu University",
    experience: "20+ years in English literature",
    research: ["Business Intelligence", "Data Analytics", "Digital Transformation"],
    courses: ["English-II",],
    publications: 41,
    featured: true,
    profileLink: "https://ku.edu.np/contact-detail/91", // Add the actual profile link here
  },
  {
    name: "Mr. Punya Prasad Koirala",
    title: "Assistant Professor and Coordinator, DoMIC",
    specialization: "English and Communication",
    image: "/Punya.jpg",
    education: "M.Phil in English, IACER, Pokhara University",
    experience: "18+ years in literature",
    research: ["Innovation Strategy", "Entrepreneurship", "Organizational Behavior"],
    courses: ["English-I",],
    publications: 4,
    featured: true,
    profileLink: "https://ku.edu.np/contact-detail/93", // Add the actual profile link here
  },
  {
    name: "Dr. Binod Krishna Shrestha",
    title: "Professor",
    specialization: "Entrepreneurship & Marketing",
    image: "/bks.png",
    education: "PhD in Marketing, Kathmandu University",
    experience: "35+ years in entrepreneurship and marketing",
    research: ["Artificial Intelligence", "Machine Learning", "Software Architecture"],
    courses: ["Project Management", ],
    publications: 67,
    featured: true,
    profileLink: "https://ku.edu.np/contact-detail/389", // Add the actual profile link here
  },
  {
    name: "Mr. Durga Prasad Dhakal",
    title: "Assistant Professor",
    specialization: "Quantitative Techniques & Stochastic Processes",
    image: "/durga.jpg",
    education: "Master's in Management Information Systems, KU",
    experience: "10+ years in quantitative analysis",
    research: ["Financial Analytics", "Risk Management", "Quantitative Finance"],
    courses: ["Mathematics-I", "Mathematics-II", "Statistics-I","Statistics-II", "Quantitative Techniques", "Operations Management"],
    publications: 7,
    featured: false,
    profileLink: "https://ku.edu.np/contact-detail/99", // Add the actual profile link here
  },
  {
    name: "Mr. Ramesh Ghimire",
    title: "Assitant Professor and Associate Director, SWD, KU",
    specialization: "Accounting & Finance",
    image: "/ramesh.jpg",
    education: "M.Phil in Finance, KU",
    experience: "15+ years in accounting and finance",
    research: ["Cloud Architecture", "DevOps", "Web Technologies"],
    courses: ["Managerial Finance-I", "Managerial Finance-II", "Research Methodology"],
    publications: 1,
    featured: false,
    profileLink: "https://ku.edu.np/contact-detail/95", // Add the actual profile link here
  },
  {
    name: "Mr. Narayan Niroula",
    title: "Assistant Professor",
    specialization: "ICT in Business",
    image: "/nn.avif",
    education: "PhD Scholar, Kathmandu University",
    experience: "Holds industrial certifications, including A+, Security+, and Network+, while working in the international organization ", 
    research: ["User Experience", "Interface Design", "Accessibility"],
    courses: ["Object Oriented Programming", "Data Structures & Algorithms", "Computer Networks", "Web Technology","Artificial Intelligence"],
    publications: 5,
    featured: false,
    profileLink: "https://ku.edu.np/contact-detail/449", // Add the actual profile link here
  },
  {
    name: "Mr. Yash Raj Lamsal",
    title: "Assistant Professor",
    specialization: "Economics and Data Analysis",
    image: "/yrl.avif",
    education: "MA Economics, Tribhuvan University",
    experience: "11+ years in economics and data analysis", 
    research: ["User Experience", "Interface Design", "Accessibility"],
    courses: ["Microeconomics", "Macroeconomics", "Critical Thinking",],
    publications: 3,
    featured: false,
    profileLink: "https://ku.edu.np/contact-detail/96", // Add the actual profile link here
  },
   {
    name: "Mr. Haris C. Adhikari",
    title: "Assistant Professor",
    specialization: "English Literature",
    image: "/hca.avif",
    education: "M.Phil in English Language Education",
    experience: "Author of three books of poetry, poetic inquiries, and literary translation", 
    research: ["User Experience", "Interface Design", "Accessibility"],
    courses: ["English-I", "English-II", "Managerial Communication"],
    publications: 17,
    featured: false,
    profileLink: "https://ku.edu.np/contact-detail/97", // Add the actual profile link here
  },
   {
    name: "Mr. Birendra Vaidya",
    title: "Assistant Professor",
    specialization: "Marketing and Business Development",
    image: "/birendra.avif",
    education: "PhD Scholar, Nepal Open University",
    experience: "15+ years in marketing and business development", 
    research: ["User Experience", "Interface Design", "Accessibility"],
    courses: ["Business Management", "Fundamentals of Marketing", "International Business"],
    publications: 1,
    featured: false,
    profileLink: "https://ku.edu.np/contact-detail/100", // Add the actual profile link here
  },
]

export function FacultySpotlight() {
  const [selectedFaculty, setSelectedFaculty] = useState(facultyMembers[0])

  return (
    <section id="faculty" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Best BBIS Faculty in Nepal</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Meet Your Professors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            PhDs from world-class universities. Industry certifications from top companies. Our information systems professors in Nepal 
            are the best minds in business, technology, and research. These BBIS department teachers will shape your career.
          </p>
        </div>

        {/* Featured faculty - Interactive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Faculty list - Scrollable */}
          <div className="lg:col-span-4 max-h-[450px] overflow-y-auto space-y-3 pr-2 custom-scrollbar">
            {facultyMembers.map((faculty) => (
              <button
                key={faculty.name}
                onClick={() => setSelectedFaculty(faculty)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex-shrink-0 ${
                  selectedFaculty.name === faculty.name
                    ? "bg-primary text-primary-foreground border-primary shadow-lg"
                    : "bg-card border-border hover:border-primary/50 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-background">
                    <Image src={faculty.image || "/placeholder.svg"} alt={`${faculty.name}, ${faculty.title}`} fill className="object-cover" />
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
                    alt={`${selectedFaculty.name}, ${selectedFaculty.title}, specializing in ${selectedFaculty.specialization}`}
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

                  {/* Courses at BBIS */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Teaches in BBIS Program</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedFaculty.courses.map((course) => (
                        <span
                          key={course}
                          className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="mt-6 w-fit bg-transparent" 
                    size="sm"
                    asChild
                  >
                    <a href={selectedFaculty.profileLink} target="_blank" rel="noopener noreferrer">
                      View Full Profile
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
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

const styles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: hsl(var(--primary));
    border-radius: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: hsl(var(--primary) / 0.8);
  }
`;

if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.textContent = styles;
  if (!document.getElementById("faculty-scrollbar-styles")) {
    styleElement.id = "faculty-scrollbar-styles";
    document.head.appendChild(styleElement);
  }
}
