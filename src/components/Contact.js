import React from "react"

import styled from 'styled-components'
const Container = styled.div`
    margin: 1em 0;
    display: flex;
    flex-wrap: wrap;
    div {
        flex: 1 1 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50vh;
    }
    .email{
        color: ${({ theme }) => theme.brandText};
        background: ${({ theme }) => theme.brandColor};
    }
`

const Nav = ({ children }) => {

    return (
        <Container id="contact">
            <div>
                <a href="mailto:mail@olivermeredith.com">
                    <h2>Say hi</h2>
                </a>
            </div>
            <div className="email">
                <a href="mailto:mail@olivermeredith.com">
                    <h2 className="shrinks">mail@olivermeredith.com</h2>
                </a>
            </div>
        </Container>
    )
}

export default Nav