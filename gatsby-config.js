const path = require(`path`)

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
     {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: true,
      },
    },
  ]
}
