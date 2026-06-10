const listaPerguntas = [
  {
    pergunta: "Qual componente é considerado o cérebro do computador responsável pelo processamento de dados?",
    alternativaA: "RAM",
    alternativaB: "SSD",
    alternativaC: "CPU",
    alternativaD: "Fonte",
    alternativaE: "GPU",
    correta: "C"
  },
  {
    pergunta: "Qual unidade do processador realiza operações matemáticas e lógicas?",
    alternativaA: "BIOS",
    alternativaB: "ULA",
    alternativaC: "Cache",
    alternativaD: "ROM",
    alternativaE: "Clock",
    correta: "B"
  },
  {
    pergunta: "Como são chamados os pequenos espaços de armazenamento rápido dentro do processador?",
    alternativaA: "Barramentos",
    alternativaB: "Setores",
    alternativaC: "Registradores",
    alternativaD: "Threads",
    alternativaE: "Chips",
    correta: "C"
  },
  {
    pergunta: "Qual tipo de memória é volátil e perde os dados quando o computador é desligado?",
    alternativaA: "ROM",
    alternativaB: "Flash",
    alternativaC: "Cache",
    alternativaD: "RAM",
    alternativaE: "HD",
    correta: "D"
  },
  {
    pergunta: "Qual memória possui dados gravados permanentemente pelo fabricante?",
    alternativaA: "RAM",
    alternativaB: "ROM",
    alternativaC: "Cache",
    alternativaD: "Flash",
    alternativaE: "DDR",
    correta: "B"
  },
  {
    pergunta: "Qual tipo de memória ROM pode ser apagada por luz ultravioleta e reprogramada?",
    alternativaA: "RAM",
    alternativaB: "DDR",
    alternativaC: "Cache",
    alternativaD: "EPROM",
    alternativaE: "Flash",
    correta: "D"
  },
  {
    pergunta: "Qual tecnologia de memória é usada em pendrives e SSDs?",
    alternativaA: "ROM",
    alternativaB: "Cache",
    alternativaC: "Flash",
    alternativaD: "RAM",
    alternativaE: "BIOS",
    correta: "C"
  },
  {
    pergunta: "Como é chamada a memória usada para armazenar grande quantidade de dados permanentemente?",
    alternativaA: "Cache",
    alternativaB: "RAM",
    alternativaC: "Registrador",
    alternativaD: "Memória de massa",
    alternativaE: "Clock",
    correta: "D"
  },
  {
    pergunta: "Qual recurso permite transferência direta de dados entre memória e periféricos sem usar constantemente a CPU?",
    alternativaA: "ULA",
    alternativaB: "DMA",
    alternativaC: "BIOS",
    alternativaD: "ROM",
    alternativaE: "Cache",
    correta: "B"
  },
  {
    pergunta: "Qual sinal é usado para selecionar e ativar um chip específico em um circuito?",
    alternativaA: "Reset",
    alternativaB: "Clock",
    alternativaC: "CS - Chip Select",
    alternativaD: "Boot",
    alternativaE: "DMA",
    correta: "C"
  },
  {
    pergunta: "Qual barramento é responsável por transportar endereços de memória?",
    alternativaA: "USB",
    alternativaB: "PCI",
    alternativaC: "Data Bus",
    alternativaD: "Address Bus",
    alternativaE: "SATA",
    correta: "D"
  },
  {
    pergunta: "Qual barramento transporta os dados entre os componentes do computador?",
    alternativaA: "Address Bus",
    alternativaB: "USB",
    alternativaC: "SATA",
    alternativaD: "Clock",
    alternativaE: "Data Bus",
    correta: "E"
  },
  {
    pergunta: "Qual linha de processadores da Intel é conhecida pelo bom equilíbrio entre desempenho e custo?",
    alternativaA: "Pentium",
    alternativaB: "Celeron",
    alternativaC: "i3",
    alternativaD: "i5",
    alternativaE: "Xeon",
    correta: "D"
  },
  {
    pergunta: "Qual linha de processadores da Intel é voltada para maior desempenho e multitarefa avançada?",
    alternativaA: "Atom",
    alternativaB: "i7",
    alternativaC: "Celeron",
    alternativaD: "Pentium",
    alternativaE: "i3",
    correta: "B"
  },
  {
    pergunta: "Como é chamado um processador que possui dois núcleos de processamento?",
    alternativaA: "Single Core",
    alternativaB: "Triple Core",
    alternativaC: "Dual Core",
    alternativaD: "Quad Core",
    alternativaE: "Hexa Core",
    correta: "C"
  },
  {
    pergunta: "Como é chamado um processador que possui quatro núcleos de processamento?",
    alternativaA: "Dual Core",
    alternativaB: "Octa Core",
    alternativaC: "Single Core",
    alternativaD: "Quad Core",
    alternativaE: "Hexa Core",
    correta: "D"
  }
]
 
/*VARIAVEIS*/
const player = document.getElementById("player")
const inimigo = document.getElementById("inimigo")
let tamanho = 200
let volta = 120
const velocidade = 120
const meuTexto = "começar"
const elementoAlvo = document.getElementById("h1")
const enunciado = document.getElementById("enunciado")
const botao = document.getElementById("botao")
 
