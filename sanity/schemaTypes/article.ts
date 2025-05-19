import { defineField, defineType } from "sanity"

export default defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "string",
      description: 'Tags separated by • (e.g., "STRATEGY • DESIGN • ART DIRECTION")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Used for the article URL",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Controls the order of articles in the carousel",
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
          options: {
            isHighlighted: true,
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: "caption",
          title: "Caption",
          type: "string",
          options: {
            isHighlighted: true,
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      description: "A brief description for article listings",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedDate",
      title: "Published Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    // Reference to the article detail
    defineField({
      name: "articleDetail",
      title: "Article Detail",
      type: "reference",
      to: [{ type: "articleDetail" }],
      description: "Link to the full article detail content",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "heroImage",
    },
  },
})
