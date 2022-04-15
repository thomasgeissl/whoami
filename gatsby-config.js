module.exports = {
  pathPrefix: "/whoami",
  siteMetadata: {
    title: `whoami`,
    description: `my personal introduction`,
    author: `Thomas Geissl`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/md`,
        name: `md`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `./src/assets/images/fav.png`,
      },
    },
  ],
}
