import { useState } from "react"
import Contar from './service/contar.js'

export default function Contador(){
    const [inicio, setInicio] = useState();
    const [fim,setFim] = useState();
    const [resposta, setResposta] = useState();

    function Contador(){
        setResposta(Contar(inicio,fim))
    }

    return(
        <main>
            <p>Inicio</p>
            <input type='number' value={inicio} onChange={e => setInicio(e.target.value)}/>
            <p>Fim</p>
            <input type='number' value={fim} onChange={e => setFim(e.target.value)}/>
            <button onClick={Contador}>Calcular</button>
            <p>{resposta}</p>
        </main>
    )
}