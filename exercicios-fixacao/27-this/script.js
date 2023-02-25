"use strict" // O this tem que ser especifico, ele fica restrito ao conteúdo

// console.log(this); // Vai abrir o Window com diversas propriedades
// console.log(window); // Vai abrir a mesma janela com as propriedades, o this esta no window
// console.log(window === this); // Retornará true, pois são do mesmo tipo e valor(propriedades)

// this.name = "Targino"
// function saudar() {
//     console.log("this no contexto da função", this);
//     console.log("Olá, " + this.name)
// }

// saudar()

// let usuario = {
//     nome: "Targino",
//     saudar: function() {
//         console.log("this no contexto do método", this) // this puro remete a funcao saudar dentro do objeto
//         console.log("this.name no contexto do método", this.nome) // this.nome remete ao nome dentro do objeto
//     }
// }

// usuario.saudar();

let comida = {
    nome: "Brócolis",
    temperatura: 0
}

comida.cozinhar = function (temperaturaDeCozimento) {
    this.temperatura = temperaturaDeCozimento; // O this nesse escopo substitui a comida, está no seu interior
}

console.log(comida); // Vai aparecer o nome, a temperatura e o novo metodo(funcao de objeto) cozinhar

comida.cozinhar(100); // Chamou o metodo cozinhar, com a nova temperatura 100

comida.log(comida); // Com a nova entrada de temperatura, esta substitui a anterior
