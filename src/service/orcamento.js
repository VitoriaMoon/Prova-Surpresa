export default function Orcamento(ganhos, gastos){
    let porcentagem = (ganhos / gastos) * 100;

    if(porcentagem < 30){
        return 'Parabens'
    }
    else if(porcentagem < 50){
        return 'muito bem'
    }
    else if(porcentagem < 80 ){
        return 'atenção'
    }
    else if(porcentagem <= 100){
        return 'cuidado'
    }
    else{
        return 'se fudeu'
    }
}