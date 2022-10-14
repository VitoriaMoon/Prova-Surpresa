import { useState } from "react"
import Orcamento from "./service/orcamento";
import { Link } from "react-router-dom";

export default function OrcamentoFamilia(){
    const [gastos,setGastos] = useState();
    const [ganhos,setGanhos] = useState();
    const [resposta, setResposta] = useState();

    function OrcamentoClick(){
        let resp = Orcamento(gastos, ganhos);
        setResposta(resp);
    }
    
    return(
        <div>
            <p>Informe os ganhos</p>
            <input type='number' value={ganhos} onChange={e => setGanhos(e.target.value)}/>
            <button onClick={OrcamentoClick}>Calcular</button>
            <p>Informe os gastos</p>
            <input type='number' value={gastos} onChange={e => setGastos(e.target.value)}/>
            <p>{resposta}</p>

            <Link to='/'>
            <button>volte ao inicio</button>
            </Link>
        </div>
    )
}