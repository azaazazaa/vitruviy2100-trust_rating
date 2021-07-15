const NODE_ENV = process.env.NODE_ENV === 'development'
  ? 'development'
  : 'production'
// ...
module.exports = {
  // ...
  css: {
    extract: NODE_ENV === 'production',
    loaderOptions: {
      sass: {
        data: `@import "@/styles/env-${NODE_ENV}.scss";`
      }
    }
  }
}
