import { useEffect, useState } from "react"

export default function Sorveteria(){
    
    const [gramas, setGramas] = useState('');
    const[resul, setResul] = useState('')
    
    function Total (){
        let tot = 0;

        if (gramas >= 1000 ) {
            tot = (gramas/100) * 3.00
            setResul(tot)
   
        }
        else if (gramas > 0){
            tot = (gramas / 100) * 3.50;
            setResul(tot)
        }
        else{
            setResul('peso invalido')
        }
        
    }

    useEffect(() => {
        Total()
    }, [gramas])

    return(
        <div>
            <h1>COMPRE AQUI O SEU SORVETE</h1>
            <p>informe o total de gramas que você deseja</p>
            <input type='number' value={gramas} onChange={e => setGramas(e.target.value)}/>

            {gramas <= 0 && 
            <p>peso invalido</p>
            }
            {gramas !=0 && 
            <p> O total a pagar é R${resul} </p>}
            </div>
        

    )
}


