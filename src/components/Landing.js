import * as React from 'react'
import styled from 'styled-components';


const Container = styled.div`
    position: relative;
    height: calc(50vh - 2em);
    margin: 1em 0; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: ${({ theme }) => theme.brandColor}; 
    color: ${({ theme }) => theme.brandText};
`
const Landing = ({ title, description, children }) => {

    return (
        <Container>
            <h1>{title}</h1>
            <p className="emphasis text-center">{description}</p>
            {children}
        </Container>
    )
}

export default Landing