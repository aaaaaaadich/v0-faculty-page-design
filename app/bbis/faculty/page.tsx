import { HeroSection } from "@/components/faculty/hero-section"
import { LeadershipMarqueeSlider } from "@/components/faculty/leadership-marquee-slider"
import { IndustryExpertsSlider } from "@/components/faculty/industry-experts-slider"
import { FacultySpotlight } from "@/components/faculty/faculty-spotlight"
import { TeachingApproach } from "@/components/faculty/teaching-approach"
import { VisitingFaculty } from "@/components/faculty/visiting-faculty"
import { StudentFacultyInteraction } from "@/components/faculty/student-faculty-interaction"
import { CareerLink } from "@/components/faculty/career-link"
import { Header } from "@/components/faculty/header"
import { Footer } from "@/components/faculty/footer"

export default function FacultyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LeadershipMarqueeSlider />
      <IndustryExpertsSlider />
      <FacultySpotlight />
      <CareerLink />
      <TeachingApproach />
      <VisitingFaculty />
      <StudentFacultyInteraction />
      <Footer />
    </main>
  )
}
