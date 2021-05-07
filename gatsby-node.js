
exports.onCreateNode = ({ node }) => {
    console.log(`Node created of type "${node.internal.type}"`)
}

exports.createSchemaCustomization = ({ actions, schema }) => {
    const { createTypes } = actions

    const typeDefs = `
      type MarkdownRemark implements Node {
        frontmatter: Frontmatter
      }
      type Frontmatter {
        tags: [String!]!
      }
    `
    createTypes(typeDefs)
}


// exports.createPages = ({ graphql, actions }) => {
//     const { createPage } = actions

//     // **Note:** The graphql function call returns a Promise
//     // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
//     return graphql(`
//       {
//         allMarkdownRemark{
//           edges {
//             node {
//               fields {
//                 slug
//               }
//             }
//           }
//         }
//       }
//       `
//     ).then(result => {
//         result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//             createPage({
//                 path: node.fields.slug,
//                 component: path.resolve(`./src/templates/posts.js`),
//                 context: {
//                     // Data passed to context is available
//                     // in page queries as GraphQL variables.
//                     slug: node.fields.slug,
//                 },
//             })
//         })
//     })
// }