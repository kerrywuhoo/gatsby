module.exports = {
  siteMetadata: {
    title: "Kerry's Portolio",
    author: "Kerry Wu",
    description: "A Project Portfolio using Gatsby.js V2, based on Dimension by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
  pathPrefix: "/gatsby",
}
