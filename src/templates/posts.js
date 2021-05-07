import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Helmet } from 'react-helmet'

export default ({ data }) => {

  const post = data.markdownRemark
  const { title, description, thumbnail } = post.frontmatter
  console.log({ title }, { description })
  const image = getImage(thumbnail)

  return (
    <div>
      <Helmet title={title} defer={false}>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <h1>
        {title}
      </h1>
      <p>{description}</p>
      <GatsbyImage image={image} alt={title} />
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </div >
  )
}


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        thumbnail{
            childImageSharp {
                gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                )
            }
        }
      }
    }
  }
  `