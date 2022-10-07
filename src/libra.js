import { useEffect, useState } from "react"
import { Link } from "react-router-dom";



export default function Signo(){
const [dia, setDia] = useState(0);
const [mes, setMes] = useState('');
const [resul, setResul] = useState('');

function libra(){
    if (mes == "Setembro" && dia >= 23 || mes == 'Outubro' && dia <= 22) {
        setResul('seu signo é libra parabens')
    } else {
        setResul('seu signo não é libra parabens')
    }
}

useEffect(() => {
    libra()
}, [dia, mes])

return(
    <div>
        <h1>DESCUBRA SE SEU SIGNO É LIBRA</h1>
        <p>dia de nascimento:</p>
        <input type='number' value={dia} onChange={e => setDia(Number(e.target.value))}/>
        <p>mês de nascimento:</p>
        <input type='text' value={mes} onChange={e => setMes(e.target.value)}/>
        <div> {resul}</div>
        <Link to='/sorveteria'>
        <button>COMPRE SORVETE CONOSCO!!</button>
        </Link>
        
    </div>
)
}