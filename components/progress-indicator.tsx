"use client"

import { useEffect, useState } from "react"

export function ProgressIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentSection, setCurrentSection] = useState("Cover")

  useEffect(() => {
    // Throttle function to limit execution frequency
    const throttle = (callback: Function, delay: number) => {
      let lastCall = 0
      return (...args: any[]) => {
        const now = new Date().getTime()
        if (now - lastCall < delay) return
        lastCall = now
        return callback(...args)
      }
    }

    const handleScroll = throttle(() => {
      // Calculate scroll progress
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100))
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
    }, 50) // Throttle to 50ms

    window.addEventListener("scroll", handleScroll)
    // Initial calculation
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="z-50  hidden lg:block pointer-events-none"
      style={{
        position: "fixed",
        right: "1rem",
        top: "50%",
        transform: "translateY(-50%)",
        willChange: "transform",
        width:'20px'
      }}
    >
      <div className="flex flex-col items-center justify-center w-2">
        {/* Progress bar */}
        <div className="h-40 w-0.5 bg-black/20 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-black"
            style={{
              height: `${scrollProgress}%`,
              transition: "height 0.1s ease-out",
            }}
          />
        </div>

        {/* Text container with fixed dimensions */}
        <div
          className="relative h-6 mt-2"
         
        >
          {/* Vertical text with fixed positioning */}
          <div
            className="absolute whitespace-nowrap text-xs font-medium text-black/60"
            style={{
              left: "10px",
              top: "0",
              textAlign: "center",
              transform: "rotate(90deg) translateX(30%)", // Rotate and position
              transformOrigin: "left top", // Fixed origin point
            }}
          >
            {currentSection}
          </div>
        </div>
      </div>
    </div>
  )
}
