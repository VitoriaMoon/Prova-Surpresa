import { useState } from "react"
import Cinema from "./service/cinema";
import { Link } from "react-router-dom";
import './index.css';

export default function CinemaIngresso(){

    const [dia, setDia] = useState('');
    const [qtdMeia, setQtdMeia] = useState();
    const [qtdInteira, setQtdInteira] = useState(); 
    const [nacional, setNacional] = useState(true);
    const [resp, setResp] = useState();

    function Ingresso(){
        let resposta = Cinema(dia, qtdMeia, qtdInteira,nacional);
        setResp(resposta);
    }

    return(
        <div>
            <h1>Ingresso</h1>
            <p>Informe o dia</p>
            <input type='text' value={dia} onChange={e => setDia(e.target.value)}/>
            <p>Informe a quantidade de meias</p>
            <input type='number' value={qtdMeia} onChange={e => setQtdMeia(e.target.value)}/>
            <p>Informe a quantidade de inteiras</p>
            <input type='number' value={qtdInteira} onChange={e => setQtdInteira(e.target.value)}/>
            <p>Informe se o filme é nacional</p>
            <input type='checkbox' checked={nacional} onChange={e => setNacional(e.target.checked)}/>
            <button onClick={Ingresso}>Calcular</button>
            <p>{resp}</p>

            <Link to='/orcamento'>
            <button>Calcule o orçamento da sua familia</button>
            </Link>
        </div>
    )
}