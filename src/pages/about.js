import React from 'react'
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons'
import profilePhoto from '../../static/media/profile.jpg'
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.div`
    display: flex;
    padding-top: 2em; 
    flex-wrap: wrap;
    min-height: 66vh;
    align-items: center;

    .image{
        img {
            width: calc(100% - 1em);
        }
    }
    .image, .text{
        flex: 1 1 400px;
    }

    .text{
        .title{
            display: flex; 
            align-items: center;
            a {
                margin-left: 1em;
            }
        }
    }
`
const About = () => {

    return (
        <Container>
            <div className="image">
                <StaticImage src="../../static/media/profile.jpg" alt="" />
            </div>
            <div className="text">
                <div className="title">
                    <h1>About</h1>
                    <SocialIcon url="https://github.com/OajMeredith23" />
                </div>
                <p style={{
                    margin: '.5em 0'
                }}>
                    <a href="https://indd.adobe.com/view/2679bcd4-4875-4b0b-91c6-432c63fe4752" target="_blank" rel="noopener noreferrer">
                        View CV
                    </a>
                </p>
                <p style={{
                    maxWidth: '45ch'
                }}>
                    A front-end developer that builds upon a foundation in design. Creator of interesting, exciting digital experiences that build upon an education in UI/UX Design and 5 years experience using a variety of different web technologies.
                </p>
            </div>
        </Container>
    )
}

export default About