const Resposta1 = document.getElementById("Resposta1")
const Resposta2 = document.getElementById("Resposta2")
const Resposta3 = document.getElementById("Resposta3")
const Resposta4 = document.getElementById("Resposta4")
const Resposta5 = document.getElementById("Resposta5")
 
let respostaAtual = 0
let acertos = 0
 
/*STYLE*/
Resposta1.style.display = "none"
Resposta2.style.display = "none"
Resposta3.style.display = "none"
Resposta4.style.display = "none"
Resposta5.style.display = "none"
 


/*FUNÇÕES*/

function start(){
 
    elementoAlvo.style.display = "none"
    botao.style.display = "none"
    enunciado.style.display = "block"
 
    Resposta1.style.display = "flex"
    Resposta2.style.display = "flex"
    Resposta3.style.display = "flex"
    Resposta4.style.display = "flex"
    Resposta5.style.display = "flex"
 
    mostrarPergunta()
 
}
 
function mostrarPergunta(){
 
    enunciado.innerHTML = listaPerguntas[respostaAtual].pergunta
 
    Resposta1.value = listaPerguntas[respostaAtual].alternativaA
    Resposta2.value = listaPerguntas[respostaAtual].alternativaB
    Resposta3.value = listaPerguntas[respostaAtual].alternativaC
    Resposta4.value = listaPerguntas[respostaAtual].alternativaD
    Resposta5.value = listaPerguntas[respostaAtual].alternativaE
 
}
 
function Resposta(letra){

    if(letra == listaPerguntas[respostaAtual].correta){
        acertos++
        attack()
        mostrarCritico_player()
    }else {
      attack()
      mostrarErro()
      
    }
    
    respostaAtual++
    
    if(respostaAtual < listaPerguntas.length){
        mostrarPergunta()
    } else {
        mostrarResultado()
    }

}



function mostrarErro(){
 const mensagem = document.getElementById("mensagem_inimigo")

    mensagem.innerHTML = "Erro!"
    mensagem.style.color = "gray"
    mensagem.style.transform = "scaleX(-1)"
    mensagem.style.display = "block"

    setTimeout(() => {
        contraAttack()
        mostrarCritico_inimigo()
        mensagem.style.display = "none"
        mensagem.style.color = "yellow"
        mensagem.innerHTML = ""
    }, 1000)


}
function mostrarCritico_player(){
  
    const mensagem = document.getElementById("mensagem_inimigo")

    mensagem.innerHTML = "CRÍTICO!"
    mensagem.style.transform = "scaleX(-1)"
    mensagem.style.display = "block"

    setTimeout(() => {
        mensagem.style.display = "none"
        mensagem.innerHTML = ""
    }, 1000)

}

function mostrarCritico_inimigo(){
  
    const mensagem = document.getElementById("mensagem_player")

    mensagem.innerHTML = "CRÍTICO!"
    mensagem.style.display = "block"

    setTimeout(() => {
        mensagem.style.display = "none"
        mensagem.innerHTML = ""
    }, 1000)

}
 
function mostrarResultado(){
 
    Resposta1.style.display = "none"
    Resposta2.style.display = "none"
    Resposta3.style.display = "none"
    Resposta4.style.display = "none"
    Resposta5.style.display = "none"
 
    if(acertos == listaPerguntas.length){
        enunciado.innerHTML = "Perfeito! Você derrotou o inimigo sem nenhuma dificuldade";
        
    }
 
    else if(acertos >= 10){
        enunciado.innerHTML = "Muito bom! Você derrotou o inimigo acertando " + acertos + " de " + listaPerguntas.length;
        
    }
 
    else if(acertos >= 6){
        enunciado.innerHTML = "Razoável! Você quase não consegue derrotar o inimigo" + acertos + " de " + listaPerguntas.length;
        
    }
 
    else{
        enunciado.innerHTML = "Você foi simplesmente derrotado " + acertos + " de " + listaPerguntas.length
    }
 
}
 
/*EFEITO DIGITACAO*/
function efeitoDigitacao(elemento, texto, intervalo) {
    let j = 0
    const timer = setInterval(() => {
        elemento.innerHTML += texto.charAt(j)
        j++
        if(j >= texto.length){
            clearInterval(timer)
        }
    }, intervalo)
}
 
efeitoDigitacao(elementoAlvo, meuTexto, velocidade)
 
/*ATAQUE*/
function attack(){
 
    player.style.width = `${tamanho}px`
    player.style.height = `${tamanho}px`
    player.style.transform = "translate(910px, 400px)"
    
 
    setTimeout(() => {
        player.style.transform = "translate(-1px, -1px)"
        player.style.width = "130px"
        player.style.height = "120px"
        player.style.backgroundImage = `url('./Punk_idle.png')`
    }, 600)
 
}


function contraAttack(){
    inimigo.style.width = `-${volta}px`
    inimigo.style.height = `-${volta}px`
    inimigo.style.transform = "translate(-910px, -450px) scaleX(-1)"    

 
    setTimeout(() => {
        inimigo.style.transform = "translate(-1px, -1px)"
        inimigo.style.width = "150px"
        inimigo.style.height = "150px"
        inimigo.style.backgroundSize = `cover`
        inimigo.style.backgroundRepeat = `no-repeat`
        inimigo.style.backgroundImage = `url('./Idle.png')`
        inimigo.style.transform = `scaleX(-1)`
    }, 600)
    
}
