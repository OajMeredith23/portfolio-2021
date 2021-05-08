import * as React from "react"
import { graphql, useStaticQuery, Link, Img } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components';

export default function WorkList() {

    const data = useStaticQuery(
        graphql`
   
       query{
           allMarkdownRemark(
                sort: {fields: [frontmatter___order], order: ASC}
               filter: {
                   frontmatter: 
                   {category: {eq: "work"}
                   }
                   }
               ) {
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
        <div id="work">
            {posts.map(({ node }, i) => {
                const { title, description, fields, thumbnail } = node.frontmatter
                const { slug } = node.fields

                return (
                    <Link to={slug} key={slug}>
                        <Project>
                            <div className="text">
                                <h1>
                                    <span>
                                        {i + 1}.
                                    </span>
                                    {title}
                                </h1>
                                <p>{description}</p>
                            </div>
                            <div className="image">
                                <img src={`${thumbnail.publicURL}`} />
                            </div>
                        </Project>
                    </Link>
                )
            })}
        </div>
    )
}


const Project = styled.div`
    margin: 2em 0;
    .text{
        margin-bottom: .5em;
    }
    .image{
        width: 100%; 
        padding-bottom: 56%;
        position: relative;
        overflow: hidden; 
        img{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%; 
            height: 100%;
            object-fit: cover;
        }
    }
`

