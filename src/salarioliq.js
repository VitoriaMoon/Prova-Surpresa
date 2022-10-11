import { useState } from "react"
import salarioLiquido from "./service/salario";
import {Link} from 'react-router-dom'

export default function Salario(){
    const [salario, setSalario] = useState();
    const [bonus, setBonus] = useState();
    const [desc, setDesc] = useState();
    const [resposta, setResposta] = useState();

    function CalcularClick(){
        let total = salarioLiquido(salario,bonus,desc)
        setResposta(total);
    }

    return(
        <div>
            <h1>Calcule o seu salário liquido</h1>
            <p>informe o seu salário</p>
            <input type='number' value={salario} onChange={e => setSalario(e.target.value)}/>
            <p>informe o seu bonûs</p>

            <input type='number' value={bonus} onChange={e => setBonus(e.target.value)}/>
            <p>informe o desconto do seu salário</p>
            <input type='number' value={desc} onChange={e => setDesc(e.target.value)}/>
            <button onClick={CalcularClick}>Calcular</button>

            <p>{resposta}</p>
            <Link to='/paradas'>
            <button>descubra quantas paradas você precisa pra abastecer</button>
            </Link>
            </div>
    )
}