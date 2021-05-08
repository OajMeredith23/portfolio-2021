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
    background: ${({ theme, bgColor }) => bgColor ? theme.background : theme.textColor}; 
    color: ${({ theme, bgColor }) => bgColor ? bgColor : theme.background}; 
    border-radius: 1000px;
    curosr: pointer
`

export const LinkIcons = ({ links, bgColor = false }) => {
    const linkIsSocial = link => link.includes('github') || link.includes('behance')


    return (
        <>
            {links.map(link => {
                return (
                    linkIsSocial(link) ?
                        <SocialIcon
                            url={link}
                        />
                        :
                        <Link to={link}>
                            <PrimaryBtn bgColor={bgColor}><LinkIcon /></PrimaryBtn>
                        </Link>
                )
            })
            }
        </>

    )
}