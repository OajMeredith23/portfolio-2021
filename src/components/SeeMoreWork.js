import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby';
import styled from 'styled-components'
export default function SeeMoreWork({ currTitle }) {

    const data = useStaticQuery(
        graphql`
   
       query{
           allMarkdownRemark(
                sort: {fields: [frontmatter___order], order: ASC}
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
    console.log({ posts }, { currTitle })

    return (
        <Container>
            <h4>See more work</h4>
            {posts.filter(({ node }) => node.frontmatter.title !== currTitle).map(({ node }) => {
                const { title, color } = node.frontmatter;
                return (
                    <Link to={node.fields.slug} key={node.id}>
                        <Item color={color}>
                            <h1>{title}</h1>
                        </Item>
                    </Link>
                )
            })}

        </Container>
    )
}

const Container = styled.div`
    background: ${({ theme }) => theme.middleground};
    padding: 1em;
`

const Item = styled.div`
h1 {
    color: ${({ theme, color }) => color || theme.brandColor}
}
`