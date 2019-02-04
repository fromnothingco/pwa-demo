import styled, {css} from 'styled-components'

export const PrimaryNavBase = css`
    padding: ${props => props.theme.containers.padding}
`

const PrimaryNav = styled.nav`
    ${PrimaryNavBase}
    .menu-icon{
        display:none;
    }
    @media(max-width:500px){
        position:fixed;
        top:0;
        width:100%;
        .menu-icon{
            display:block;
        }
        ul {
            position:fixed;
            right:-100%;
            top:0;
        }
    }
`

export default ({items}) => 
    <PrimaryNav>
        <a className="menu-icon" href="#">menu</a>
        <ul>
            {items.map(item => 
                <li>{item.component || <a href={item.url}>{item.alias}</a>}</li>
            )}
        </ul>
    </PrimaryNav>