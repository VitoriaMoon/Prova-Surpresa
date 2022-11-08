let prompt = require("prompt-sync")(); 


 function Sorteio() { 
   let tentativas = 0; 
   let sorteado = parseInt(Math.random() * 1000) 


   for(tentativas; tentativas < 10; tentativas){ 

       let a = prompt('coloca um numero: ') 
       let b = Number(a); 

       if(b < sorteado){ 
           console.log('maior ein') 
           tentativas++ 
       } 
       else if(b > sorteado){ 
           console.log('foi demais pô') 
           tentativas++ 
       } 
       else if(tentativas==0 && b!=sorteado){ 
         return  console.log('Perdeu, sinto muito!!'); 
      
       } 
       else{ 
         console.log('Acertou, parabens amigo vc é incrivel! :)'); 
         tentativas = 10; 
     } 
   } 

   return sorteado 
 }

 let l = Sorteio();
 console.log(l)