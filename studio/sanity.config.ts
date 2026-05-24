import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { product, post, blockContent } from './schemas'

export default defineConfig({
  name: 'toflipop-studio',
  title: 'Toflipop CMS',
  projectId: '0sej8qnd',
  dataset: 'toflipop-production',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: [product, post, blockContent],
  },
})
