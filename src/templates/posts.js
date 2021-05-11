import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Helmet } from 'react-helmet'
import styled from 'styled-components';
import Landing from '../components/Landing'
import Video from '../components/Elements/Video'
export default ({ data }) => {

  const post = data.markdownRemark
  const {
    title,
    description,
    brief,
    solution,
    thumbnail,
    videoSrcURL,
    color,
    links
  } = post.frontmatter

  const image = getImage(thumbnail)

  return (
    <>
      <Helmet title={title} defer={false}>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content={thumbnail.publicURL} /> */}
      </Helmet>

      <Landing
        title={title}
        description={description}
        links={links}
        color={color}
      ></Landing>

      <Container>
        <div className="cover-image">
          <GatsbyImage image={image} alt={title} />
        </div>

        {brief &&
          <div className="text-section brief">
            <h1>Brief</h1>
            <p dangerouslySetInnerHTML={{ __html: brief }}></p>
          </div>
        }
        {solution &&
          <div className="text-section solution">
            <h1>Solution</h1>
            <p dangerouslySetInnerHTML={{ __html: solution }}></p>
          </div>
        }
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

  .text-section{
    margin: 1em 1em 2em 1em;
    max-width: 65ch;
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
        color
        links
        brief
        solution
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