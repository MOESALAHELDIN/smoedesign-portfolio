"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import ArticleCarousel from "./article-carousel"
import { ProgressIndicator } from "@/components/progress-indicator"

interface CarouselItem {
  id: number
  imageSrc: string
  title: string
  description: string
}

export default function ArtDirectionPage() {
  const articleSections = ["Articles"]

  const items: CarouselItem[] = [
    {
      id: 1,
      imageSrc: "s1.jfif?height=400&width=600",
      title: "Textured Elegance",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    },
    {
      id: 2,
      imageSrc: "/s2.jfif?height=400&width=600",
      title: "Modern Simplicity",
      description:
        "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      imageSrc: "/s3.jfif?height=400&width=600",
      title: "Refined Texture",
      description:
        "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.",
    },
    {
      id: 4,
      imageSrc: "/s5.jfif?height=400&width=600",
      title: "Subtle Patterns",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(1)
  const [autoScroll, setAutoScroll] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)
  const scrolling = useRef(false)

  const getPrevIndex = () => {
    return currentIndex === 0 ? items.length - 1 : currentIndex - 1
  }

  const getNextIndex = () => {
    return currentIndex === items.length - 1 ? 0 : currentIndex + 1
  }

  // Auto scroll effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (autoScroll) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
      }, 3000)
    }

    // Clean up interval on component unmount or when autoScroll changes
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [autoScroll, items.length])

  // Pause auto-scroll when user manually scrolls
  const handleScroll = (e: React.WheelEvent) => {
    e.preventDefault()

    // Temporarily disable auto-scroll when user interacts
    setAutoScroll(false)

    if (scrolling.current) return

    scrolling.current = true

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current)
    }

    if (e.deltaY > 0) {
      // Scrolling down
      setCurrentIndex(getNextIndex())
    } else {
      // Scrolling up
      setCurrentIndex(getPrevIndex())
    }

    scrollTimeout.current = setTimeout(() => {
      scrolling.current = false
      // Resume auto-scroll after user interaction
      setAutoScroll(true)
    }, 2000) // Longer timeout to give user time to interact
  }

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
    }
  }, [])

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      <ProgressIndicator sectionNames={articleSections} />
      {/* Left Section - Dark Background with Vertical Image Column */}

      <div
        className="w-full md:w-1/2 text-white bg-black p-4 md:p-8 flex flex-col h-screen overflow-hidden"
        ref={containerRef}
        onWheel={handleScroll}
        onMouseEnter={() => setAutoScroll(false)}
        onMouseLeave={() => setAutoScroll(true)}
      >
        <div className="flex flex-col h-full justify-center">
          {/* Vertical Image Column */}
          <div className="relative">
            <div className="flex flex-col">
              {/* Previous Image (partially visible) */}
              <div className="w-1/2 opacity-50 mb-2 transform scale-90 transition-all duration-300">
                <div className="bg-transparent rounded-lg overflow-hidden">
                  <div className="relative h-52 w-full">
                    <Image
                      src={items[getPrevIndex()].imageSrc || "/placeholder.svg"}
                      alt={items[getPrevIndex()].title}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Current Image (fully visible) with Description */}
              <div className="w-full my-8 h-80 transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center">
                  {/* Image Card */}
                  <div className="md:w-[50%] w-full">
                    <div className="relative h-80 w-full">
                      <Image
                        src={items[currentIndex].imageSrc || "/placeholder.svg"}
                        alt={items[currentIndex].title}
                        fill
                        className="object-cover object-center rounded-lg"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Description - Aligned with Center Image */}
                  <div className="mt-4 md:mt-0 md:ml-10 md:w-[45%]">
                    <h3 className="text-white font-medium mb-2">{items[currentIndex].title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{items[currentIndex].description}</p>
                  </div>
                </div>
              </div>

              {/* Next Image (partially visible) */}
              <div className="w-1/2 opacity-50 mt-2 transform scale-90 transition-all duration-300">
                <div className="relative h-52 w-full">
                  <Image
                    src={items[getNextIndex()].imageSrc || "/placeholder.svg"}
                    alt={items[getNextIndex()].title}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - White Background with Internal Scrolling */}
      <div className="w-full md:w-1/2 bg-white text-black h-screen overflow-hidden">
        <ArticleCarousel />
      </div>
    </div>
  )
}
