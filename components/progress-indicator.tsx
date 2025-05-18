"use client"

import { useEffect, useState } from "react"

export function ProgressIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentSection, setCurrentSection] = useState("Cover")

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      // Determine current section based on scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 2
      const sections = document.querySelectorAll("section")

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          const sectionNames = ["Cover", "Challenge", "Strategy", "Gallery", "Outcome"]
          setCurrentSection(sectionNames[index])
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col items-center gap-2">
        <div className="h-40 w-0.5 bg-black/20 relative">
          <div className="absolute top-0 left-0 w-full bg-black" style={{ height: `${scrollProgress}%` }} />
        </div>
        <div className="text-xs font-medium text-black/60 rotate-90 origin-left translate-x-4">{currentSection}</div>
      </div>
    </div>
  )
}
