alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 25;
console.log(numeroSecreto);
let chute;
let tentativas = 1;


// enquanto (loop) alguma coisa não acontecer o programa não para
while (chute != numeroSecreto) {
   chute = prompt('Escolha um número entre 1 à 30');

   // Verificar se o chute é igual ao numeroSecreto
   if (numeroSecreto == chute) {
      break

   } else {
      if (chute < numeroSecreto) {
         alert(`O número secreto é maior que ${chute}`);
      } else {
         alert(`O número secreto é menor que ${chute} `);
      }
      //tentativas = tentativas + 1;
      tentativas++;

   }
}
if (tentativas > 1){
   alert(`Isso ai! Você descobriu o número secreto que era:  ${numeroSecreto} com ${tentativas} tentativas`)
} else {

   alert(`Isso ai! Você descobriu o número secreto que era:  ${numeroSecreto} com ${tentativas} tentativa`)
}
