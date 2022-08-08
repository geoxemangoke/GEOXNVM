import { useState } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 1.5em;
    color: palevioletred;
`
const Button = styled.button`
    background: ${props => props.primary ? 'palevioletred' : 'white'};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2pxsolid palevioletred;
    border-radius: 3px
`

const StyleComponent = () => {
    const [isPrimary, setIsPrimary] = useState(false)
    return (
        <div>
            <Title>Style Component Example</Title>
            <Button primary={isPrimary} onClick={() => setIsPrimary(!isPrimary)}>
                Change Color
            </Button>
        </div>
    )
}

export default StyleComponent;