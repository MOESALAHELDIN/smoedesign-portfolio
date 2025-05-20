// Define the Article type
export type Article = {
  id: number
  slug: string
  category: string[]
  title: string
  description: string
  image: string
  tags: string
  content: {
    imageUrl: string
    imageTitle: string
    subtitle: string
    date: string
    paragraphs: string[]
  }
}

// Article data with images and content
export const articles: Article[] = [
  {
    id: 1,
    slug: "art-vision-direction-1",
    category: ["STRATEGY", "DESIGN", "ART DIRECTION"],
    title: "THE ART, VISION AND DIRECTION",
    description: "A curated exploration of form, texture, and emotion — where every frame tells a layered story.",
    image: "/1.jpg",
    tags: "DESIGN, STRATEGY",
    content: {
      imageUrl: "/1.jpg",
      imageTitle: "Photo by Studio Name",
      subtitle: "Exploring the intersection of design and emotion",
      date: "May 20, 2025",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
        "Texture and form come together to create a unique visual language that speaks to the viewer on a deeper level. Each element carefully considered, each decision made with intention and purpose.",
        "The creative process involves a delicate balance of intuition and strategy. It's about knowing when to follow the rules and when to break them. When to push boundaries and when to embrace tradition.",
        "In this exploration, we've discovered that the most compelling stories are those that resonate on an emotional level. They connect with the audience in a way that transcends the visual, creating a lasting impression that goes beyond the initial encounter.",
        "As we continue to evolve our approach to design and art direction, we remain committed to the pursuit of excellence and innovation. Always pushing forward, always seeking new ways to express ideas and emotions through visual storytelling.",
      ],
    },
  },
  {
    id: 2,
    slug: "art-vision-direction-2",
    category: ["STRATEGY", "DESIGN", "ART DIRECTION"],
    title: "THE ART, VISION AND DIRECTION",
    description: "A curated exploration of form, texture, and emotion — where every frame tells a layered story.",
    image: "/2.jpg",
    tags: "DESIGN, ART",
    content: {
      imageUrl: "/2.jpg",
      imageTitle: "Photo by Studio Name",
      subtitle: "The evolution of visual storytelling",
      date: "May 18, 2025",
      paragraphs: [
        "In the realm of visual storytelling, the boundaries between art and design continue to blur. What emerges is a new language of expression that draws from both disciplines while creating something entirely unique.",
        "This project represents our ongoing exploration of that boundary space. It's an attempt to capture the essence of a story through carefully crafted visual elements that work in harmony to create a cohesive narrative.",
        "The process began with a simple question: How can we convey complex emotions through minimal visual means? The answer led us down a path of experimentation and discovery, pushing us to reconsider our assumptions about form, texture, and composition.",
        "Each element in this collection was chosen with intention, each composition carefully balanced to create a sense of tension and release. The result is a body of work that invites the viewer to engage on multiple levels, to find their own meaning within the visual language we've created.",
        "As we look to the future, we remain committed to this exploration, to pushing the boundaries of what's possible in visual storytelling. We believe that the most compelling stories are those that resonate on an emotional level, that speak to something universal within the human experience.",
      ],
    },
  },
  {
    id: 3,
    slug: "art-vision-direction-3",
    category: ["STRATEGY", "DESIGN", "ART DIRECTION"],
    title: "THE ART, VISION AND DIRECTION",
    description: "A curated exploration of form, texture, and emotion — where every frame tells a layered story.",
    image: "/3.jpg",
    tags: "DIRECTION, STRATEGY",
    content: {
      imageUrl: "/3.jpg",
      imageTitle: "Photo by Studio Name",
      subtitle: "Finding balance in visual composition",
      date: "May 15, 2025",
      paragraphs: [
        "Balance is at the heart of effective visual composition. It's about finding harmony between opposing forces - light and shadow, form and space, movement and stillness.",
        "In this series, we've explored the concept of balance across different mediums and contexts. We've looked at how subtle shifts in composition can dramatically alter the emotional impact of an image, and how the careful arrangement of elements can guide the viewer's eye through a visual narrative.",
        "The work represents a culmination of our research into the psychological aspects of visual perception. How do we process visual information? What draws our attention? How do we make sense of what we see?",
        "Through this exploration, we've developed a deeper understanding of the relationship between form and meaning. We've learned that the most effective visual communications are those that align form with content, where the way something is presented reinforces what is being said.",
        "As we continue to refine our approach to art direction and design, these principles will guide our work. We remain committed to creating visual experiences that are not just aesthetically pleasing, but meaningful and impactful.",
      ],
    },
  },
  {
    id: 4,
    slug: "inspiration",
    category: ["PHOTOGRAPHY", "DESIGN"],
    title: "INSPIRATION",
    description: "Exploring the intersection of texture and form through a minimalist lens.",
    image: "/4.png",
    tags: "PHOTOGRAPHY, MINIMALISM",
    content: {
      imageUrl: "/4.png",
      imageTitle: "Photo by Studio Name",
      subtitle: "Finding inspiration in simplicity",
      date: "May 10, 2025",
      paragraphs: [
        "Minimalism isn't about absence - it's about intention. It's about stripping away the unnecessary to reveal the essential. In this exploration of minimalist design principles, we've sought to understand what makes a composition not just simple, but meaningful.",
        "The process began with observation. Looking closely at the world around us, finding beauty in the overlooked details of everyday life. A shadow cast on a wall, the texture of a fabric, the negative space between objects.",
        "From these observations, patterns began to emerge. We noticed how certain arrangements of elements created a sense of tension or release, how the quality of light could transform the mood of a space, how the relationship between objects could suggest a narrative.",
        "This collection represents our attempt to distill these observations into a visual language that celebrates simplicity without sacrificing depth. Each image is carefully composed to create a sense of balance and harmony, while leaving room for interpretation and personal connection.",
        "As we continue to explore the possibilities of minimalist design, we remain committed to the idea that less can indeed be more - that by reducing visual noise, we can create space for deeper meaning and connection.",
      ],
    },
  },
]

/**
 * Get an article by its slug
 */
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

/**
 * Get related articles (excluding the current article)
 */
export function getRelatedArticles(currentSlug: string): Article[] {
  return articles.filter((article) => article.slug !== currentSlug).slice(0, 3) // Return up to 3 related articles
}
