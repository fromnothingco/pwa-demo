import React from 'react'
import styled,{css} from 'styled-components'

export const ColumnContainerBase = css`
    display:flex;
    height:100%;
    background: ${props => props.theme.containers.background};
    flex-direction: column;
    flex:1;
    justify-content: center;
    ${props => props.image 
        ? `
            background-image: url(${props.image});
            background-size: ${props.imageSize || "cover"};
            background-repeat: no-repeat; 
            background-position: ${props.imagePos || "center center"} ;
        `
        : ` `
    }
`

const ColumnContainer = styled.div`
    ${ColumnContainerBase}
`

export default ColumnContainer