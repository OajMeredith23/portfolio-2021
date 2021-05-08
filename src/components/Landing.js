import * as React from 'react'
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons'
import { LinkIcons } from '../components/Elements/UiElements'

const Container = styled.div`
    position: relative;
    height: calc(50vh - 2em);
    margin: 1em 0; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: ${({ theme, color }) => color ? color : theme.brandColor}; 
    color: ${({ theme }) => theme.brandText};
`
const Landing = ({ title, description, children, color = false, links = false }) => {

    return (
        <Container color={color}>
            <h1>{title}</h1>
            <a href="http://" target="_blank" rel="noopener noreferrer"></a>
            <p
                style={{
                    maxWidth: '600px',
                    padding: '0 1em'
                }}
                className="emphasis text-center"
                dangerouslySetInnerHTML={{ __html: description }}
            ></p>
            {links &&
                <LinkIcons links={links} bgColor={color} isLanding={true} />
            }
            {children}
        </Container>
    )
}

const LinksContainer = styled.div`
    display: flex; 
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 1em 0;
    a:not(:last-of-type){
        margin-right: 1.5em;
    }
   a g.social-svg-mask path{
        fill: ${({ theme }) => theme.background};
    }
`

export default Landing