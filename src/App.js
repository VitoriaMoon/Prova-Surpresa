import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import ValidarAcai from './service/service';


export default function Acai() {

  const [qtdp, setQtdp] = useState('');
  const [qtdm, setQtdm] = useState('');
  const [qtdg, setQtdg] = useState('');
  const [desc, setDesc] = useState('');
  const [preco, setPreco] = useState('');

  function Calc(){
    try {
      if(qtdp < 0){
        setPreco('Qtd Invalida')
      }
      else if(qtdm < 0 ){
        setPreco('Qtd Invalida')
      }
      else if ( qtdg < 0){
        setPreco('Qtd Invalida')
      }
      else{
        let total = qtdp * 13.50 + qtdm * 15.00 + qtdg * 17.50;
        let totaldesc = total * desc /100;
        let final =  total - totaldesc ;
        setPreco('O total a pagar é R$' + final);
        }

              
    } catch (error) {
    }
    
  }

  useEffect(() =>{
    Calc ()
  }, [qtdp, qtdm, qtdg, desc])

  return (
    <div className="App">
        <h1> AÇAÍ</h1>
        <p>AÇAÍ PEQUENO</p>
        <input type='number' value={qtdp} onChange={e => setQtdp(Number(e.target.value))}/>
        <p>AÇAÍ MEDIO</p>
        <input type='number' value={qtdm} onChange={e => setQtdm(e.target.value)}/>
        <p>AÇAÍ GRANDE</p>
        <input type='number' value={qtdg} onChange={e => setQtdg(e.target.value)}/>
        <p>DESCONTO %</p>
        <input type='number' value={desc} onChange={e => setDesc(e.target.value)} />
       
          <p>{preco}</p>
            
          

        <Link to='/libra'>
        <button>descubra se seu signo é libra !!</button>
        </Link>
    </div>
  );
}

