import { useState } from "react";
import Cafe from './service/cafe.js' 

export default function Cafezin() {
    const [litros, setLitros] = useState();
    const [alunos, setAlunos] = useState();
    const [mililitros,setMililitros]= useState()
    const [resposta, setResposta] = useState();
    
    function calcularQtdCafe(){
            setResposta(Cafe(litros,alunos,mililitros));
    }

    return(
        <main>
            <p>Alunos</p>
            <input type='number' value={alunos} onChange={e => setAlunos(Number(e.target.value))}/>

            <p>Capacidade</p>
            <input type='number' value={litros} onChange={e => setLitros(Number(e.target.value))}/>
            
            <p>Mililitros</p>
            <input type='number' value={mililitros} onChange={e => setMililitros(Number(e.target.value))}/>

            <button onClick={calcularQtdCafe}>Calcular</button>
            <div>
           <p>{resposta}</p>
            </div>
        </main>
    )
}