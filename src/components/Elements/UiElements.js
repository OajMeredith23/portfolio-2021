import React from 'react'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons'
import { Link } from 'gatsby';
import { Link as LinkIcon } from '@material-ui/icons';


export const PrimaryBtn = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme, bgColor }) => bgColor ? theme.brandText : theme.textColor}; 
    color: ${({ theme, bgColor }) => bgColor ? bgColor : theme.background}; 
    border-radius: 1000px;
    cursor: pointer;
`

export const Title = styled.h1`
    position: relative;
    z-index: 1;
    &::before{
        content: '';
        position: absolute;
        bottom: .1em;
        left: 1em;
        right: 0;
        height: 0.15em;
        z-index: -1;
        background: ${({ theme, color }) => color ? color : theme.brandColor};
        transition: .1s ease-in-out;
    }
    &:hover:before{
        left: 0;
    }
`

const LinksContainer = styled.div`
    margin: .5em 1em;
    display: flex; 
    a:not(:last-of-type){
        margin-right: 1em;
    }
   a g.social-svg-mask path{
        fill: ${({ theme, bgColor }) => bgColor ? theme.brandText : theme.textColor};
    }
`

export const LinkIcons = ({ links, bgColor = false, isLanding = true }) => {
    const linkIsSocial = link => link.includes('github') || link.includes('behance')


    return (
        <LinksContainer bgColor={bgColor} isLanding={isLanding}>
            {links.map(link => {
                return (
                    linkIsSocial(link) ?
                        <SocialIcon
                            key={link}
                            url={link}
                        />
                        :
                        <a href={link} key={link}>
                            <PrimaryBtn bgColor={bgColor}><LinkIcon /></PrimaryBtn>
                        </a>
                )
            })
            }
        </LinksContainer>

    )
}