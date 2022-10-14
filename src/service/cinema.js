export default function Cinema(dia, qtdMeia, qtdInteira,nacional){
    let total = 0;
    let m = qtdMeia * 14.25 ;
    let i = qtdInteira * 28.5;
    let nacionalTotal = (qtdInteira * 5) + (qtdMeia * 5 );
    let quarta = (qtdInteira * 14.25) + (qtdMeia * 14.25)

    if(nacional){
       total = nacionalTotal;
    }
    else if(dia ==='Quarta-feira'){
        total = quarta;
    }

    else{
        total = m + i;
    }
   
    
    return total;
}