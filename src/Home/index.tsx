import {Container, Content, Simulacao } from './style';
import { FiAlertCircle } from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useState } from 'react';

export function Home(){
    // variaveis para alterar cor do butão do tipo de remdimento
    const [corLiquido, setCorLiquido] = useState('#ED8E53');
    const [corBruto, setCorBruto] = useState('');
    const [texteCorLiquido , setTextCorLiquido] = useState('');
    const [texteCorBruto , setTextCorBruto] = useState('');

    // variaveis para alterar cor do butão doTipo de indexação
    const [corIndexPre, setCorIndexPre] = useState('#EFEFEF');
    const [corIndexPos, setCorIndexPos] = useState('#ED8E53');
    const [corIndexFixado, setCorIndexFixado] = useState('#EFEFEF');
    const [texteCorIndexPre , setTextCor1IndexPre] = useState('');
    const [texteCorIndexPos, setTextCorIndexPos] = useState('');
    const [texteCorIndexFixado , setTextCor1IndexFixado] = useState('');
    

    function handleClickRendimento(event: any){
        event.preventDefault();
        if(corLiquido === '#ED8E53'){
            setCorBruto('#ED8E53');
            setCorLiquido('#EFEFEF');
            setTextCorLiquido('#000000');
            setTextCorBruto('#EFEFEF');
        }else{
            setCorBruto('#EFEFEF');
            setCorLiquido('#ED8E53');
            setTextCorLiquido('#EFEFEF');
            setTextCorBruto('#000000')
        }
    }
    
    function handleClickTipoIndexacao(event:any){
        event.preventDefault();

        if(corIndexPos === '#ED8E53'){
            setCorIndexPos('#EFEFEF');
        }else{
            setCorIndexPos('#ED8E53');
            setCorIndexPre('#EFEFEF');
        }
        if(corIndexFixado === '#EFEFEF'){
            setCorIndexFixado('#ED8E53');
        }else{
            setCorIndexFixado('#EFEFEF');
        }
    }
    return(
        <Container>
            <Content>
                <h1>Simulador de Investimentos</h1>
                <div>
                
                    <form className='formTotal'>
                    
                        <ul className='form'>
                            <h2>Simulador</h2>
                            <li>
                                <div className='texteIcon'>
                                    <p>Rendimento</p>
                                    <FiAlertCircle />
                                </div>
                                <div className='texteButton'>
                                    <button onClick={handleClickRendimento}
                                    style={{background: corBruto, color: texteCorBruto}}
                                    >
                                        <IconContext.Provider value={{ color: "#EFEFEF", className: "IconButton" }}>
                                         <AiOutlineCheck size={15}  />
                                        </IconContext.Provider>
                                        Bruto
                                    </button>

                                    <button 
                                    onClick={handleClickRendimento}
                                    style={{background: corLiquido, color: texteCorLiquido}}
                                    >
                                        <IconContext.Provider value={{ color: "#EFEFEF", className: "IconButton" }}>
                                         <AiOutlineCheck size={15}  />
                                        </IconContext.Provider>
                                        Liquido
                                    </button>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="aporte" >Aporte Inicial</label>
                                <input type="text" id='aporte'/>
                            </li>
                            <li>
                            <label htmlFor="">Aporte Inicial</label>
                                <input type="text" />
                            </li>
                            <li>
                            <label htmlFor="">Aporte Inicial</label>
                                <input type="text" />
                            </li>
                        </ul>
                        
                        {/* Tipo de indexação*/}
                        <ul className='form'>
                        <h2 className='textColor'>index</h2>
                        <li>
                                <div className='texteIcon'>
                                    <p>Tipo de indexação</p>
                                    <FiAlertCircle />
                                </div>
                                <div className='texteButton2'>
                                    <button 
                                    onClick={(event)=>{
                                        event.preventDefault()
                                        if(corIndexPre === '#EFEFEF'){
                                            console.log('pre');
                                            setCorIndexPre('#ED8E53');
                                            setCorIndexFixado('#EFEFEF');
                                            setCorIndexPos('#EFEFEF');
                                        }else{
                                            setCorIndexPre('#ED8E53');
                                        }
                                    }}
                                    style={{background: corIndexPre, color: texteCorLiquido}}
                                    >
                                        PRE
                                    </button>
                                    <button 
                                    
                                    onClick={(event)=>{
                                        event.preventDefault();
                                        if(corIndexPos === '#ED8E53'){
                                            
                                        }else{
                                            setCorIndexPos('#ED8E53');
                                            setCorIndexPre('#EFEFEF');
                                            setCorIndexFixado('#EFEFEF');
                                        }
                                    }}
                                    style={{background: corIndexPos, color: texteCorLiquido, borderRadius: '0px'}}
                                    >
                                        POS
                                    </button>
                                    <button 
                                    className='ultimo' 
                                    onClick={(event)=>{
                                        event.preventDefault();
                                        if(corIndexFixado === '#EFEFEF'){
                                            setCorIndexFixado('#ED8E53');
                                            setCorIndexPos('#EFEFEF');
                                            setCorIndexPre('#EFEFEF')
                                        }else{
                                            setCorIndexFixado('#ED8E53');
                                        }
                                    }}
                                    style={{background: corIndexFixado, color: texteCorLiquido}}
                                    >
                                        FIXADO
                                    </button>
                                </div>
                        </li>
                            <li>
                                <label htmlFor="aporte" >Aporte Inicial</label>
                                <input type="text" id='aporte'/>
                            </li>
                            <li>
                            <label htmlFor="">Aporte Inicial</label>
                                <input type="text" />
                            </li>
                            <li>
                            <label htmlFor="">Aporte Inicial</label>
                                <input type="text" />
                            </li>
                        </ul>
                        <button className='buttomLimpar'>Limpar Campos</button>
                        <button className='buttomSimular'>Simular</button>
                    </form>

                <Simulacao>
                    <h2>Simulador</h2>
                    <ul>
                        <li>fsafasfs</li>
                        <li>asfdasfasf</li>
                        <li>asfasfasfasfas</li>
                        <li>asfasfasfasfa</li>
                        <li>asfasfasfasfas</li>
                        <li>asfasfasfasas</li>
                    </ul>
                </Simulacao>
                </div>
            </Content>
            
        </Container>
    )
}