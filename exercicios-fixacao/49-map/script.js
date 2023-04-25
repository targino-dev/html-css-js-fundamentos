let pessoas = [
    {nome: "Targino", idade: 29},
    {nome: "Luna", idade: 9},
    {nome: "Onigrat", idade: 29} 
]

// let nomeDasPessoas = [] // Cria o array
// for (let i = 0; i < pessoas.length; i++) { // Verifica a extensão do array e incrementa
//     nomeDasPessoas.push(pessoas[i].nome) // Retornará apenas o nome das pessoas
// }

// console.log(nomeDasPessoas); // Mostrará o nome de todos os elementos do array

// // Acima foi efetuado a verificação por função, abaixo será utilizado o método map



// let nomeDasPessoas = pessoas.map(function(pessoa) {
//     return pessoa.nome + " têm " + pessoa.idade + " anos de idade";
// }) // Com o padrão normal de criação de função

let nomeDasPessoas = pessoas.map(pessoa => pessoa.nome + " tem " + pessoa.idade + " anos de idade"); // Arrow functions

console.log(nomeDasPessoas); // Retornará os nomes das pessoas
