import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white">
        <div className="w-12 h-12">
          <p className="text-2xl font-bold">LOGO</p>
        </div>
        <button className="p-2">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      <main>
        {/* Article Header */}
        <div className="px-6 py-4 bg-gray-100">
          <div className="text-sm text-gray-500 uppercase">
            <Link href="#" className="hover:underline">
              Articles
            </Link>{" "}
            /{" "}
            <Link href="#" className="hover:underline">
              Art Direction
            </Link>{" "}
            /
          </div>
          <h1 className="text-2xl font-bold mt-2">THE ART, VISION AND DIRECTION</h1>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <Image
            src="/cover3.jpg?width=1200&height=600"
            alt="cover image"
            width={1200}
            height={600}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute bottom-2 right-2 text-xs text-gray-400">IMAGE TITLE</div>
        </div>

        {/* Article Content */}
        <div className="px-6 py-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Begin Boldly</h2>

          <p className="mb-4">
            Every journey worth taking begins with a moment of courage. It doesn't have to be perfect — it just has to
            be honest. When you choose to start, you declare to the world that your dreams matter, that your voice is
            worth hearing, and that your vision deserves space.
          </p>

          <p className="mb-4">
            Doubt will try to visit. Fear may whisper that you're not ready. But neither fear nor failure define your
            path — action does. Growth doesn't come from waiting until everything feels certain; it comes from moving
            forward in the unknown.
          </p>

          <p className="mb-4">
            Remember, even the brightest stars began as dust. Progress isn't always loud or visible, but it builds
            quietly with each choice you make to keep going. Your pace doesn't matter — your persistence does.
          </p>

          <p className="mb-8">
            So take the leap. Begin, not because you're unafraid, but because what you seek is bigger than fear. The
            world is waiting for what only you can create.
          </p>

          {/* Article Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t text-sm">
            <div className="text-gray-600 mb-4 sm:mb-0">
              DEVELOPED WITH LOVE BY SMOEDESIGN
              <div className="text-gray-500 text-xs">MON 19 MAY 2025</div>
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
            {/* Story 1 */}
            <div className="group">
              <div className="relative h-64 mb-4 overflow-hidden">
                <Image
                  src="/cover3.jpg?height=400&width=600"
                  alt="Art direction image"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold mb-1">THE ART, VISION AND DIRECTION</h3>
              <div className="text-xs text-gray-500 uppercase mb-1">STRATEGY DESIGN ART DIRECTION</div>
              <div className="text-xs text-gray-500">MON 19 MAR 2025</div>
            </div>

            {/* Story 2 */}
            <div className="group">
              <div className="relative h-64 mb-4 overflow-hidden">
                <Image
                  src="/Studio2.jpg?height=400&width=600"
                  alt="Urban world image"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold mb-1">COLORS AND HARMONY IN TODAYS URBAN WORLD</h3>
              <div className="text-xs text-gray-500 uppercase mb-1">STRATEGY DESIGN ART DIRECTION</div>
              <div className="text-xs text-gray-500">MON 19 MAY 2023</div>
            </div>

            {/* Story 3 */}
            <div className="group">
              <div className="relative h-64 mb-4 overflow-hidden">
                <Image
                  src="/cover.jpg?height=400&width=600"
                  alt="Art direction image"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold mb-1">THE ART, VISION AND DIRECTION</h3>
              <div className="text-xs text-gray-500 uppercase mb-1">STRATEGY DESIGN ART DIRECTION</div>
              <div className="text-xs text-gray-500">MON 19 MAY 2025</div>
            </div>
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
