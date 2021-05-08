import * as React from "react"
import { graphql, useStaticQuery, Link, Img } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import { SocialIcon } from 'react-social-icons'
import styled from 'styled-components';
import { PrimaryBtn, LinkIcons } from '../components/Elements/UiElements'
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
                       links
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
                const { title, description, fields, thumbnail, links } = node.frontmatter
                const { slug } = node.fields

                return (
                    <Project>
                        <div className="text">
                            <div className="title">
                                <h1>
                                    <span>
                                        {i + 1}.
                                    </span>
                                    {title}
                                </h1>
                                {links &&
                                    <LinksContainer>
                                        <LinkIcons links={links} />
                                    </LinksContainer>
                                }
                            </div>
                            <p dangerouslySetInnerHTML={{ __html: description }}></p>
                        </div>
                        <Link to={slug} key={slug}>
                            <div className="image">
                                <img src={`${thumbnail.publicURL}`} />
                            </div>
                        </Link>
                    </Project>
                )
            })}
        </div>
    )
}

const LinksContainer = styled.div`
    margin: .5em 1em;
    display: flex; 
    a:not(:last-of-type){
        margin-right: 1em;
    }
   a g.social-svg-mask path{
        fill: ${({ theme }) => theme.textColor};
    }
`

const Project = styled.div`
    margin: 2em 0;
    .text{
        margin-bottom: .5em;
        max-width: 600px;
        .title{
            display: flex;
            flex-wrap: wrap; 
            align-items: center;
        }
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

