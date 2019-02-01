import React from 'react'
import styled,{css} from 'styled-components'

const labelBase = css`
    margin-bottom:5px;
    font-size: 0.9rem;
    color: #ccc;
`

const Label = styled.label`
    ${labelBase}
`

export default Label