//Lê o valor do produto
let produto = Number(prompt("Qual o valor do produto?"));
// Valor sobre 10% de desconto a vista
let porcentagem = produto - (produto * 0.10) ;
// Opção de parcelamento em 3x
let parcelamento = produto / 3;
// Informa o resultado
alert("Preço R$: " + produto.toFixed(2) + "\nA vista R$: " + porcentagem.toFixed(2) + "\nOu 3x de R$: " + parcelamento.toFixed(2));
