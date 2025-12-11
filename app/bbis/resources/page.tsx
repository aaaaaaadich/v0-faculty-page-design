import { Header } from "@/components/faculty/header"
import { Footer } from "@/components/faculty/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link href="/bbis/faculty" className="inline-flex items-center gap-2 text-primary mb-8 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to Faculty
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">Learning Resources</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Discover our state-of-the-art learning labs, libraries, and technical infrastructure that support student success.
          </p>
          <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
            <p className="text-muted-foreground">Learning resources details coming soon...</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
