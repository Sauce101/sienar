module.exports = {
  siteMetadata: {
    title: `TIE`,
    description: `TIE fighter fan site`,
    author: `Michael Saucedo`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sienar Fleet Systems`,
        short_name: `Sienar`,
        start_url: `/`,
        background_color: `#171717`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#a5372a`,
        orientation: `any`,
        display: `minimal-ui`,
        icon: `src/assets/favicon/sienar.png`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `any maskable`,
        },
        description: `TIE Starfigter fan page app`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["100", "300", "400", "500", "700", "900"],
              //fontDisplay: 'swap',
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/*`],
      },
    },
  ],
}
