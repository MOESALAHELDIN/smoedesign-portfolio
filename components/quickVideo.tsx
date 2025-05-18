"use client"

import { useLayoutEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"

export function Qvideo() {
  const component = useRef<HTMLDivElement>(null)
  const durations = [4.0, 4.0, 4.0, 4.0, 4.0] // Make sure this matches your image count


 useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const galleryImages = gsap.utils.toArray<HTMLElement>(".gallery-image")

    gsap.set(galleryImages[0], { opacity: 1 })
    gsap.set(galleryImages.slice(1), { opacity: 0 })

    const fadeTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.2 })

    galleryImages.forEach((image, i) => {
      const nextIndex = (i + 1) % galleryImages.length
      const duration = durations[i % durations.length] || 0.5

      fadeTimeline.to(image, { opacity: 0, duration }, '+=0.2')
      fadeTimeline.to(galleryImages[nextIndex], { opacity: 1, duration }, '<')
    })
  }, component)

  return () => ctx.revert()
}, [])

  return (
    <div ref={component} className="relative w-full">
      <div className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden rounded-lg">
            <div className="gallery-image absolute inset-0 w-full h-full opacity-0 ">
            <main className="flex flex-col md:flex-row min-h-screen max-w-5xl mx-auto">
      {/* Left side - Image */}
      <div className="w-full md:w-[45%] relative  min-h-[60vh] md:min-h-screen">
        <Image
          src='/s2.png'
          alt="Fashion model in cream outfit"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Right side - Content */}
      <div className="w-full md:w-[55%] flex flex-col">
        {/* Top content section with beige background */}
        <div className="bg-[#20a4f1] p-8 md:p-12 lg:px-16 py-10 h-1/2">
          <div className="max-w-[20rem] ">
            <p className="text-white text-xs text-justify">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore
              eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
              zzril delenit augue duis dolore te feugait nulla facilisi.
            </p>
          </div>
        </div>

        {/* Bottom content section with white background */}
        <div className="bg-white px-8 md:pt-28 lg:pt-28 lg:p-10 2xl:p-16 flex-1 ">
          <div className="flex flex-row  justify-between">
            {/* Logo */}
            <div className="mb-8">
              <svg
                width="180"
                height="60"
                viewBox="0 0 180 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#d7c3b7]"
              >
                <path d="M90 0L120 30L90 60L60 30L90 0Z" fill="currentColor" fillOpacity="0.5" />
                <path d="M30 15L60 45H0L30 15Z" fill="currentColor" fillOpacity="0.5" />
                <path d="M150 15L180 45H120L150 15Z" fill="currentColor" fillOpacity="0.5" />
              </svg>
            </div>

            {/* Text content */}
            <p className="text-gray-800 max-w-[16rem] text-xs text-justify">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </p>
          </div>

        </div>
      </div>
    </main>
        </div>
      
        <div className="gallery-image absolute inset-0 w-full h-full opacity-0 ">
          <Image
            src="/3.jpg"
            alt="Brand outcome showcase 3"
            fill
            className="object-contain"
          />

        </div>
        <div className="gallery-image absolute inset-0 w-full h-full opacity-0">
          <Image
            src="/outcome2.jpg"
            alt="Brand outcome showcase 4"
            fill
            className="object-contain"
          />
          </div>
          
        
    <div className="gallery-image absolute inset-0 w-full h-full opacity-0">
          <Image
            src="/cover3.jpg"
            alt="Brand outcome showcase 4"
            fill
            className="object-contain"
            
          />
        </div>
       
     
    
        <div className="gallery-image absolute inset-0 w-full h-full opacity-0">
             <main className="flex flex-col md:flex-row min-h-screen max-w-5xl mx-auto">
              {/* Left side - Image */}
              <div className="w-full md:w-[45%] relative bg-black min-h-[60vh] md:min-h-screen order-2 ">
                <Image
                  src='/s1.png'
                  alt="Fashion model in cream outfit"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              

            {/* Right side - Content */}
            <div className="w-full md:w-[55%] flex flex-col">
              {/* Top content section with beige background */}
              <div className="bg-[#582e14] p-8 md:p-12 lg:px-16 py-5 h-1/2">
                <div className="max-w-[20rem] ">
                  <p className="text-white text-md text-justify">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore
                    eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
                    zzril delenit augue duis dolore te feugait nulla facilisi.
                  </p>
                </div>
              </div>

              {/* Bottom content section 1with white background */}
        
                 <div className="bg-white  flex items-center h-1/2 justify-center">
                {/* Logo container with fixed dimensions and centered content */}
                  <div className="relative w-full h-[99.9%] -mt-10">
                    <Image src="/Logo.svg" alt="Fashion model in cream outfit" fill className="object-cover" />
                  </div>
                
             
               

              
            

              </div>
            </div>
          </main>
        </div>
    </div>
    </div>
  )
}
