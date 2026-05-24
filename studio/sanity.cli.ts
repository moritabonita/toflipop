import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '0sej8qnd',
    dataset: 'toflipop-production',
  },
  deployment: {
    appId: 'jql93x0dmw5p2o4mzvhe5v0c',
    autoUpdates: true,
  },
})
