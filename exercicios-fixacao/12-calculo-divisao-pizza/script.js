// Lê o valor total da conta
let total = Number(prompt("Valor total da conta? "));
// Le o total de clientes
let clientes = Number(prompt("Quantos clientes vão pagar?"));
// Calcula a divisão da pizza
let divPizza = total / clientes;
// Mostra o resultado
alert("Valor da conta R$: " + total.toFixed(2) + "\nNúmero de Clientes: " + clientes + "\n Valor por cliente R$: " + divPizza.toFixed(2));
