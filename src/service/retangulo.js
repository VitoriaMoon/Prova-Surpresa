export default function desenharRetangulo(l,c,simbolo){
    let matriz = []
    let retangulo = [];

    for(let i = 0; i<l; i++){
        retangulo[i] = simbolo
    for(let j=0; j<c; j++){
        matriz [j] = new Array(retangulo)
    }
        retangulo.push('')

    }
    return matriz;
}