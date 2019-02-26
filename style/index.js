import { createGlobalStyle } from 'styled-components'
import themeBase from './theme'

const GlobalStyle = createGlobalStyle`
  html, body, #__next{
    height:100%;
  }

  body {
    padding: 0;
    margin: 0;
    overflow-x:hidden;
    background: ${props => props.theme.main.background};
    font-family: ${props => props.theme.main.font};
    color: ${props => props.theme.main.color};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  a{
      color: ${props => props.theme.primaryNav.color || 'blue'};
      text-decoration: none;
      text-transform: uppercase;
      font-size:1.2rem;
      letter-spacing: 0.09rem;
      &:hover{
          color: ${props => props.theme.primaryNav.hoverColor || 'blue'};
      }
  }
`

export const theme = themeBase

export default GlobalStyle