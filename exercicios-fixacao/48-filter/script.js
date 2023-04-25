let pessoas = [
    { nome: "Targino", idade: 29},
    { nome: "Luna", idade: 9},
    { nome: "Onigrat", idade: 29}
]

// let pessoasComIdadeDe29Anos = []
// for(let i = 0; i < pessoas.length; i++) { // Percorre o array e incrementa
//     if(pessoas[i].idade === 29) {
//         pessoasComIdadeDe29Anos.push(pessoas[i]) // Vai verificar e adicionar na variavel
//     }
// }

// console.log(pessoasComIdadeDe29Anos); // O resultado do push com pessoas com idade === 29

// Acima foi o teste com a função básica para filtar, abaixo será a utilização do método filter para filtrar o array

let pessoasComIdadeDe29Anos = pessoas.filter(function(pessoa) { // Parametro pessoa é generico para determinar os objetos do array
    return pessoa.idade === 33 // Parametro verifica a idade do objeto de pessoa (objeto) se é identica a 33 e retorna.

})

console.log(pessoasComIdadeDe29Anos);
