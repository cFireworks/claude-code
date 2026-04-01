// Stub: ink devtools - requires react-devtools-core to be installed
// Only used in development mode (NODE_ENV=development)
export {}
import('react-devtools-core').then(({ connectToDevTools }) => {
  connectToDevTools()
}).catch(() => {
  // react-devtools-core not installed, skipping
})
