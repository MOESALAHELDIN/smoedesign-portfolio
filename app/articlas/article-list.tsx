"use client"

import { useState } from "react"
import Article from "./article"
import { ChevronLeft, ChevronRight } from "lucide-react"

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

export default function ArticleList() {
  const [startIndex, setStartIndex] = useState(0)

  // Calculate the maximum start index (to prevent going beyond the array)
  const maxStartIndex = Math.max(0, articles.length - 3)

  // Handle navigation
  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setStartIndex((prev) => Math.min(maxStartIndex, prev + 1))
  }

  // Determine which articles to display (3 full + 1 partial)
  const visibleArticles = articles.slice(startIndex, startIndex + 4)

  return (
    <div className="relative w-full md:w-1/2 mx-auto">
      {/* Carousel container */}
      <div className="bg-white text-black overflow-hidden">
        <div className="max-w-md mx-auto p-4 md:p-8 space-y-12 py-8">
          {visibleArticles.map((article, index) => (
            <div
              key={article.id}
              className={`transition-all duration-300 ${
                index === 3 ? "opacity-40 transform translate-y-[-30px]" : "opacity-100"
              }`}
            >
              <Article article={article} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`p-2 rounded-full ${
            startIndex === 0 ? "text-gray-300 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
          }`}
          aria-label="Previous article"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Pagination indicators */}
        <div className="flex space-x-2">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(Math.min(index, maxStartIndex))}
              className={`w-2 h-2 rounded-full ${
                index >= startIndex && index < startIndex + 3 ? "bg-gray-700" : "bg-gray-300"
              }`}
              aria-label={`Go to article ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={startIndex >= maxStartIndex}
          className={`p-2 rounded-full ${
            startIndex >= maxStartIndex ? "text-gray-300 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
          }`}
          aria-label="Next article"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}
