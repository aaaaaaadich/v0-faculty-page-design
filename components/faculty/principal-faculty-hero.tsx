"use client"

import Image from "next/image"
import { Award, Zap, Globe, BookOpen } from "lucide-react"

export function PrincipalFacultySupervisor() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image section */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-20" />
            <div className="relative rounded-3xl overflow-hidden border-2 border-primary/20">
              <Image
                src="/nepali-professor-biswo-nath-poudel-leadership.jpg"
                alt="Prof. Dr. Biswo Nath Poudel, Vice Chairman of NPC and Professor at KU School of Management"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content section */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">National Leadership</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Prof. Dr. Biswo Nath Poudel
            </h2>

            <div className="space-y-3 mb-8">
              <p className="text-lg font-semibold text-primary">
                Governor of Nepal
              </p>
              <p className="text-lg text-muted-foreground">
                Professor, KU School of Management
              </p>
            </div>

            <p className="text-lg text-foreground mb-8 leading-relaxed text-pretty">
              The nation's highest office now mentors BBIS students at KU SOM. As Governor of Nepal, Prof. Poudel holds the
              constitutional position of the Head of State. His classroom insights come directly from the highest levels of
              national governance and economic leadership.
            </p>

            {/* Key achievements */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-card border border-border">
                <Globe className="w-6 h-6 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">Global Scholar</p>
                <p className="text-xs text-muted-foreground">PhD UC Berkeley</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <Award className="w-6 h-6 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">National Leader</p>
                <p className="text-xs text-muted-foreground">Governor of Nepal</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <BookOpen className="w-6 h-6 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">Published Researcher</p>
                <p className="text-xs text-muted-foreground">International Journals</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <Zap className="w-6 h-6 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">Economic Advisor</p>
                <p className="text-xs text-muted-foreground">Ministry of Finance</p>
              </div>
            </div>

            {/* Key positions */}
            <div className="space-y-2 mb-8 p-6 rounded-2xl bg-secondary/30 border border-border">
              <h3 className="font-semibold text-foreground mb-4">Leading Nepal at the Highest Level</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Governor of Nepal (Head of State)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Former Vice Chairman, National Planning Commission</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Former Senior Economic Advisor, Ministry of Finance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Chairperson, Board of Governors - ICIMOD</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>President, Colombo Plan Council</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
              <p className="text-foreground font-semibold mb-2">His Vision for BBIS Students:</p>
              <p className="text-muted-foreground text-pretty">
                "Education is the cornerstone of economic development. At KU SOM, we're not just teaching business—we're
                building the architects of Nepal's economic future."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
