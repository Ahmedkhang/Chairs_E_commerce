import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import { author } from './author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,author],
}
