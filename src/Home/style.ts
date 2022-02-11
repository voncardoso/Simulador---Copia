import styled from "styled-components";


export const Container = styled.section`
    max-width: 1570px;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
`;


export const Content = styled.div`
    max-width: 1400px;
    width: 100%;
    height: 90%;
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

                ul{

                    h2{
                        margin-bottom: 20px;
                        margin-top: 50px;
                        weight: 100%;
                    }
                    li{
                        width: 220px;

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
                                width: 100%;
                                padding: 15px 20px;
                                text-align: center;
                                border: none;
                                border-radius: 10px 0px 0px 10px;
                                font-weight: normal;        
                                font-size: 0.875rem;                   
                            }
                            button+button{
                               
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
                            font-weight: normal;
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
                border-radius: 10px;
                margin-bottom: 40px;
                column-gap: 0px;
                button{
                    width: 90%;
                    padding: 15px 18px;
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
            border: 2px solid var(--Tex);
            top: 1px;
            max-width: 270px;
            position: relative;
            right: 42px;
            width: 100%;
            padding: 15px 0;
            font-size: 1rem;
            border-radius: 10px;
        }
        .buttomLimpar
        { 
            border: 2px solid var(--Tex);
            top: 1px;
            max-width: 270px;
            width: 100%;
            padding: 15px 0;
            font-size: 1rem;
            border-radius: 10px;
        }


    }
        @media (max-width: 900px){
            color: red;
            display: grid;
                grid-template-columns: 1fr;
            div{
                display: grid;
                grid-template-columns: 1fr;
            }
        }

}

.IconButton{
    position: relative;
    top: 2px;
    font-weight: bold;
}
`;

export const Simulacao = styled.section`
   padding-right: 10px;
   padding-left: 10px;
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
            background: red;
            margin-bottom: 30px;
            border-radius: 10px
        }
    }
`;