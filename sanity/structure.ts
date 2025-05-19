import type { StructureResolver } from 'sanity/structure'

// Custom desk structure for your current types
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('artDirectionPage').title('Art Direction Pages'),
      S.documentTypeListItem('article').title('Articles'),
      S.documentTypeListItem('articleDetail').title('Article Details'),
      S.documentTypeListItem('carouselItem').title('Carousel Items'),
      S.documentTypeListItem('termconditions').title('Terms and Conditions'),
    ])