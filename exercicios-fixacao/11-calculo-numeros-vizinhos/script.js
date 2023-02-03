// Lê o numero alvo
let numero = Number(prompt("O número alvo é? "));
// Calcula as casas anterior e posterior
let anterior = numero + 1;
let posterior = numero - 1;
// Mostra o resultado
alert("Número alvo: " + numero + "\nNúmeros vizinhos: " + anterior + " " + posterior);
