import styled, {css} from 'styled-components'

export const PrimaryNavBase = css`
    padding: ${props => props.theme.containers.padding}
`

const PrimaryNav = styled.nav`
    ${PrimaryNavBase}
    .menu-icon{
        display:none;
    }
    ul {
        margin:0;
        padding:0;
        list-style:none;
        display:flex;
        flex-direction:column;
    }
    @media(max-width:500px){
        position:fixed;
        top:0;
        width:100%;
        .menu-icon{
            display:block;
        }
        ul {
            margin:0;
            padding:0;
            position:fixed;
            left:0;
            width:100%;
            bottom:0; 
            flex-direction:row;
            box-shadow: -1px 0 5px rgba(0,0,0,0.3);
        }
        li{
            padding:1rem 1rem;
        }
    }
`

export default ({items}) => 
    <PrimaryNav>
        <ul>
            {items.map(item => 
                <li>{item.component || <a href={item.url}>{item.alias}</a>}</li>
            )}
        </ul>
    </PrimaryNav>