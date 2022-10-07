import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';


export default function Acai() {

  const [qtdp, setQtdp] = useState(0);
  const [qtdm, setQtdm] = useState(0);
  const [qtdg, setQtdg] = useState(0);
  const [desc, setDesc] = useState(0);
  const [preco, setPreco] = useState(0);

  function Calc(){
    let total = qtdp * 13.50 + qtdm * 15.00 + qtdg * 17.50;
    let totaldesc = total * desc /100;
    let final =  total - totaldesc ;
    setPreco(final);
  }

  useEffect(() =>{
    Calc ()
  }, [qtdp, qtdm, qtdg, desc])

  return (
    <div className="App">
        <h1> AÇAÍ</h1>
        <p>AÇAÍ PEQUENO</p>
        <input type='number' value={qtdp} onChange={e => setQtdp(e.target.value)}/>
        <p>AÇAÍ MEDIO</p>
        <input type='number' value={qtdm} onChange={e => setQtdm(e.target.value)}/>
        <p>AÇAÍ GRANDE</p>
        <input type='number' value={qtdg} onChange={e => setQtdg(e.target.value)}/>
        <p>DESCONTO %</p>
        <input type='number' value={desc} onChange={e => setDesc(e.target.value)} />
        <h2>Total a pagar é:  R${preco}</h2>

        <Link to='/libra'>
        <button>descubra se seu signo é libra !!</button>
        </Link>
    </div>
  );
}

