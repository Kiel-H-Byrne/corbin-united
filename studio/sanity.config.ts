import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// export default defineCliConfig({
//   //…
//   deployment: {
//     appId: 't6ubvrofaco3tfmq07nawzj2',
//   },
//   //…
// })

export default defineConfig({
  name: 'default',
  title: 'Corbin United CMS',

  projectId: 'zxiksswa',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
