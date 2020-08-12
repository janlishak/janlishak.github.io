module.exports = {
  siteMetadata: {
    description: "Personal page of Jan Lishak",
    locale: "en",
    title: "Jan Lishak",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "jans-special",
      },
    },
  ],
}
