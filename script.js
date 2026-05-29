const player = document.querySelector(".player");
let tamanho = 100;
let distancia = 1198;
const velocidade = 120;
const meuTexto = "EITCHA";
const elementoAlvo = document.getElementById("h1");

function efeitoDigitacao(elemento, texto, intervalo) {
  let j = 0;
  const timer = setInterval(() => {
    elemento.innerHTML += texto.charAt(j); 
    j++;
    if (j >= texto.length) {              
      clearInterval(timer);
    }
  }, intervalo);
}

function attack() {
  efeitoDigitacao(elementoAlvo, meuTexto, velocidade);

  player.style.width = `${tamanho}px`;
  player.style.height = `${tamanho}px`;
  player.style.transform = "translate(850px, 400px)";
  console.log('isso');

  setTimeout(() => {
    player.style.transform = "translate(-1px, -1px)";
    player.style.width = "50px";
    player.style.height = "50px";
    console.log('entrou');
  }, 600);
}
   
