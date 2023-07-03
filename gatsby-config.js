module.exports = {
  siteMetadata: {
    title: `TIE`,
    description: `TIE fighter fan site`,
    author: `Michael Saucedo`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["300", "400", "500", "700"],
              fontDisplay: "swap",
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        short_name: `Sienar`,
        name: `Sienar Fleet Systems`,
        icon: `src/assets/favicon/maskable.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        start_url: `/`,
        background_color: `#171717`,
        display: `standalone`,
        scope: `/`,
        theme_color: `#a5372a`,
        orientation: `any`,
        description: `TIE Starfigter fan page app`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/*`],
      },
    },
  ],
}
