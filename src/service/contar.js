export default function Contar(inicio,fim){
    let a = [];

    for(let i = inicio; i<=fim; i++){
        a =[...a, i]
        a.push(" ")
    }
    return a;
};