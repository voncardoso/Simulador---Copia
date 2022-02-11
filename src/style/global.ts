import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #FFFFFF;
        --background-secondary: #EFEFEF;
        --Button: #ED8E53;
        --Button-secundario: #969696;
        --Tex: #000000;
        --Valores: #62B154;
        --Tex-secundary: #FFFFFF;
   }
   
   *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%; // 15px
           
        }

        @media (max-width: 720px){
            font-size: 87.5%; // 14px
            
        }
    }

    body{
        background: var(--background);
        --webkit-font-font-smooth: antialiased; // deixar a finte mais nitida
    }

    body, input, textarea, button{
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: normal;
        
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: bold;
    }

    button {
        cursor: pointer;
    }
    a{
        text-decoration: none;
        color: var( --Tex);
        
    }

    ul{
        list-style: none;
    }
`;