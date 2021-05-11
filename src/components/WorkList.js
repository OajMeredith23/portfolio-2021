import * as React from "react"
import { graphql, useStaticQuery, Link, Img } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import { SocialIcon } from 'react-social-icons'
import styled from 'styled-components';
import { PrimaryBtn, LinkIcons, Title } from '../components/Elements/UiElements';

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
                       color
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
                const { title, description, fields, thumbnail, links, color } = node.frontmatter
                const { slug } = node.fields
                console.log(title, thumbnail)
                return (
                    <Project key={node.id}>
                        <div className="text">
                            <div className="title">
                                <Link to={slug}>
                                    <Title color={color && color}>
                                        <span>
                                            {i + 1}.
                                        </span>
                                        {title}
                                    </Title>
                                </Link>
                                {links && <LinkIcons links={links} />}
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


const Project = styled.div`
    margin: 5em 0;
    .text{
        padding: 0 1em;
        margin: 1em 0 1.5em 0;
        max-width: 650px;
        padding-right: 2em;
        .title{
            margin-bottom: .5em;
            display: flex;
            flex-wrap: wrap; 
            align-items: center;
            // h1 span{
            //     color: ${({ theme }) => theme.brandColor}
            // }
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

