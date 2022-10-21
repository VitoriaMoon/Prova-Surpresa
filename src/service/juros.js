 export default function juroscomposto(capital, taxa ,tempo){
    let Mes = tempo * 12;
    let msg = '';

    let Montante = capital * (taxa /100 + 1)  **(tempo);

    let Juros = Montante - capital;

    let Parcela =  Montante / Mes;

    msg =" O seu Montante é de: " + Montante + " Seu juros é de: "+ Juros + ' Valor da parcela: ' + Parcela ;

    return msg ;
}

