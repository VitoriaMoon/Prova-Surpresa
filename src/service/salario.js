export default function salarioLiquido(salario,bonus,desc){
    try {
        if(salario <=0 || bonus < 0 || desc < 0){
            return 'Valor inválido'
        }

        let sal = salario * bonus /100 ;
        let total = salario - desc + sal;
        return total

    } catch (err) {
     return (err.message)   
    }
}