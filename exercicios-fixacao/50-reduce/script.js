let ordens = [
    {cliente: "Targino", tipo: "venda", quantidade: 77, ativo: "NFCX34"},
    {cliente: "Luna", tipo: "compra", quantidade: 50, ativo: "XNLN34"},
    {cliente: "Onigrat", tipo: "compra", quantidade: 66, ativo: "NCAS34"}
]

// let quantidadeDeOrdens = 0 // Inicia em 0
// for (let i = 0; i < ordens.length; i++) { // Determina o parametro e incrementa
//     quantidadeDeOrdens += ordens[i].quantidade  // Quantificará as ordens, somará e atribuirá estas +=
// }

// console.log(quantidadeDeOrdens); // Mostra o resultado

// Acima a função total criada, abaixo com a função reduce

let quantidadeDeOrdens = ordens.reduce(function(somaOrdens, ordem) { // Coloca 2 parametros, diferente do Map e do Filter
    console.log("Ordem", somaOrdens, ordem) // Verifica a ordem inicial 0, e vai adicionando conforme a quantidade
    return somaOrdens + ordem.quantidade // Faz a soma das quantidades e retorna
}, 0) // Inicia o contador do 0

console.log(quantidadeDeOrdens);

// let quantidadeDeOrdens = ordens.reduce((somaOrdens, ordens) => somaOrdens + ordem.quantidade, 0)

// console.log(quantidadeDeOrdens);

// Abreviação em arrow function
