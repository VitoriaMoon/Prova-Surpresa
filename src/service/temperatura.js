export default function Febre(temperatura){
    try {
        if (temperatura >= 41) {
            return "ce ta queimando de hipertermia";
        }
        else if(temperatura < 0){
            return 'morto'
        }
        else if(temperatura >= 39.6 && temperatura < 41){
            return "febre alta"
        }
        
        else if(temperatura >= 37.5 && temperatura < 39.6){
            return "febre só"
        }
        
        else if(temperatura >= 36 && temperatura < 37.5){
            return "normal"
        }
        
        else{
            return "hipotermia"
        }

    } catch (err) {
        return(err.message)
    }
}