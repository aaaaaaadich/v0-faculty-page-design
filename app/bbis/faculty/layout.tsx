import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meet Our Faculty | BBIS Program - KU School of Management",
  description:
    "Discover the brilliant minds shaping Nepal's future business leaders. Meet world-class professors, industry icons, and celebrated academics at KU SOM's BBIS program.",
  keywords: "BBIS faculty Nepal, KU SOM faculty, Information systems professors Nepal, KU learning approach, Teaching methods KU, Visiting faculty Nepal, Academic excellence KU SOM, BBIS department teachers",
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
