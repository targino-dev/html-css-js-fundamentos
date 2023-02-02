// Lê o valor do jantar
var jantar = Number(prompt("Valor do Jantar R$: "));
// Calcula os dados
var garcom = jantar * 0.10;
var total = jantar + garcom;
// Apresenta as respostas
alert("Taxa do Garçom R$: " + garcom.toFixed(2) + "\nTotal R$: " + total.toFixed(2)); 
// .toFixed() = Casas decimais(Numeros de casas depois do ponto) 
// \n = Quebra de linha
