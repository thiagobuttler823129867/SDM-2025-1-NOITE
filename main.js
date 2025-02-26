
console.log("OI gente")

let x = 7
const y = 3
console.log(x)
console.log(y)

console.log("oi " + x)

// Conversão de tipos de dados
let texto = "123"
let num = parseInt(texto)
console.log(num+x)

let a = 7
let texto1 = "23"
let num1 = parseInt(texto1)
console.log("num: ", num1);

let b = 8
if(x < 7) {
    console.log("menor que 7")
} else {
    console.log("maior ou igual a 7")
}

let c = 5
while(c < 10) {
    console.log("oi");
    c++
}

for(let x=5; x<10; x++) {
    console.log("tchau")
}

// STRINGS
let nome = "Maria"
let idade = 25
let texto2 = 'oi '+nome+' voce tem '+idade+' anos'

console.log(texto2)

let texto3 = 'oi ${nome} você tem ${idade}' 

// String no java script são objetos
console.log(texto2.length)

// VETORES (ARRAYS)
let vet = []
console.log(vet)

let vet1 = [20, 26]
console.log(vet1)

console.log(vet1[0])

let fechado = true

let vet2 = [23, "oi", 54, false]
vet2.push(67)
console.log(vet2);