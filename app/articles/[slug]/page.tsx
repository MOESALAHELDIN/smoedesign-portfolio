
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { getArticleBySlug, getRelatedArticles } from "@/lib/articles"
import { notFound } from "next/navigation"

export default async function ArticlePage({ params }: { params: { slug: string } }) {

    const { slug } = await params

  
  const article =getArticleBySlug(slug)

  if (!article || !article.content) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(slug)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white">
        <Link href="/" className="w-12 h-12">
          <p className="text-2xl font-bold">LOGO</p>
        </Link>
        <button className="p-2">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      <main>
        {/* Article Header */}
        <div className="px-6 py-4 bg-gray-100">
          <div className="text-sm text-gray-500 uppercase">
            <Link href="/" className="hover:underline">
              Articles
            </Link>{" "}
            /{" "}
            <Link href="#" className="hover:underline">
              {article.category[0]}
            </Link>{" "}
            /
          </div>
          <h1 className="text-2xl font-bold mt-2">{article.title}</h1>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <Image
            src={article.content.imageUrl || "/placeholder.svg"}
            alt={article.title}
            width={1200}
            height={600}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute bottom-2 right-2 text-xs text-gray-400">{article.content.imageTitle}</div>
        </div>

        {/* Article Content */}
        <div className="px-6 py-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">{article.content.subtitle}</h2>

          {article.content.paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}

          {/* Article Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t text-sm mt-8">
            <div className="text-gray-600 mb-4 sm:mb-0">
              DEVELOPED WITH LOVE BY SMOEDESIGN
              <div className="text-gray-500 text-xs">{article.content.date}</div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-600">SHARE</span>
              <div className="flex">
                <button className="border px-2 py-1 text-xs">SOCIAL</button>
                <button className="border px-2 py-1 text-xs">SOCIAL</button>
                <button className="border px-2 py-1 text-xs">SOCIAL</button>
                <button className="border px-2 py-1 text-xs">COPY</button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Stories */}
        <div className="px-6 py-12 bg-white">
          <h2 className="text-2xl font-bold mb-8">MORE RELATED STORIES</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((relatedArticle) => (
              <Link href={`/articles/${relatedArticle.slug}`} key={relatedArticle.id} className="group">
                <div className="relative h-64 mb-4 overflow-hidden">
                  <Image
                    src={relatedArticle.content?.imageUrl || "/placeholder.svg?height=400&width=600"}
                    alt={relatedArticle.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold mb-1">{relatedArticle.title}</h3>
                <div className="text-xs text-gray-500 uppercase mb-1">{relatedArticle.tags}</div>
                <div className="text-xs text-gray-500">{relatedArticle.content?.date || ""}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-6 py-16 text-center bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">WHATS YOUR STORY?</h2>
          <p className="mb-8 text-gray-600">TELL US YOUR STORY AND "MARKETING COPY"</p>
          <button className="border-2 border-gray-800 px-8 py-3 hover:bg-gray-800 hover:text-white transition-colors">
            LET'S TALK
          </button>
        </div>
      </main>
    </div>
  )
}
