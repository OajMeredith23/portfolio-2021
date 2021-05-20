import React, { useState, useEffect } from "react"
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet';
import favicon from '../images/icon.png'
import Nav from './Nav';
import Contact from './Contact'
import Footer from './Footer'
import { motion, AnimatePresence } from 'framer-motion'

const duration = 0.3

const variants = {
    initial: {
        opacity: 0,
        x: 50
    },
    enter: {
        opacity: 1,
        x: 0,
        transition: {
            duration: duration,
            delay: duration,
            when: 'beforeChildren',
        },
    },
    exit: {
        opacity: 0,
        x: -50,
        transition: { duration: duration },
    },
}

const GlobalStyle = createGlobalStyle`
    body, html {
        font-family: 'poppins', sans-sersif;
        font-size: 100%;
        color: ${({ theme }) => theme.textColor};
        background-color: ${({ theme }) => theme.background};
        transition: .3s ease-out;
        scroll-behavior: smooth;
        scroll-padding: 3em 0;
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


    p a, a li {
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

        brandColor: `#e32b59`,
        brandText: `#fafaf7`,
        background: `#404040`,
        middleground: `#595959`,
        textColor: `#fafaf7`
    },
    light: {
        brandColor: `#e32b59`,
        brandText: `#fafaf7`,
        background: `#fafaf7`,
        middleground: `whitesmoke`,
        textColor: `#1a1919`
    }
}

const Container = styled.main`
    max-width: 1080px;
    margin: 0 auto;
    padding: 1em;
    `
// position: relative;

const title = "Oliver Meredith | Front-end developer & user-experience designer"
const description = "A front-end developer that builds upon a foundation in design. Creator of interesting, exciting digital experiences that build upon an education in UI/UX Design and 5 years experience using a variety of different web technologies."

const Layout = ({ children, location }) => {

    const [darkMode, setDarkMode] = useState(false);
    const prefersDarkMode = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;

    useEffect(() => {
        setDarkMode(prefersDarkMode)
    }, []);

    return (
        <div>
            <ThemeProvider
                theme={darkMode ? theme.dark : theme.light}
            >

                <Helmet title={title} defer={false}>
                    <meta name="description" content={description} />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="og:type" content="website" />
                    <link rel="icon" href={favicon} />
                </Helmet>

                <GlobalStyle />

                <Container>

                    <Nav setDarkMode={setDarkMode} darkMode={darkMode} />
                    <AnimatePresence>
                        <motion.main
                            key={location?.pathname}
                            variants={variants}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                        >
                            {children}
                        </motion.main>
                    </AnimatePresence>

                    <Contact />

                    <Footer />

                </Container>

            </ThemeProvider>
        </div>
    )
}

export default Layout