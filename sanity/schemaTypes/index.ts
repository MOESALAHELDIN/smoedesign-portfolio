import { type SchemaTypeDefinition } from 'sanity'


import {TermsType} from './termconditions'
import article from './article'
import carouselItem from './carouselItem'
import artDirectionPage from './artDirectionPage'
import articleDetail from './articleDetail'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [

    TermsType,
    carouselItem,
    article,
    articleDetail,
    artDirectionPage,
  ],
}
