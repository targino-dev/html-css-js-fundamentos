function mostrarPromocao() {
    let inVeiculo = document.getElementById("inVeiculo");
    let inPreco = document.getElementById("inPreco");
    let outVeiculo = document.getElementById("outVeiculo");
    let outEntrada = document.getElementById("outEntrada");
    let outParcela = document.getElementById("outParcela");
    // Referencia a todos os Ids do HTML

    let entrada = preco * 0.50; 
    let parcela = (preco * 0.50) / 12;
    // Calcula o valor da entrada e das parcelas
    outVeiculo.textContent = "Promocão: " + veiculo;
    outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
    outParcela.textContent = "+ 12x de R$: " + parcela.toFixed(2);
}

let btVerPromocao = document.getElementById("btVerPromocao"); // Seleiona o botão
btVerPromocao = addEventListener("click", mostrarPromocao); // Dispara a funcao mostrarPromocao ao evento de clickarr
