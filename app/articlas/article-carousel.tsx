"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Article from "./article"

// Sample article data
const articles = [
  {
    id: 1,
    category: "ARTICLES",
    tags: "STRATEGY • DESIGN • ART DIRECTION",
    title: "THE ART, VISION AND DIRECTION",
    description: "A curated exploration of form, texture, and emotion — where every frame tells a layered story.",
  },
  {
    id: 2,
    category: "ARTICLES",
    tags: "STRATEGY • DESIGN • ART DIRECTION",
    title: "CRAFTING DIGITAL EXPERIENCES",
    description:
      "Exploring the intersection of technology and human-centered design — creating meaningful digital journeys.",
  },
  {
    id: 3,
    category: "ARTICLES",
    tags: "STRATEGY • DESIGN • ART DIRECTION",
    title: "MINIMALISM IN MODERN DESIGN",
    description:
      "Stripping away the unnecessary to focus on what matters — the essence of minimalist design philosophy.",
  },
  {
    id: 4,
    category: "ARTICLES",
    tags: "STRATEGY • DESIGN • ART DIRECTION",
    title: "COLOR THEORY FOR DIGITAL MEDIA",
    description:
      "Understanding the psychology and application of color — creating emotional connections through visual language.",
  },
  {
    id: 5,
    category: "ARTICLES",
    tags: "STRATEGY • DESIGN • ART DIRECTION",
    title: "TYPOGRAPHY AS A DESIGN ELEMENT",
    description:
      "Exploring how type choices influence perception — the subtle art of communicating through letterforms.",
  },
]

export default function ArticleCarousel() {
  const [startIndex, setStartIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)
  const scrolling = useRef(false)

  // Calculate the maximum start index (to prevent going beyond the array)
  const maxStartIndex = Math.max(0, articles.length - 3)

  const handleScroll = (e: React.WheelEvent) => {
    e.preventDefault()

    if (scrolling.current) return

    scrolling.current = true

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current)
    }

    if (e.deltaY > 0) {
      // Scrolling down - move forward
      setStartIndex((prev) => Math.min(maxStartIndex, prev + 1))
    } else {
      // Scrolling up - move backward
      setStartIndex((prev) => Math.max(0, prev - 1))
    }

    scrollTimeout.current = setTimeout(() => {
      scrolling.current = false
    }, 500) // Debounce scroll events
  }

  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
    }
  }, [])

  // Get the current visible articles (3 at a time)
  const visibleArticles = articles.slice(startIndex, startIndex + 3)

  // If we have fewer than 3 articles to show, pad with empty slots
  while (visibleArticles.length < 3) {
    visibleArticles.push(null as any)
  }

  return (
    <div className="h-full flex flex-col py-10 scroll-pb-20" ref={containerRef} onWheel={handleScroll}>
      <div className="flex-grow flex flex-col justify-center">
        <div className="max-w-md mx-auto p-4 md:p-8 space-y-16">
          {visibleArticles.map((article, index) =>
            article ? (
              <div
                key={article.id}
               
              >
                <Article article={article} />
              </div>
            ) : (
              <div key={`empty-${index}`} className="h-40"></div> // Empty placeholder
            ),
          )}
        </div>
      </div>

      {/* Pagination Indicator */}
      <div className="flex justify-center mb-6 space-x-2">
        {Array.from({ length: maxStartIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setStartIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === startIndex ? "bg-black w-4" : "bg-gray-300"
            }`}
            aria-label={`Go to article group ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
