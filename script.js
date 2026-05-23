const player = document.querySelector(".player")

function attack() {

    player.style.left = "370px"

    setTimeout(() => {
        player.style.left = "100px"
    }, 600)

}