"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    category: "Art Direction",
    items: ["Visual Concept", "Photography", "Color Theory"],
  },
  {
    category: "Branding",
    items: ["Identity Design", "Logo Development", "Brand Guidelines", "Brand Voice"],
  },
  {
    category: "Graphic Design",
    items: ["Packaging", "Print Collateral", "Digital Assets", "Typography"],
  },
]

export function ServiceTags() {
  const [activeCategory, setActiveCategory] = useState("Art Direction")

  return (
    <div className="space-y-8">
      <h3 className="text-xl md:text-2xl font-medium text-black">Services</h3>

      <div className="flex flex-wrap gap-2">
        {services.map((service) => (
          <Badge
            key={service.category}
            variant={activeCategory === service.category ? "default" : "outline"}
            className={`text-sm cursor-pointer ${
              activeCategory === service.category ? "bg-black text-white hover:bg-black/80" : "hover:bg-black/5"
            }`}
            onClick={() => setActiveCategory(service.category)}
          >
            {service.category}
          </Badge>
        ))}
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        key={activeCategory}
      >
        {services
          .find((s) => s.category === activeCategory)
          ?.items.map((item) => (
            <div key={item} className="p-4 bg-white rounded-lg shadow-sm border border-black/5 text-center">
              {item}
            </div>
          ))}
      </motion.div>
    </div>
  )
}
