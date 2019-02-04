import styled, {css} from 'styled-components'

export const mastBase = css`
    padding: ${props => props.theme.containers.padding}
`

const Mast = styled.div`
    ${mastBase}
    

`

export default Mast