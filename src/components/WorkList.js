import * as React from "react"
import { graphql, useStaticQuery, Link, Img } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

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
                       thumbnail{
                           publicURL
                       }
                       
                       }
                       fields{
                           slug
                       }
                   }
               }
           }
           }
   
   `
    )

    const posts = data.allMarkdownRemark.edges;

    return (
        <div>
            {posts.map(({ node }) => {
                const { title, fields, thumbnail } = node.frontmatter
                const { slug } = node.fields

                console.log(`../../..${thumbnail.publicURL}`)
                return (
                    <Link to={slug} key={slug}>
                        <h1>{title}</h1>
                        <img src={`${thumbnail.publicURL}`} />
                    </Link>
                )
            })}
        </div>
    )
}

