"use client"

import { useState } from "react"
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const sections = [
    {
      title: "Subheading",
      content:
        "Paragraph to tell all of stuff this is just a test. Paragraph to tell all of stuff this is just a test. Paragraph to tell all of stuff this is just a test. Paragraph to tell all of stuff this is just a test. This is additional content that will be shown when expanded. This text is much longer to demonstrate how the expansion works with longer content. The user will see exactly two lines initially and can click on the subtitle to see all of this text.",
    },
    {
      title: "Subheading",
      content:
        "Paragraph to tell all of stuff this is just a test. Paragraph to tell all of stuff this is just a test. Paragraph to tell all of stuff this is just a test. Paragraph to tell all of stuff this is just a test. When expanded, this paragraph will show all of this text. The expansion happens in place, pushing down the content below it rather than overlaying on top. This provides a better user experience and makes the content easier to read.",
    },
    {
      title: "Subheading",
      content:
        "Paragraph to tell all of stuff this is just a test. Paragraph to tell all of stuff this is just a test. Paragraph to tell all of stuff this is just a test. Paragraph to tell all of stuff this is just a test. The curved line in the bottom right corner indicates that this content can be expanded. When the subtitle is clicked, this indicator disappears and the full content is displayed. This interaction pattern is intuitive and provides a clear visual cue to the user.",
    },
  ]

  // Track which sections are open
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({})

  const toggleSection = (index: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <main className="min-h-screen flex flex-col bg-black text-white px-16">
      {/* Image Section - Top 25% */}
      <div className="relative w-full h-[60vh] flex items-center justify-center ">
        <Image
          src="/cover2.jpg?height=800&width=1600"
          alt="Terms and Conditions"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Text Section - Bottom 75% */}
      <div className="w-full flex-1">
        <div className="h-full flex flex-col">
          {/* Title */}
          <div className="flex justify-center items-center  py-20 mb-2">
            <h1 className="text-4xl tracking-wider text-white">Terms and Conditions</h1>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="grid grid-cols-3 h-full">
              {sections.map((section, index) => (
                <Collapsible key={index} open={openSections[index]} className="contents">
                  {/* Left column - Title */}
                  <div className="col-span-1">
                    <CollapsibleTrigger asChild>
                      <button
                        className={`text-left py-8 px-4 w-full h-full border-b border-gray-600  flex items-center ${
                          openSections[index] ? " font-medium" : ""
                        }`}
                        onClick={() => toggleSection(index)}
                      >
                        <ChevronRight
                          className={`mr-2 h-4 w-4 transition-transform duration-200 text-gray-400 ${
                            openSections[index] ? "rotate-90" : ""
                          }`}
                        />
                        <span className="text-gray-300">{section.title}</span>
                      </button>
                    </CollapsibleTrigger>
                  </div>

                  {/* Right column - Content */}
                  <div className="col-span-2 border-b border-gray-600">
                    <div className="py-12 px-4 relative">
                      {!openSections[index] ? (
                        /* Preview text (visible when closed) - exactly 2 lines */
                        <div className="h-[calc(2em*1.5)] overflow-hidden text-gray-200 leading-relaxed">
                          {section.content}
                        </div>
                      ) : (
                        /* Full text (visible when open) */
                        <div className="text-gray-300 leading-relaxed">{section.content}</div>
                      )}

                      
                    </div>
                  </div>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
