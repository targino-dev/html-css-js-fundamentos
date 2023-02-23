/*
let filmes = ["Matrix", "Batman"]; // Para criar array é utilizado os colchetes

console.log(filmes[0]); // O conteudo é mostrado a partir do nome da variavel + [], iniciando do 0 (zero)

let descricaoFilmes = ["Ninja", 5, true];

console.log(descricaoFilmes);
 // Arrays

let filmes = [
    ["Batman", 5, true];
    ["Matrix", 5, true];
]

console.log(filmes); // Retorna o array com os 2 arrays embutidos
console.log(filmes[0][0]); // Retorna o nome do Batman
console.log(filmes[1][0]); // Retorna o nome Matrix


let frutas = ["maca", "pera", "morango", "laranja"];
let frutasTamanho = frutas.length // para saber a quantidade


for (let i = 0; i < frutasTamanho; i++) {
    console.log("Fruta: " + frutas[i])
}  // Com laço for

let frutas = ["maca", "pera", "morango", "laranja"];

frutas.forEach(function(item) {  // .forEach = Busca cada elemento do Array
    console.log("Fruta: " + item); 
});  */

let frutas = ["maca", "pera", "morango", "laranja"];

frutas.push("manga"); // .push Adiciona elementos no final do array
frutas.pop(); // .pop Retira o ultimo elemento do array
frutas.shift(); // .shift Remove o primeiro elemento do array
frutas.unshift("pessego"); // .unshift Adiciona elementos no inicio do array

let posicaoMorange = frutas.indexOf("morango");
console.log(posicaoMorango);
