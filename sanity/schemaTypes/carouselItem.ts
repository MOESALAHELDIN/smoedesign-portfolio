import { defineField, defineType } from "sanity"

export default defineType({
  name: "carouselItem",
  title: "Carousel Item",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // Enables the hotspot functionality for responsive cropping
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Important for SEO and accessibility",
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Controls the order of items in the carousel",
      validation: (Rule) => Rule.required().integer().positive(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
})
