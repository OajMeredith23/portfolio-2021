import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import { useLocation } from "@reach/router"
import { Link } from 'gatsby'
import Landing from './Landing';
const Container = styled.div`
    nav{
        display: flex; 
        align-items: flex-end;
    }
    `
// justify-content: space-between;

const UL = styled.ul`
    display: flex;
    align-self: flex-end;
    li {
        margin: 0 .5em;
    }
    margin-top: 1em;
    margin-left: auto;
`

const DarkModeToggle = styled.div`
    margin-left: ${({ isHome }) => isHome ? 'auto' : '1em'};
    margin-right: .5em;
`

const Nav = ({ children, setDarkMode, darkMode }) => {
    const [isHome, setIsHome] = useState(true);

    const location = useLocation(); // NEW
    console.log({ location })
    function checkIsHome() {
        const url = typeof window !== 'undefined' ? window.location.pathname === '/' : false;
        return url
    }

    useEffect(() => {
        const u = checkIsHome()
        console.log({ u }, u);
        setIsHome(u)
    }, [location.pathname])

    return (
        <Container>
            <nav>
                {!isHome &&
                    <>
                        <Link to="/">
                            <h2>Oliver Meredith</h2>
                        </Link>
                        <UL>
                            <Link to="/#work">
                                <li>
                                    Work
                            </li>
                            </Link>
                            <li>
                                About
                            </li>
                            <a href="#contact">
                                <li>
                                    Contact
                            </li>
                            </a>
                        </UL>
                    </>
                }
                <DarkModeToggle isHome={isHome} onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? '🌙' : '☀️'}
                </DarkModeToggle>
            </nav>


        </Container>
    )
}

export default Nav