import {Container, Content, Simulacao } from './style';
import { FiAlertCircle } from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useEffect, useState } from 'react';



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
    const [texteCorIndexPre , setTextCorIndexPre] = useState('#000000');
    const [texteCorIndexPos, setTextCorIndexPos] = useState('#EFEFEF');
    const [texteCorIndexFixado , setTextCor1IndexFixado] = useState('#000000');
    
    const [indicadores, setIndicadores] = useState<any>([]);
    const [cdi, setCdi] = useState<any>('');
    const [ipca, setIpca] = useState<any>('');

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

     useEffect(()=>{
         console.log('teste')
        fetch('http://localhost:3000/indicadores')
        .then((response: any) => response.json())
        .then((json) => setIndicadores(json));
    }, []);
    useEffect(()=>{
        if(indicadores[0]){
            setCdi(indicadores[0])
        }
        if(indicadores[1]){
            setIpca(indicadores[1]);
        }
    });
  
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
                            <label htmlFor="">Prazo(em meses)</label>
                                <input type="text" />
                            </li>
                            <li>
                            <label htmlFor="">IPCA(ao ano)</label>
                                <input 
                                    type="text" 
                                    value={`${ipca.valor}%`}
                                    disabled
                                />
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
                                            setTextCorIndexPre('#EFEFEF')
                                            setCorIndexPre('#ED8E53');
                                            setCorIndexFixado('#EFEFEF');
                                            setCorIndexPos('#EFEFEF');
                                            setTextCorIndexPos('#000000');
                                            setTextCor1IndexFixado('#000000');
                                        }else{
                                            setCorIndexPre('#ED8E53');
                                        }
                                    }}
                                    style={{background: corIndexPre, color: texteCorIndexPre}}
                                    >
                                        <IconContext.Provider value={{ color: "#EFEFEF", className: "IconButton" }}>
                                        <AiOutlineCheck size={15}  />
                                        </IconContext.Provider>
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
                                            setTextCorIndexPos('#EFEFEF');
                                            setTextCorIndexPre('#000000');
                                            setTextCor1IndexFixado('#000000');
                                        }
                                    }}
                                    style={{background: corIndexPos, color: texteCorIndexPos, borderRadius: '0px', borderLeft:'2px solid #000000', borderRight:'2px solid #000000'}}
                                    >
                                        <IconContext.Provider value={{ color: "#EFEFEF", className: "IconButton" }}>
                                        <AiOutlineCheck size={15}  />
                                        </IconContext.Provider>
                                        POS
                                    </button>
                                    <button 
                                    className='ultimo' 
                                    onClick={(event)=>{
                                        event.preventDefault();
                                        if(corIndexFixado === '#EFEFEF'){
                                            setCorIndexFixado('#ED8E53');
                                            setTextCorIndexPre('#000000');
                                            setCorIndexPos('#EFEFEF');
                                            setCorIndexPre('#EFEFEF');
                                            setTextCorIndexPos('#000000');
                                            setTextCor1IndexFixado('#EFEFEF');
                                        }else{
                                            setCorIndexFixado('#ED8E53');
                                        }
                                    }}
                                    style={{background: corIndexFixado, color: texteCorIndexFixado}}
                                    >
                                        <IconContext.Provider value={{ color: "#EFEFEF", className: "IconButton" }}>
                                        <AiOutlineCheck size={15}  />
                                        </IconContext.Provider>
                                        FIXADO
                                    </button>
                                </div>
                        </li>
                            <li>
                                <label htmlFor="aporte" >Aporte Mensal</label>
                                <input type="text" id='aporte'/>
                            </li>
                            <li>
                            <label htmlFor="">Rentabilidade</label>
                                <input type="text" />
                            </li>
                            <li>
                            <label htmlFor="">CDI(ao ano)</label>
                            <input 
                                
                                type="text" 
                                value={`${cdi.valor}%`}
                                disabled
                            />        
                            </li>
                        </ul>
                        <button className='buttomLimpar'>Limpar Campos</button>
                        <button className='buttomSimular'>Simular</button>
                    </form>

                <Simulacao>
                    <h2>Simulador</h2>
                    <ul>
                        <li>
                            Valor Final Bruto
                            <p>R$ 15.465135,27</p>
                        </li>
                        <li>
                            Alíquota do IR
                            <p>R$ 15.465135,27</p>
                        </li>
                        <li>
                            Valor Pago em IR
                            <p>R$ 15.465135,27</p>
                        </li>
                        <li>
                            Valor Final Líquido
                            <p className='Pgreen'>R$ 15.465135,27</p>
                        </li>
                        <li>
                            Valor Total Investido 
                            <p>R$ 15.465135,27</p>
                        </li>
                        <li>
                            Ganho Líquido
                            <p className='Pgreen'>R$ 15.465135,27</p>
                        </li>
                    </ul>
                </Simulacao>
                </div>
            </Content>
            
        </Container>
    )
}