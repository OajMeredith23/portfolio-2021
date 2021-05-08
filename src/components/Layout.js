import React, { useState, useEffect } from "react"
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Nav from './Nav';
import Contact from './Contact'
import Footer from './Footer'

const GlobalStyle = createGlobalStyle`
    body, html {
        font-family: 'poppins', sans-serif;
        font-size: 100%;
        color: ${({ theme }) => theme.textColor};
        background-color: ${({ theme }) => theme.background};
        transition: .3s ease-out;
        scroll-behavior: smooth;
    }

    h1, h2, h3, h4, h5{
        font-size: 200%;
        font-family: 'cormorant garamond', sans-serif;
    }

    h1 {
        font-size: 2.5em;
        span{
            color: #8f8e84;
        }
    }
    h2 {
        @media(max-width: 400px){
            font-size: calc(2em - 45%);
        }
    }

    .italic{
        font-style: italic;
    }

    p a {
        text-decoration: underline;
    }
    a{
        text-decoration: none; 
        color: inherit;
    }

    .text-center{
        text-align: center;
    }
    li{
        list-style: none;
    }
    .horizontal-list{
        display: flex;
        li {
            margin: 0 .5em;
        }
    }
    .shrinks{
        
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: 0;
    }
    
`

const theme = {
    dark: {
        brandColor: `#15395e`,
        brandText: `#fafaf7`,
        background: `#1a1919`,
        textColor: `#fafaf7`
    },
    light: {
        brandColor: `#15395e`,
        brandText: `#fafaf7`,
        background: `#fafaf7`,
        textColor: `#1a1919`
    }
}

const Container = styled.main`
    max-width: 1080px;
    margin: 0 auto;
    padding: 1em;
    `
// position: relative;


const Layout = ({ children }) => {

    const [darkMode, setDarkMode] = useState(false);
    const prefersDarkMode = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;

    useEffect(() => {
        setDarkMode(prefersDarkMode)
        console.log("Layout")
    }, []);

    return (
        <div>
            <ThemeProvider
                theme={darkMode ? theme.dark : theme.light}
            >
                <GlobalStyle />
                <Container>

                    <Nav setDarkMode={setDarkMode} darkMode={darkMode} />
                    {children}
                    <Contact />
                    <Footer />
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default Layout