import React from 'react'
import styled,{css} from 'styled-components'

export const CenterContainerBase = css`
    display:flex;
    justify-content: ${props => props.position || 'center'};
    align-items: center;
    flex-direction: column;
    ${props => props.image 
        ? `
            background-image: url(${props.image});
            background-size: contain;
            background-repeat: no-repeat; 
        `
        : ` `
    }
`

const CenterContainer = styled.div`
    ${CenterContainerBase}
`

export default CenterContainer