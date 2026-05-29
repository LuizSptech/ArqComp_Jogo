const player = document.querySelector(".player")

let tamanho = 100 
let distancia = 1198
function attack() {



    for(let i = 0; i < distancia; i++){
        player.style.width = `${tamanho}px`;
        player.style.height = `${tamanho}px`
    }

    player.style.transform = "translate(850px, 400px)";
    console.log('isso')


    setTimeout(() => {
        player.style.transform = "translate(-1px, -1px)";
        player.style.width = "50px";
        player.style.height = "50px";
        
        console.log('entrou')
    },600)


    }
   
