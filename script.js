const player = document.querySelector(".player")

function attack() {

    player.style.transform = "translate(1198px, 400px)";
    console.log('isso')


    setTimeout(() => {
        player.style.transform = "translate(-1px, -1px)";
        console.log('entrou')
    },600)
    }
   
