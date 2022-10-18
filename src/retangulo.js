import { useState } from "react";
import desenharRetangulo from "./service/retangulo.js";

export default function Retangulo () {
    const [coluna, setColuna] = useState (1);
    const [linhas, setLinhas] = useState(1);
    const [opcao,setOpcao]= useState('asterisco')
    const [ resposta, setResposta] = useState([]);
    
    function calcularRetangulo(){

        setResposta(desenharRetangulo (linhas,coluna, opcao==='asterisco' ? '*' : '▆') );

    }


    return(
        <main>
            <p>Base</p>
            <input type='number' value={linhas} onChange={e => setLinhas(e.target.value)}/>

            <p>Altura</p>
            <input type='number' value={coluna} onChange={e => setColuna(e.target.value)}/>

            <select onChange={e => setOpcao(e.target.value)}>
                <option value='imagem'>imagem</option>
                <option value='quadrado'>Quadrado</option>
                <option value='asterisco'>Asteristico</option>
            </select>

            <button onClick={calcularRetangulo}>Calcular</button>
            <div>
            {resposta.map (item =>{
            if(opcao === 'imagem') return <div><img src="../images/lula-sorrindo-com-bone-preto-escrito-cpx-em-vermelho_1_51105.jpg" width={100}/></div>
            else return <p> {item}</p>  
            
            })}
            </div>
        </main>
    )
}