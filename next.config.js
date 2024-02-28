// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  images: {
    domains: ['localhost']
  },
  future: {
    webpack5: false
  }
  // ,workbox: {
  //   dev: process.env.NODE_ENV !== 'production'// or use a global variable to track the current NODE_ENV, etc to determine dev mode
  // }
})
