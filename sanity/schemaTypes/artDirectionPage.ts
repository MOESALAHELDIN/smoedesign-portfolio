import { defineField, defineType } from "sanity"

export default defineType({
  name: "artDirectionPage",
  title: "Art Direction Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Used for the page URL",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sectionNames",
      title: "Section Names",
      type: "array",
      of: [{ type: "string" }],
      description: "Names for the progress indicator sections",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "carouselItems",
      title: "Carousel Items",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "carouselItem" }],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "articles",
      title: "Articles",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "article" }],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "autoScrollSpeed",
      title: "Auto Scroll Speed (ms)",
      type: "number",
      description: "Time in milliseconds between auto-scrolls (e.g., 3000 for 3 seconds)",
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "object",
      fields: [
        defineField({
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
        }),
        defineField({
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
        }),
        defineField({
          name: "shareImage",
          title: "Share Image",
          type: "image",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
})
