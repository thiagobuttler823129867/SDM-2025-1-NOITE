import{ areaCirculo } from "./circulos.js"
import readLineSync from "readline-sync"

console.log("boa noite")

let raio = readLineSync.question("Digite o valor do raio? ");
raio = parseInt(raio)

let area = areaCirculo(raio)

console.log("A área do círculo de raio 5 é " +  area)