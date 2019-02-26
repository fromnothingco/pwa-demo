import styled, {css} from 'styled-components'

export const PrimaryNavBase = css`
    &::-webkit-scrollbar { 
        display: none; 
    }
    width:100%;
    overflow-x:auto;
    -webkit-overflow-scrolling: touch;
    ul {
        margin:0;
        padding:0;
        list-style:none;
        display:flex;
        ${props => props.position === "top"
        ?  `
            flex-direction: row;
        `
        : `flex-direction:column;`
        }
    }
    li{
        ${props => props.position === "top"
        ?  `
            padding: 1rem 0.5rem;
        `
        : ``
        }
        &:last-child{
            padding-right: 0.8rem;
        }
        &:first-child{
            padding-left: 16px;
        }
    }
    a{
        color: ${props => props.theme.primaryNav.color || 'blue'};
        text-decoration: none;
        text-transform: uppercase;
        font-size:0.8rem;
        letter-spacing: 0.09rem;
        &:hover{
            color: ${props => props.theme.primaryNav.hoverColor || 'blue'};
        }
    }
    &:after{
        content: '';
        background: linear-gradient(to right, rgba(0,0,0,0.12), rgba(0,0,0,1));
        width: 20px;
        position: fixed;
        top: 0;
        left: 95%;
        height: 69px;
        z-index: 10;
    }

    &:before{
        content: '';
        background: linear-gradient(to left, rgba(0,0,0,0.12), rgba(0,0,0,1));
        width: 20px;
        position: fixed;
        top: 0;
        left: 86px;
        height: 69px;
        z-index: 10;
    }
`

const PrimaryNav = styled.nav`
    ${PrimaryNavBase}  
`

export default ({items, position}) => 
    <PrimaryNav position={position}>
        <ul>
            {items.map(item => 
                <li>{item.component || <a href={item.url}>{item.alias}</a>}</li>
            )}
        </ul>
    </PrimaryNav>