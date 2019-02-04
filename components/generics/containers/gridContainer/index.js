import React from 'react'
import styled,{css} from 'styled-components'

export const GridContainerBase = css`
    display: grid;
    grid-template-columns: ${props => props.grid || props.children.map(item => '1r').join('')}
    ${props => props.image 
        ? `
            background-image: url(${props.image});
            background-size: 40%;
            background-repeat: no-repeat; 
            background-position: center center;
        `
        : ` `
    }
    `

const GridContainer = styled.div`
    ${GridContainerBase}
`

export default GridContainer