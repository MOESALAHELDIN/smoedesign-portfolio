"use client"

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

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Image Section - Top 25% */}
      <div className="relative w-full h-[65vh] flex items-center justify-center">
        <Image
          src="/cover3.jpg?height=800&width=1600"
          alt="Terms and Conditions"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Text Section - Bottom 75% */}
      <div className="w-full flex-1 px-1 lg:px-16">
        <div className="h-full flex flex-col">
          {/* Title */}
          <div className="flex justify-center items-center py-10 px-2 mb-12 w-full">
            <h1 className="lg:text-4xl tracking-wider text-2xl font-bold text-gray-800">Terms and Conditions</h1>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="grid grid-cols-3 h-full">
              {sections.map((section, index) => (
                <div key={index} className="contents">
                  {/* Left column - Title */}
                  <div className="col-span-1">
                    <div className="text-left py-8 px-4 w-full h-full border-b border-gray-200 flex items-center">
                      <span className="text-gray-600">{section.title}</span>
                    </div>
                  </div>

                  {/* Right column - Content */}
                  <div className="col-span-2 border-b border-gray-200">
                    <div className="py-12 px-4 relative">
                      <div className="text-gray-600 leading-relaxed">{section.content}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
