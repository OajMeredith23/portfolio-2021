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
    background: ${({ theme, color }) => color ? color : theme.brandColor}; 
    color: ${({ theme }) => theme.brandText};
`
const Landing = ({ title, description, children, color = false }) => {

    return (
        <Container color={color}>
            <h1>{title}</h1>
            <a href="http://" target="_blank" rel="noopener noreferrer"></a>
            <p
                style={{
                    maxWidth: '600px'
                }}
                className="emphasis text-center"
                dangerouslySetInnerHTML={{ __html: description }}
            ></p>
            {children}
        </Container>
    )
}

export default Landing