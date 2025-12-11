import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">KU</span>
              </div>
              <div>
                <p className="font-serif font-bold text-background text-lg">School of Management</p>
                <p className="text-xs text-background/60">Kathmandu University</p>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Shaping Nepal's next generation of business and technology leaders since 1994.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">BBIS Program</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/curriculum" className="text-sm text-background/70 hover:text-background transition-colors">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="text-sm text-background/70 hover:text-background transition-colors">
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-background/70 hover:text-background transition-colors">
                  Labs & Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/student-life"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Student Life
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-background/70 hover:text-background transition-colors">
                  Career Outcomes
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-background mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/admissions" className="text-sm text-background/70 hover:text-background transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/scholarships"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Scholarships
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-sm text-background/70 hover:text-background transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-background/70 hover:text-background transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="text-sm text-background/70 hover:text-background transition-colors">
                  Alumni Network
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-background/70">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Balkumari, Lalitpur, Nepal
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +977-1-5186091
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@kusom.edu.np
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Kathmandu University School of Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
