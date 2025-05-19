import { defineField, defineType } from "sanity"

export default defineType({
  name: "articleDetail",
  title: "Article Detail",
  type: "document",
  fields: [
    // Reference back to the parent article
    defineField({
      name: "articles",
      title: "Parent Article",
      type: "reference",
      to: [{ type: "article" }],
      description: "The parent article this detail belongs to",
      validation: (Rule) => Rule.required(),
    }),
    // Subtitle for the detail page (e.g., "Begin Boldly")
    defineField({
      name: "subtitle",
      title: "Subtitle",
      description: "The bold heading below the hero image (e.g., 'Begin Boldly')",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    // Full content for the detail page
    defineField({
      name: "fullContent",
      title: "Full Article Content",
      description: "Use — to create line breaks in paragraphs",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    // Rich content (optional)
    defineField({
      name: "richContent",
      title: "Rich Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alternative Text",
              type: "string",
              options: {
                isHighlighted: true,
              },
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
        },
      ],
    }),
    // Developer credit
    defineField({
      name: "credit",
      title: " Credit",
      type: "string",
      description: "Credit",
      initialValue: "DEVELOPED WITH LOVE BY SMOEDESIGN",
    }),
    // Social sharing options
    defineField({
      name: "socialShareOptions",
      title: "Social Share Options",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              title: "Platform",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "url",
            },
          ],
        },
      ],
    }),
    // Related stories
    defineField({
      name: "relatedStories",
      title: "Related Stories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "article" }],
        },
      ],
    }),
    // CTA section
    defineField({
      name: "ctaTitle",
      title: "CTA Title",
      type: "string",
      description: "Title for the call-to-action section (e.g., 'WHATS YOUR STORY?')",
      initialValue: "WHATS YOUR STORY?",
    }),
    defineField({
      name: "ctaDescription",
      title: "CTA Description",
      type: "string",
      description: "Description for the call-to-action section",
      initialValue: 'TELL US YOUR STORY AND "MARKETING COPY"',
    }),
    defineField({
      name: "ctaButtonText",
      title: "CTA Button Text",
      type: "string",
      description: "Text for the call-to-action button (e.g., 'LET'S TALK')",
      initialValue: "LET'S TALK",
    }),
    defineField({
      name: "ctaButtonLink",
      title: "CTA Button Link",
      type: "string",
      description: "Link for the call-to-action button",
      initialValue: "/contact",
    }),
    // Breadcrumbs for navigation
    defineField({
      name: "breadcrumbs",
      title: "Breadcrumbs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "link",
              title: "Link",
              type: "string",
            },
          ],
        },
      ],
      description: "Navigation breadcrumbs for the article",
    }),
    // SEO metadata
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
        },
        {
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
        },
        {
          name: "openGraphImage",
          title: "Open Graph Image",
          type: "image",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "article.title",
      subtitle: "subtitle",
    },
  },
})
