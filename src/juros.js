import {juroscomposto} from './service/juros.js'
import { useState } from 'react'

export default function Juros(){
    const [capital, setCapital] = useState();
    const [taxa, setTaxa] = useState();
    const [tempo, setTempo] = useState();
    const [resp, setResp] = useState();

    function CalcJusros(){
        setResp(juroscomposto(capital, taxa, tempo));
    }
    return(
        <div>
             <p>Informe o Capital</p>
            <input type='number' value={capital} onChange={e => setCapital(Number(e.target.value))}/>
            <p>informe a taxa</p>
            <input type='number' value={taxa} onChange={e => setTaxa(Number(e.target.value))}/>
            <p>informe o tempo</p>
            <input type='number' value={tempo} onChange={e => setTempo(Number(e.target.value))}/>
            <button onClick={CalcJusros}>caljusros</button>
            <div>{resp}</div>
        </div>
    )
}