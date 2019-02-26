import React from 'react'
import styled,{css} from 'styled-components'

export const PositionContainerBase = css`
    display:flex;
    justify-content: ${props => props.align || 'center'};
    align-items: ${props => props.position || 'center'};
    flex-direction: ${props => props.column || 'column'};
    width: 100%;
    overflow-x: auto;
    ${props => props.image 
        ? `
            background-image: url(${props.image});
            background-position: ${props.imagePosition || 'left'}; 
            background-size: ${props.imageSize || 'cover'};
            background-repeat: no-repeat; 
        `
        : ` `
    }
    
`

const PositionContainer = styled.div`
    ${PositionContainerBase}
`

export default PositionContainer