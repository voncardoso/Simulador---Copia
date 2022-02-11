import {Container, Content, Simulacao } from './style';
import { FiAlertCircle } from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useState } from 'react';

export function Home(){
    const [buttonRendimento, setButtonRendimento] = useState(false);
    const [cor, setCor] = useState('#ED8E53');
    const [cor1, setCor1] = useState('');
    const [texteCor , setTextCor] = useState('');
    const [texteCor1 , setTextCor1] = useState('');

    function handleClickButtonRendimento(event: any){
        event.preventDefault();
        if(cor === '#ED8E53'){
            setCor1('#ED8E53');
            setCor('#EFEFEF');
            setTextCor('#000000');
            setTextCor1('#EFEFEF');
        }else{
            setCor1('#EFEFEF');
            setCor('#ED8E53');
            setTextCor('#EFEFEF');
            setTextCor1('#000000')
        }
    }
    console.log(cor);
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
                                    <button onClick={handleClickButtonRendimento}
                                    style={{background: cor1, color: texteCor1}}
                                    >
                                        <IconContext.Provider value={{ color: "#EFEFEF", className: "IconButton" }}>
                                         <AiOutlineCheck size={15}  />
                                        </IconContext.Provider>
                                        Bruto
                                    </button>

                                    <button 
                                    onClick={handleClickButtonRendimento}
                                    style={{background: cor, color: texteCor}}
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
                                    <button>PRE</button>
                                    <button>POS</button>
                                    <button className='ultimo'>FIXADO</button>
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