import {Container, Content, Simulacao } from './style';
import { FiAlertCircle } from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useEffect, useRef, useState } from 'react';



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
    
    // banco de dados 
    const [indicadores, setIndicadores] = useState<any>([]);
    const [simulacoes, setSimulacoes] = useState<any>([]);

    // tipo de rendimento
    const [tipoRedeminto, setTipoRedeminto] = useState<any>('liquido');
    const [tipoIdexacao, setTipoIdexacao] = useState<any>('pos');
    const [aporteInicial, setAporteInicial] = useState('');
    const [prazo , setPrazo] = useState('');
    const [aporteMensal, setAporteMensal] = useState('');
    const [rentabilidade, setRentabilidade] = useState('');
    const [formStyle, setFormStyle] = useState<any>('none');

    const simulacao = useRef();
    // variaveis IPCA e CDI com storage
    const [cdi, setCdi] = useState<any>(()=>{
        const storageCdi = localStorage.getItem('cdi');

        if(storageCdi){
            const jsonPerse = JSON.parse(storageCdi);
            return jsonPerse;
        }
        return;
    });



    const [ipca, setIpca] = useState<any>(()=>{
        const storageIpca = localStorage.getItem('ipca');

        if(storageIpca){
            const jsonPerse = JSON.parse(storageIpca);
            return jsonPerse;
        }
        return;
    });

    
    

     useEffect(()=>{
         console.log('teste')
        fetch('http://localhost:3000/indicadores')
        .then((response: any) => response.json())
        .then((json) => setIndicadores(json));
    }, []);

    useEffect(()=>{
        console.log('teste')
        fetch('http://localhost:3000/simulacoes') 
        .then((response: any) => response.json())
        .then((json) => setSimulacoes(json));
   }, []);

   console.log('simulaçoes', simulacoes);

    useEffect(()=>{
        if(indicadores[0]){
            setCdi(indicadores[0].valor)
        }
        if(indicadores[1]){
            setIpca(indicadores[1].valor);
        }
    }, []);

    if(cdi){
        localStorage.setItem('cdi', JSON.stringify(cdi));
    }
    if(ipca){
        localStorage.setItem('ipca', JSON.stringify(ipca));
    }

    function handleSimulador(event: any){
        event.preventDefault();
        setFormStyle('block');
    }

    function handleClear(event: any){
        event.preventDefault();
        setFormStyle('none');
        setAporteInicial('');
        setAporteMensal('');
        setPrazo('');
        setRentabilidade('');
    }

    return(
        <Container>
            <Content>
                <h1>Simulador de Investimentos</h1>
                <div>
                
                    <form className='formTotal' onSubmit={handleSimulador}>
                    
                        <ul className='form'>
                            <h2>Simulador</h2>
                            <li>
                                <div className='texteIcon'>
                                    <p>Rendimento</p>
                                    <FiAlertCircle />
                                </div>
                                <div className='texteButton'>
                                    <button onClick={(event)=>{
                                        event.preventDefault();
                                        setCorBruto('#ED8E53');
                                        setCorLiquido('#EFEFEF')
                                        setTextCorLiquido('#000000');
                                        setTextCorBruto('#EFEFEF');

                                        setTipoRedeminto('bruto');
                                    }}
                                    style={{background: corBruto, color: texteCorBruto}}
                                    >
                                        <IconContext.Provider value={{ color: "#EFEFEF", className: "IconButton" }}>
                                         <AiOutlineCheck size={15}  />
                                        </IconContext.Provider>
                                        Bruto
                                    </button>

                                    <button 
                                    onClick={(event)=>{
                                        event.preventDefault();
                                        setCorLiquido('#ED8E53');
                                        setCorBruto('#EFEFEF');
                                        setTextCorLiquido('#EFEFEF');
                                        setTextCorBruto('#000000');

                                        setTipoRedeminto('liquido');
                                    }}
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
                                <input 
                                    type="text" 
                                    id='aporte'
                                    onChange={(event: any)=>{
                                        setAporteInicial(event.target.value)
                                    }}
                                    value={aporteInicial}
                                    required
                                    />
                            </li>
                            <li>
                            <label htmlFor="">Prazo(em meses)</label>
                                <input 
                                    type="text" 
                                    id='aporte'
                                    onChange={(event: any)=>{
                                        setPrazo(event.target.value)
                                    }}
                                    value={prazo}
                                    required
                                    />
                            </li>
                            <li>
                            <label htmlFor="">IPCA(ao ano)</label>
                                <input 
                                    type="text" 
                                    value={`${ipca}%`}
                                    disabled
                                    required
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
                                        event.preventDefault();
                                        setTipoIdexacao('pre');
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
                                        setTipoIdexacao('pos');
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
                                        setTipoIdexacao('ipca');
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
                                <input 
                                    type="text" 
                                    id='aporte'
                                    onChange={(event: any)=>{
                                        setAporteMensal(event.target.value)
                                    }}
                                    value={aporteMensal}
                                    required
                                />
                            </li>
                            <li>
                            <label htmlFor="">Rentabilidade</label>
                                <input 
                                    type="text"  
                                    onChange={(event: any)=>{
                                        setRentabilidade(event.target.value)
                                    }}
                                    value={rentabilidade}
                                    required
                                />
                            </li>
                            <li>
                            <label htmlFor="">CDI(ao ano)</label>
                            <input 
                                type="text" 
                                value={`${cdi}%`}
                                disabled
                            />        
                            </li>
                        </ul>
                        <button className='buttomLimpar' onClick={handleClear}>Limpar Campos</button>
                        <button type='submit' className='buttomSimular'>Simular</button>
                    </form>
                
                <Simulacao style={{display: formStyle}}>
                    <h2>Simulador</h2>
                    {simulacoes.map((simulacao: any) =>{
                        if(simulacao.tipoIndexacao == tipoIdexacao && simulacao.tipoRendimento == tipoRedeminto)
                        return(
                            <ul>
                                <li>
                                    Valor Final Bruto
                                    <p>{`R$ ${simulacao.valorFinalBruto}`}</p>
                                </li>
                                <li>
                                    Alíquota do IR
                                    <p>{`R$ ${simulacao.aliquotaIR}`}</p>
                                </li>
                                <li>
                                    Valor Pago em IR
                                    <p>{`R$ ${simulacao.valorPagoIR}`}</p>
                                </li>
                                <li>
                                    Valor Final Líquido
                                    <p className='Pgreen'>{`R$ ${simulacao.valorFinalLiquido}`}</p>
                                </li>
                                <li>
                                    Valor Total Investido 
                                    <p>{`R$ ${simulacao.valorTotalInvestido}`}</p>
                                </li>
                                <li>
                                    Ganho Líquido
                                    <p className='Pgreen'>{`R$ ${simulacao.ganhoLiquido}`}</p>
                                </li>
                        </ul>
                        )
                    })}
                </Simulacao>
                </div>
            </Content>
            
        </Container>
    )
}