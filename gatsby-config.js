module.exports = {
  flags: {
    THE_FLAG: false
  },
  siteMetadata: {
    title: "portfolio-3",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "work",
        path: "./content/work/",
      },
      __key: "work",
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `cormorant garamond\:300, 300i`,
          `poppins\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
  ],
};
