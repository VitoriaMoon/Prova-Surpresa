import { useState } from "react"
import QTDParadas from "./service/paradas"
import { Link } from "react-router-dom";

export default function Paradas(){

    const [capac, setCapac] = useState();
    const [consumo, setConsumo] = useState();
    const [dist, setDist] = useState();
    const [resp, setResp] = useState()

    function qtdP(){
        let total = QTDParadas(capac,consumo,dist)
        setResp(total)
    }


    return(
        <div>
            <h1>Calcule quantas vezes você precisa abastecer</h1>
            <p>informe a capacidade</p>
            <input type='number' value={capac} onChange={e => setCapac(e.target.value)}/>
            <p>informe o consumo</p>

            <input type='number' value={consumo} onChange={e => setConsumo(e.target.value)}/>
            <p>informe a distancia</p>
            <input type='number' value={dist} onChange={e => setDist(e.target.value)}/>
            <button onClick={qtdP}>Calcular</button>
            <p>{resp}</p>
            <Link to='/febre'>
                <button>descubra se você tem febree</button>
            </Link>
        </div>
    )
}