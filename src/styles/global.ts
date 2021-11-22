import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        background: #3c424a;
        font-size: 62.5%;
    }
    html, body, #__next {
        height: 100%;
    }
    body {
        font-family: 'Roboto', sans-serif;
    }
`

export default GlobalStyles
