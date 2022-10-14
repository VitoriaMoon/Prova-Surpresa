import { useState } from "react"
import { Link } from "react-router-dom"
import Febre from "./service/temperatura"

export default function VerificarFebre(){
    const [temp, setTemp] = useState()
    const [resposta, setResposta] = useState()
    function FebreClick(){
       let resp = Febre(temp)
       setResposta(resp);

    }
    return(
        <div>
            <h1>Descubra se você está com febre</h1>
            <p>informe a sua temperatura</p>
            <input type='number' value={temp} onChange={e => setTemp(e.target.value)}/>
            <button onClick={FebreClick}>descubra</button>
            <p>{resposta}</p>
            
            <Link to='/cinema'>
            <button>Compre ingressos com a gente</button>
            </Link>
        </div>
    )
}