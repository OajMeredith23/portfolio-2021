import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import { useLocation } from "@reach/router"
import { Link } from 'gatsby'
import Landing from './Landing';

const links = [
    {
        title: 'Work',
        path: '/#work'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Contact',
        path: '/#contact'
    },
]

const LinkItem = styled.li`
    text-decoration: ${({ isCurrent }) => isCurrent ? 'none' : 'underline'}
`

const Container = styled.div`
    nav{
        display: flex; 
        align-items: flex-end;
        justify-content: space-between;
        h2 {
        }
        color: ${({ theme }) => theme.textColor};
    }
    `

const UL = styled.ul`
    display: flex;
    justify-content: center;
    flex: 1;
    li {
        margin: 0 .5em;
    }
    margin-top: 1em;
`

export const NavLinks = () => {

    const location = useLocation(); // NEW
    return (
        <UL>
            {links.map(link => {
                return (
                    <Link to={link.path} key={link.path}>
                        <LinkItem isCurrent={location.pathname === link.path}>
                            {link.title}
                        </LinkItem>
                    </Link>
                )
            })}
        </UL>
    )
}



const DarkModeToggle = styled.div`
    width: 50px;
    margin-left: ${({ isHome }) => isHome ? 'auto' : '0'};
    display: flex;
    justify-content: flex-end;
`

const Nav = ({ children, setDarkMode, darkMode }) => {
    const [isHome, setIsHome] = useState(true);

    const location = useLocation(); // NEW
    function checkIsHome() {
        const url = typeof window !== 'undefined' ? window.location.pathname === '/' : false;
        return url
    }

    useEffect(() => {
        const u = checkIsHome()
        setIsHome(u)
        console.log(location)
    }, [location.pathname])

    return (
        <Container>
            <nav>
                {/* {!isHome && */}
                <>
                    <div
                        style={{
                            width: '50px',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Link to="/">
                            <h2>o.m.</h2>
                        </Link>
                    </div>


                    <NavLinks />

                </>
                {/* } */}

                <DarkModeToggle isHome={isHome} onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? '🌙' : '☀️'}
                </DarkModeToggle>
            </nav>


        </Container >
    )
}

export default Nav