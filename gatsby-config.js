module.exports = {
  siteMetadata: {
    title: `whoami`,
    description: `personal description`,
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `./src/assets/images/fav.png`,
      },
    },
  ],
}
