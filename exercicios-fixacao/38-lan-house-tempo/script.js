function calcularValor() {
    let inValor = document.getElementById("inValor"); // Seleciona o campo do valor
    let inTempo = document.getElementById("inTempo"); // Seleciona o tempo do campo
    let outValor = document.getElementById("outValor"); // Seleciona o titulo para saída do nome do medicamento

    let valor = Number(inValor.value); // Transforma o valor de 15min em um numero
    let tempo = Number(inTempo.value); // Transforma o tempo em numero

    let calculo = tempo / valor; // 
    outNome.textContent = "Promoção de " + medicamento; // Mostra no titulo outNome o nome do medicamento
    outPromocao.textContent = "Leve 2 por apenas R$: " + promocao.toFixed(2); // Mostra no titulo outPromocao a promocao
}

let btCalcular = document.getElementById("btCalcular"); // Seleciona o botão
btCalcular.addEventListener("click", calcularPromocao); // Dispara a funcao calcularPromocao com o clique
