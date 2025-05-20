"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { articles } from "@/lib/articles"

export default function ArticleGallery() {
  // State to track which article is being hovered
  const [activeImage, setActiveImage] = useState(articles[0].image)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Left column - Image display */}
      <div className="relative h-[50vh] lg:h-screen bg-black">
        <Image
          src={activeImage || "/placeholder.svg?height=800&width=600"}
          alt="Article featured image"
          fill
          className="object-cover object-center transition-opacity duration-500"
          priority
        />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
      </div>

      {/* Right column - Articles list */}
      <div className="px-8 py-12 overflow-auto max-h-screen bg-white text-black">
        <div className="max-w-xl mx-auto">
          <div className="space-y-16">
            {articles.map((article) => (
              <article key={article.id} className="text-center" onMouseEnter={() => setActiveImage(article.image)}>
                <h2 className="text-sm tracking-wider mb-2">ARTICLES</h2>

                <div className="flex justify-center flex-wrap gap-x-2 text-xs mb-3">
                  {article.category.map((cat, index) => (
                    <span key={index} className="text-gray-600">
                      {cat}
                      {index < article.category.length - 1 && " •"}
                    </span>
                  ))}
                </div>
 <Link
                  href={`/articles/${article.slug}`}>
                <h3 className="text-2xl lg:text-3xl lg:font-semibold font-normal mb-4 hover:text-gray-600 hover:underline transition-colors cursor-pointer">
                  {article.title}
                </h3>
</Link>
                <p className="text-sm text-gray-600 mb-4 max-w-md mx-auto">{article.description}</p>

                <Link
                  href={`/articles/${article.slug}`}
                  className="text-xs tracking-wider hover:text-gray-600 transition-colors inline-block hover:underline"
                >
                  READ ARTICLE
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
