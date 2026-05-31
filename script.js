


const listaPerguntas = [
  { "pergunta": "Qual componente é considerado o “cérebro” do computador responsável pelo processamento de dados?",
    "alternativaA": "RAM",
    "alternativaB": "SSD",
    "alternativaC": "CPU",
    "alternativaD": "Fonte",
    "alternativaE": "GPU",
},
{
  "pergunta": "Qual unidade do processador realiza operações matemáticas e lógicas?",
    "alternativaA": "BIOS",
    "alternativaB": "ULA",
    "alternativaC": "Cache",
    "alternativaD": "ROM",
    "alternativaE": "Clock",
},
{
  "pergunta": "Como são chamados os pequenos espaços de armazenamento rápido dentro do processador?",
    "alternativaA": "Barramentos",
    "alternativaB": "Setores",
    "alternativaC": "Registradores",
    "alternativaD": "Threads",
    "alternativaE": "Chips",
} ,

  {
    "pergunta": "Qual tipo de memória é volátil e perde os dados quando o computador é desligado?",
    "alternativaA": "ROM",
    "alternativaB": "Flash",
    "alternativaC": "Cache",
    "alternativaD": "RAM",
    "alternativaE": "HD",
    "correta": "D"
},
{
    "pergunta": "Qual memória possui dados gravados permanentemente pelo fabricante?",
    "alternativaA": "RAM",
    "alternativaB": "ROM",
    "alternativaC": "Cache",
    "alternativaD": "Flash",
    "alternativaE": "DDR",
    "correta": "B"
},
{
    "pergunta": "Qual tipo de memória ROM pode ser apagada por luz ultravioleta e reprogramada?",
    "alternativaA": "RAM",
    "alternativaB": "DDR",
    "alternativaC": "Cache",
    "alternativaD": "EPROM",
    "alternativaE": "Flash",
    "correta": "D"
},
{
    "pergunta": "Qual tecnologia de memória é usada em pendrives e SSDs?",
    "alternativaA": "ROM",
    "alternativaB": "Cache",
    "alternativaC": "Flash",
    "alternativaD": "RAM",
    "alternativaE": "BIOS",
    "correta": "C"
},
{
    "pergunta": "Como é chamada a memória usada para armazenar grande quantidade de dados permanentemente?",
    "alternativaA": "Cache",
    "alternativaB": "RAM",
    "alternativaC": "Registrador",
    "alternativaD": "Memória de massa",
    "alternativaE": "Clock",
    "correta": "D"
},
{
    "pergunta": "Qual recurso permite transferência direta de dados entre memória e periféricos sem usar constantemente a CPU?",
    "alternativaA": "ULA",
    "alternativaB": "DMA",
    "alternativaC": "BIOS",
    "alternativaD": "ROM",
    "alternativaE": "Cache",
    "correta": "B"
},
{
    "pergunta": "Qual sinal é usado para selecionar e ativar um chip específico em um circuito?",
    "alternativaA": "Reset",
    "alternativaB": "Clock",
    "alternativaC": "CS - Chip Select",
    "alternativaD": "Boot",
    "alternativaE": "DMA",
    "correta": "C"
},
{
  "pergunta": "Qual barramento é responsável por transportar endereços de memória?",
    "alternativaA": "USB",
    "alternativaB": "PCI",
    "alternativaC": "Data Bus",
    "alternativaD": "Address Bus",
    "alternativaE": "SATA",
    "correta": "D"
},
{
    "pergunta": "Qual barramento transporta os dados entre os componentes do computador?",
    "alternativaA": "Address Bus",
    "alternativaB": "USB",
    "alternativaC": "SATA",
    "alternativaD": "Clock",
    "alternativaE": "Data Bus",
    "correta": "E"
},
{
    "pergunta": "Qual linha de processadores da Intel é conhecida pelo bom equilíbrio entre desempenho e custo?",
    "alternativaA": "Pentium",
    "alternativaB": "Celeron",
    "alternativaC": "i3",
    "alternativaD": "i5",
    "alternativaE": "Xeon",
    "correta": "D"
},
{
    "pergunta": "Qual linha de processadores da Intel é voltada para maior desempenho e multitarefa avançada?",
    "alternativaA": "Atom",
    "alternativaB": "i7",
    "alternativaC": "Celeron",
    "alternativaD": "Pentium",
    "alternativaE": "i3",
    "correta": "B"
},
{
    "pergunta": "Como é chamado um processador que possui dois núcleos de processamento?",
    "alternativaA": "Single Core",
    "alternativaB": "Triple Core",
    "alternativaC": "Dual Core",
    "alternativaD": "Quad Core",
    "alternativaE": "Hexa Core",
    "correta": "C"
},
{
    "pergunta": "Como é chamado um processador que possui quatro núcleos de processamento?",
    "alternativaA": "Dual Core",
    "alternativaB": "Octa Core",
    "alternativaC": "Single Core",
    "alternativaD": "Quad Core",
    "alternativaE": "Hexa Core",
    "correta": "D"
  }]
  


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
     




























