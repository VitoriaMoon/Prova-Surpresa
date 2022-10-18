import { useState } from "react"
import DesenhoLinha from "./service/desenhoLinha.js";

export default function Desenho(){

    function DesenhoLinhas(){
        setResposta(DesenhoLinha(qtd))
    }

    const [qtd, setQtd] = useState();
    const [resposta, setResposta] = useState([]);
    return(
        <main>
            <p>QUANTIDADE</p>
            <input value={qtd} onChange={e => setQtd(e.target.value)}/>
            <button onClick={DesenhoLinhas}>CALUCAR</button>
            {resposta}
        </main>
    )
}