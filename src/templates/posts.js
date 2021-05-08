import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Helmet } from 'react-helmet'
import styled from 'styled-components';
import Landing from '../components/Landing'
import Video from '../components/Elements/Video'
export default ({ data }) => {

  const post = data.markdownRemark
  const { title, description, thumbnail, videoSrcURL } = post.frontmatter
  console.log({ videoSrcURL })
  const image = getImage(thumbnail)

  return (
    <>
      <Helmet title={title} defer={false}>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={thumbnail.publicURL} />
      </Helmet>

      <Landing
        title={title}
        description={description}
      ></Landing>
      <Container>
        <div className="cover-image">
          <GatsbyImage image={image} alt={title} />
        </div>
        {videoSrcURL !== null &&
          <div className="video">
            <Video
              title={title}
              videoSrcURL={videoSrcURL}
            />
          </div>
        }
        <Content dangerouslySetInnerHTML={{ __html: post.html }}></Content>
      </Container>
    </ >
  )
}

const Container = styled.div`
  .cover-image .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    picture, img {
      object-fit: contain;
    }
  }

  .video{
    margin-top: 1em;
    padding-bottom: 56.25%;
    position: relative;
    iframe{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

const Content = styled.div`
  img {
    width: 100%;
  }

  p {
    margin: 1em auto;
  }
  h1,h2,h3,h4,h5{
    margin-bottom: -.5em;
    margin-top: 2em;
  }
`
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
                publicURL
        }
        videoSrcURL
      }
    }
  }
  `