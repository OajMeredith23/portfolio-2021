import * as React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby';

export default function WorkList() {

    const data = useStaticQuery(
        graphql`
   
       query{
           allMarkdownRemark(filter: {frontmatter: {category: {eq: "work"}}}) {
               edges {
                   node {
                       id
                       frontmatter {
                       description
                       title
                       thumbnail {
                           publicURL
                           }
                       }
                   }
               }
           }
           }
   
   `
    )

    const posts = data.allMarkdownRemark.edges
    console.log({ data })
    return (
        <div>
            {posts.map(({ node }) => {
                const { title } = node.frontmatter
                return (
                    <h1>{title}</h1>
                )
            })}
        </div>
    )
}

