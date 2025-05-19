import { defineField, Image } from "sanity";

export const TermsType = ({
    name: 'termconditions',
    title: 'Term and Conditions',
    type: 'document',
    icon: () => '📝',
    fields: [   

        defineField({
            name: 'headerImage',
            type: 'image',
            title: 'terms image',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'header',
            type: 'string',
            title: 'Header',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
          name:'subheading',
          type:'string',
          title:'Subheading',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'content',
            type:'string',
            title: 'Content',
            validation: (Rule) => Rule.required(),
        }),

        
    ],
    preview: {
        select: {
            media: 'headerImage',
            title: 'header',
            subtitle: 'subheading',
            content: 'content',
        },
       
    },
})