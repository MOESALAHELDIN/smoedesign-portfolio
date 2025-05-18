import Image from "next/image"

export  function ProjectGallery() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      {/* Left side - Image */}
      <div className="w-full md:w-[45%] relative bg-black min-h-[60vh] md:min-h-screen">
        <Image
          src='/1.jpg'
          alt="Fashion model in cream outfit"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Right side - Content */}
      <div className="w-full md:w-[55%] flex flex-col">
        {/* Top content section with beige background */}
        <div className="bg-[#d7c3b7] p-8 md:p-12 lg:px-16 py-5 h-1/2">
          <div className="max-w-[20rem] ">
            <p className="text-white text-md text-justify">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore
              eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
              zzril delenit augue duis dolore te feugait nulla facilisi.
            </p>
          </div>
        </div>

        {/* Bottom content section with white background */}
        <div className="bg-white px-8 md:pt-28 lg:pt-28 lg:p-12 2xl:p-16 flex-1 ">
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
            <p className="text-gray-800 max-w-[20rem] text-justify">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </p>
          </div>

        </div>
      </div>
    </main>
  )
}










































// "use client"

// import { useLayoutEffect, useRef } from "react"
// import Image from "next/image"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// export function ProjectGallery() {
//   const component = useRef<HTMLDivElement>(null)
//   const galleryRef = useRef<HTMLDivElement>(null)

//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger)

//     const ctx = gsap.context(() => {
//       // Get the gallery container height for proper calculations
//       const galleryHeight = galleryRef.current?.offsetHeight || 0

//       // Create a container timeline
//       const containerTimeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: galleryRef.current,
//           start: "top top", // Start when gallery reaches top of viewport
//           end: `+=${galleryHeight * 0.8}`, // Shorter scroll distance
//           pin: galleryRef.current, // Pin only the gallery element, not the entire section
//           pinSpacing: true,
//           anticipatePin: 1,
//           scrub: 0.5,
//           markers: false,
//         },
//       })

//       // Create reveal animations for each image
//       const galleryImages = gsap.utils.toArray<HTMLElement>(".gallery-image")

//       // Set initial state - all images below viewport except the first one
//       gsap.set(galleryImages[0], {
//         y: "0%",
//         opacity: 1,
//         zIndex: 1,
//       })

//       gsap.set(galleryImages.slice(1), {
//         y: "100%", // Start from below
//         opacity: 0,
//         zIndex: (i) => i + 2, // Increasing z-index for each image
//       })

//       // Create reveal animations for each image
//       galleryImages.forEach((image, i) => {
//         if (i > 0) {
//           // Skip the first image as it's already visible
//           // Bring the next image up from below to cover the previous one
//           containerTimeline.to(
//             image,
//             {
//               y: "0%",
//               opacity: 1,
//               ease: "power3.out",
//               duration: 1,
//             },
//             i * 0.8,
//           )
//         }
//       })
//     }, component)

//     return () => {
//       // Clean up all ScrollTrigger instances and animations
//       ctx.revert()
//     }
//   }, [])

//   return (
//     <div ref={component} className="relative w-full overflow-hidden">
//       {/* Gallery container */}
//       <div ref={galleryRef} className="relative h-[80vh] md:h-[99vh] w-full overflow-hidden rounded-lg">
//         {/* Gallery images - stacked on top of each other */}
//         <div className="gallery-image absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
//           <Image src="/outcome1.jpg" alt="Brand outcome showcase 1" fill className="object-cover" priority />
//         </div>

//         <div className="gallery-image absolute inset-0 w-full h-full" style={{ zIndex: 2 }}>
//           <Image src="/outcome2.jpg" alt="Brand outcome showcase 2" fill className="object-cover" />
//         </div>
//       </div>

//       {/* This spacer creates room for the pinned content */}
//       <div className="pin-spacer" style={{ height: "40vh" }}></div>
//     </div>
//   )
// }

