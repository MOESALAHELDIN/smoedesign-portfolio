"use client"

import { useState } from "react"

interface Section {
  title: string
  content: string
}

interface ExpandableContentProps {
  sections: Section[]
}

export default function ExpandableContent({ sections }: ExpandableContentProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null)
    } else {
      setExpandedIndex(index)
    }
  }

  return (
    <div className="h-full flex flex-col">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`p-4 relative ${index !== sections.length - 1 ? "border-b border-gray-200" : ""}`}
          style={{ height: expandedIndex === index ? "auto" : `${100 / sections.length}%` }}
        >
          <div className="cursor-pointer" onClick={() => toggleExpand(index)}>
            {/* Always show at least 2 lines of text */}
            <p className="text-gray-700 line-clamp-2">
              {section.content.split(" ").slice(0, 20).join(" ")}
              {section.content.split(" ").length > 20 && "..."}
            </p>
          </div>

          {/* Expanded content */}
          {expandedIndex === index && <div className="mt-2 text-gray-700">{section.content}</div>}

          {/* Curved line indicating expandability */}
          {index === 2 && expandedIndex !== 2 && (
            <div className="absolute right-4 bottom-4 w-16 h-16 border-b-2 border-r-2 border-gray-200 rounded-br-full" />
          )}
        </div>
      ))}
    </div>
  )
}
