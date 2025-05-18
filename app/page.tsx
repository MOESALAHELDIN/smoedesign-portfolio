import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {ProjectGallery} from "@/components/project-gallery"
import { ProgressIndicator } from "@/components/progress-indicator"
import { ServiceTags } from "@/components/service-tags"
import  {Qvideo} from "@/components/quickVideo"
import { SectionNavigator } from "@/components/section-navigator"

export default function ProjectPage() {
  return (
    <main className="relative">
      <ProgressIndicator />

      {/* Section 1: Full-Screen Cover Image */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <Image
          src="/cover3.jpg?height=1080&width=1920"
          alt="Project cover image"
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row justify-between items-end">
          <div className="mb-8 md:mb-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-2">SUTYLE</h1>
            <p className="text-xl text-white/80">Art Direction & Branding</p>
          </div>
          <p className="max-w-xs md:max-w-sm text-white/80 text-sm md:text-base animate-fade-in-up animation-delay-200">
            Crafting a cultured identity for a new-age brand 
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#CHALLENGE">
          <ArrowDown className="h-6 w-6 text-white/80" />
          </Link>
        </div>
      </section>

      {/* Section 2: Scope, Challenge & Call to Action */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 bg-white " id="CHALLENGE">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="relative h-[400px] md:h-full overflow-hidden rounded-lg animate-fade-in">
            <Image
              src="/Logow11.svg?height=800&width=600"
              alt="Project concept sketch"
              fill
              className="object-cover"
            />
        
          </div>
          <div className="flex flex-col justify-center animate-fade-in animation-delay-200">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black mb-6">THE CHALLENGE</h2>
            <p className="text-lg md:text-xl font-medium text-black/90 mb-4">
              CRAFTING A CULTURED IDENTITY FOR A NEW-AGE BRAND
            </p>
            <p className="text-base text-black/70 mb-8">
              SMOE is a luxury streetwear brand. It's cultural statement needed in authenticity and self-expression.
              Built from the ground up, our journey with SMOE began with deep discovery sessions, bold research, and
              strategy. We worked to shape a visual and verbal identity that resonates.
            </p>
            <Button className="w-fit bg-black text-white hover:bg-black/80">TELL US YOUR STORY</Button>
          </div>
        </div>
      </section>

      {/* Section 3: Strategy, Insights & Services Tags */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 bg-[#f8f5f2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-[300px] overflow-hidden rounded-lg animate-fade-in">
                <Image
                  src="/1.jpg?height=600&width=800"
                  alt="Strategy visual 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[300px] overflow-hidden rounded-lg animate-fade-in animation-delay-200">
                <Image
                  src="/2.jpg?height=600&width=800"
                  alt="Strategy visual 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="animate-fade-in animation-delay-300">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black mb-6">STRATEGY</h2>
              <p className="text-base text-black/70 mb-8">
                Our pursuit was to forge a bold and stylish identity for a fashion label that harmonises urban
                sensibility with minimalist sophistication. We developed a visual language that speaks to both heritage
                and innovation.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="relative h-[300px] overflow-hidden rounded-lg animate-fade-in">
                <Image
                  src="/3.jpg?height=600&width=400"
                  alt="Strategy visual 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-2 animate-fade-in animation-delay-200">
              <ServiceTags />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Interactive Gallery */}
      <section className="relative py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16   bg-white ">
        <div className="relative mx-auto ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black mb-12">OUTCOME</h2>
          <Qvideo  />
        </div>
      </section>

      {/* Section 5: Outcome & Client Testimonial */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 bg-black text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8">IMPACT</h2>
            <p className="text-base text-white/80 mb-6">
              The rebranding resulted in a 40% increase in brand recognition and a 25% boost in customer engagement
              across digital platforms. The new visual identity successfully positioned SMOE as a premium player in the
              streetwear market.
            </p>
            <p className="text-base text-white/80 mb-8">
              Deliverables included a comprehensive brand guide, packaging design, digital assets, and marketing
              collateral that cohesively communicated the brand's unique position.
            </p>
            <div className="flex gap-2">
              <Badge className="bg-white/20 hover:bg-white/30 text-white">Brand Strategy</Badge>
              <Badge className="bg-white/20 hover:bg-white/30 text-white">Visual Identity</Badge>
              <Badge className="bg-white/20 hover:bg-white/30 text-white">Packaging</Badge>
            </div>
          </div>
          <div className="flex items-center animate-fade-in animation-delay-200">
            <blockquote className="border-l-2 border-[#d4a373] pl-6 py-2">
              <p className="text-xl md:text-2xl italic text-white/90 mb-6">
                "SmoeDesign transformed our brand to a cultural statement. Their attention
                to detail and strategic approach exceeded our expectations."
              </p>
              <footer className="text-white/70">
                <p className="font-medium">Alex Chen</p>
                <p className="text-sm">Founder, SMOE</p>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-16 border-t border-white/20 flex justify-between items-center animate-fade-in animation-delay-300">
          <p className="text-white/80">Ready to transform your brand?</p>
          <Link href="#" className="group flex items-center gap-2 text-white">
            <span>Explore more projects</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  )
}
