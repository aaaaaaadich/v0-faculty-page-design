import { HeroSection } from "@/components/faculty/hero-section"
import { LeadershipSection } from "@/components/faculty/leadership-section"
import { FacultySpotlight } from "@/components/faculty/faculty-spotlight"
import { TeachingApproach } from "@/components/faculty/teaching-approach"
import { VisitingFaculty } from "@/components/faculty/visiting-faculty"
import { StudentFacultyInteraction } from "@/components/faculty/student-faculty-interaction"
import { CareerLink } from "@/components/faculty/career-link"
import { CTASection } from "@/components/faculty/cta-section"
import { Header } from "@/components/faculty/header"
import { Footer } from "@/components/faculty/footer"

export default function FacultyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LeadershipSection />
      <FacultySpotlight />
      <TeachingApproach />
      <VisitingFaculty />
      <StudentFacultyInteraction />
      <CareerLink />
      <CTASection />
      <Footer />
    </main>
  )
}
