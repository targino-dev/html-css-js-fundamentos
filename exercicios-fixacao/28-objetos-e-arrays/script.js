// let frutas = ["uva", "banana", "melão"]; // Array

// let videoGame = {
//     nome: "Playstation",
//     valor: 3000
// }; // Objeto

// let videoGame2 = {
//     nome: "Xbox",
//     valor: 2000
// }; // Objeto2

// let videoGames = [videoGame, videoGame2]; // Array com objetos

// console.log(videoGames); // Vai mostrar o array

// console.log(videoGames[1].nome); // Vai mostrar o nome do segundo array videoGame2 = Xbox

// let jogo1 = {
//     nome: "Fallout"
// }

// let jogo2 = {
//     nome: "Halo"
// }

// let videoGame = {
//     nome: "Xbox",
//     valor: 3000,
//     jogos: [jogo1, jogo2, "Fifa"]
// };

// let jogo4 = {
//     nome: "Forza"
// }

// videoGame.jogos.push(jogo4) // Adiciona o jogo 4

// console.log(videoGame)

let cliente = {
    nome: "Targino",
    ultimoPedido: {
        produto: "Xbox",
        valor: 3000,
        jogos: [
            {nome: "Halo" }
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0].nome) // Mostrar o nome Halo, entrou no cliente, ultimo pedido e array
