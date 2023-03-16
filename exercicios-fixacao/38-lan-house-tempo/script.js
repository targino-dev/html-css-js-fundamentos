function calcularValor() {
    let inValor = document.getElementById("inValor"); // Seleciona o campo do valor
    let inTempo = document.getElementById("inTempo"); // Seleciona o tempo do campo
    let outValor = document.getElementById("outValor"); // Seleciona o titulo para saída do valor

    let valor = Number(inValor.value); // Transforma o valor de 15min em um numero
    let tempo = Number(inTempo.value); // Transforma o tempo em numero

    let calculo = tempo / 15; // Divide o tempo total em frações de 15 minutos
    let precoTempo = calculo * valor; // Calcula o valor do tempo de 15 minutos pelo resultado da divisao por 15

  outValor.textContent = "Valor a Pagar R$: " + precoTempo.toFixed(2); // Mostra no titulo outValor o custo
}

let btCalcular = document.getElementById("btCalcular"); // Seleciona o botão
btCalcular.addEventListener("click", calcularValor); // Dispara a funcao calcularPromocao com o clique
