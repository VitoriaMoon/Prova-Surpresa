export default function DesenhoLinha(quantidade){
    let l = [];
    for (let i = 1; i <= quantidade; i++){
        l.push(" * ")
    }
    return l;
}