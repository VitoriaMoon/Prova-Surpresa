export default function QTDParadas(capacidade,consumo,distancia){
    try {
        
        let litros = distancia / consumo;
        let qtdParadas = litros / capacidade;

        qtdParadas = Math.ceil(qtdParadas)

        return 'Você precisará fazer ' +  qtdParadas + ' parada para abastecer';
    } catch (err) {
        return(err.message)
    }
}