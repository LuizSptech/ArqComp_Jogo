let cartas = [
{"valor": "20", "formato": "triangulo"},
{"valor": "22", "formato": "circulo"},
{"valor": "24", "formato": "retangulo"},
{"valor": "26", "formato": "esfera"},
{"valor": "28", "formato": "pentagono"},
{"valor": "30", "formato": "losangulo"}]
let aleatorio
let embaralhadas = []
let total = [0,1,2,3,4,5,6]
let jaFoi = []

for(let i = 0; i < cartas.length; i++){
    aleatorio = Math.floor(Math.random() * (total[i] - 0) + 0)
    embaralhadas.push(cartas[aleatorio])
    total.shift(aleatorio)
    console.log(total.length)
    
    
}


cartas = embaralhadas
console.log(cartas)