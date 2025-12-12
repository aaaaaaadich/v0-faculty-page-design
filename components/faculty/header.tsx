"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <Image src="/logo.png" alt="KU Logo" width={48} height={48} className="object-contain" />
            </div>
            <div className="hidden sm:block">
              <p className="font-serif font-bold text-foreground text-lg">Department of Management Informatics and Communication</p>
              <p className="text-xs text-muted-foreground">School of Management, Kathmandu University</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="#leadership"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Leadership
            </Link>
            <Link
              href="#faculty"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Faculty
            </Link>
            <Link
              href="#approach"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Learning Approach
            </Link>
            <Link
              href="#workshops"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Workshops
            </Link>
            <Button variant="default" size="sm">
              Explore Curriculum
            </Button>
          </nav>

          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="flex flex-col p-4 gap-4">
            <Link
              href="#leadership"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Leadership
            </Link>
            <Link
              href="#faculty"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Faculty
            </Link>
            <Link
              href="#approach"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Learning Approach
            </Link>
            <Link
              href="#workshops"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Workshops
            </Link>
            <Button variant="default" size="sm" className="w-fit">
              Explore Curriculum
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
