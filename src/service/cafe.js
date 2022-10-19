export default function Cafe(litros,alunos,mililitros){
    try {
        let cafeteira = (alunos * mililitros) /1000;
        let capacidade = litros;

        if(capacidade <= 0 || alunos <=0 || mililitros<=0 ){
            return 'número inválido'
        }

        else if(mililitros >= 100000){
            return 'mililitros invalido'
        }
       
        else{
            while(cafeteira > capacidade){
                capacidade+=litros;
            }
            return 'Você precisará de: ' + capacidade + ' litros de café';
        }

       

        
    } 
    catch (err) {
        return (err.message)   
    }
    
}

