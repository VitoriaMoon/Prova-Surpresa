import { useState } from "react";
import Cafe from './service/cafe.js' 

export default function Cafezin() {
    const [litros, setLitros] = useState(1);
    const [alunos, setAlunos] = useState(1);
    const [ml,setMl]= useState(1)
    const [ resposta, setResposta] = useState();
    
    function calcularQtdCafe(){

        setResposta(Cafe (litros,alunos,ml) );

    }


    return(
        <main>
            <p>Capacidade</p>
            <input type='number' value={litros} onChange={e => setLitros(e.target.value)}/>

            <p>Alunos</p>
            <input type='number' value={alunos} onChange={e => setAlunos(e.target.value)}/>

            <p>Mililitros</p>
            <input type='number' value={ml} onChange={e => setMl(e.target.value)}/>

            <button onClick={calcularQtdCafe}>Calcular</button>
            <div>
           <p>{resposta}</p>
            </div>
        </main>
    )
}