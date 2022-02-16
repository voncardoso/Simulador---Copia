import styled from "styled-components";


export const Container = styled.section`
    max-width: 1570px;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
`;


export const Content = styled.div`
    max-width: 1500px;
    width: 98%;
    height: 95%;
   // background: red;
   background: var(--background-secondary);
    h1{
        text-align: center;
        margin-top: 30px;
        font-size: 1.75rem;
    }

   div{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    align-self: center;
    justify-self: center;
    column-gap: 20px;
    
    
        form{
            display: grid;
            grid-template-columns: 0.8fr 0.8fr;
            column-gap: 20px;
            margin-left: 40px;
            align-items: center;
            max-width: 650px;
                ul{
                    
                    h2{
                        margin-bottom: 20px;
                        margin-top: 50px;
                        
                    }
                    li{
                        width: 280px;

                        .texteIcon{
                            display: flex;
                            justify-content: space-between;
                            margin: 0px;
                            font-size: 0.875rem;
                            font-weight: normal;
                            padding-bottom: 10px;
                        }

                        .texteButton{
                            display: flex;
                            width: 100%;
                            border: 2px solid #000000;
                            margin: 0px;
                            border-radius: 10px;
                            margin-bottom: 40px;
                            column-gap: 0px;
                            button{
                                width: 80%;
                                padding: 18px 25px;
                                text-align: center;
                                border: none;
                                border-radius: 10px 0px 0px 10px;
                                font-weight: normal;        
                                font-size: 0.875rem;                   
                            }
                            button+button{
                               border-left: 2px solid #000000;
                                border-radius: 0px 10px 10px 0px;
                                color: var(--Tex-secundary)
                            }
                            
                        }
                        label{
                            font-weight: normal;
                            font-size: 0.875rem
                        }
                        input{
                            width: 100%;
                            border: none;
                            background: var(--background-secondary);
                            border-bottom: 2px solid var(--Tex);
                            margin-bottom: 40px;
                            margin-top: 20px;
                            outline: none;
                            font-size: 1rem;
                            font-weight: 600;
                            color: var(--Tex);
                            padding-bottom: 5px;
                        }
                        input:focus{
                            border: none;
                            border-bottom: 2px solid var(--Tex);
                        }
                            
                    }
                }
            
            .textColor{
                color:var(--background-secondary)
            }

            .texteButton2{
                display: flex;
                width: 100%;
                border: 2px solid #000000;
                margin: 0px;
                border-radius: 12px;
                margin-bottom: 40px;
                column-gap: 0px;
                button{
                    width: 80%;
                    padding: 18px 10px;
                    text-align: center;
                    border: none;
                    border-radius: 10px 0px 0px 10px;
                    margin-left: 0px;
                    margin-right: 0px;
                    font-weight: normal;        
                    font-size: 0.875rem;         
                }
                .ultimo{
                    border-radius: 0px 10px 10px 0px;
                }
            }
          
            .buttomSimular
            { 
                font-weight: bold;
                border: 2px solid var(--Tex);
                background: var(--Button-secundario);
                top: 1px;
                max-width: 300px;
                position: relative;
                right: 15px;
                width: 100%;
                padding: 15px 0;
                font-size: 1rem;
                border-radius: 10px;
            }
            .buttomSimular:hover{
                background: var(--Button);
            }
            .buttomLimpar
            { 
                border: 2px solid var(--Tex);
                top: 1px;
                max-width: 300px;
                width: 100%;
                padding: 15px 0;
                font-size: 1rem;
                border-radius: 10px;
            }
            .buttomLimpar:hover{
                background: var(--Button);
            }
    }

}

    @media (max-width: 669px) {
        div{
            form{
            display: grid;
            grid-template-columns: 1fr;
            }
        }
    }
    @media (max-width: 1200px){
            display: grid;
                grid-template-columns: 1fr;
            div{
                display: grid;
                grid-template-columns: 1fr;
            }
        }

    .IconButton{
        position: relative;
        top: 2px;
        font-weight: bold;
    }
`;

export const Simulacao = styled.section`
   padding-right: 40px;
   padding-left: 40px;
   padding-bottom: 40px;
    h2{
        margin-top: 50px;
        margin-bottom: 20px;
    }
    ul{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 30px;
        align-self: center;
        height: 200px;
        li{
            width: 60px;
            width: 100%;
            background: var(--BoxSimulacao);
            margin-bottom: 30px;
            box-shadow: 0px 0px 10px 0px rgb(44, 44, 44, 0.20);
            text-align: center;
            padding-top: 10px;
            font-weight: bold;
            p{
                margin-top: 30px;
                margin-bottom: 10px;
                font-weight: normal;
                padding-left: 5px;
                padding-right: 5px;
            }
            .Pgreen{
                color: var(--Valores);
                padding-left: 5px;
                padding-right: 5px;
            }
        }
    }

`;