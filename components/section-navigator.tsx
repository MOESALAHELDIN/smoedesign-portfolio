"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function SectionNavigator() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const sectionIds = ["cover", "challenge", "strategy", "gallery", "outcome"]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      const sections = document.querySelectorAll("section")

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setCurrentSectionIndex(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToNextSection = () => {
    if (currentSectionIndex < sectionIds.length - 1) {
      const nextIndex = currentSectionIndex + 1
      const nextSection = document.querySelectorAll("section")[nextIndex]
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <button
      onClick={scrollToNextSection}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 bg-black/20 hover:bg-black/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 animate-bounce"
      style={{ display: currentSectionIndex >= sectionIds.length - 1 ? "none" : "block" }}
    >
      <ChevronDown className="h-6 w-6 text-white" />
    </button>
  )
}
