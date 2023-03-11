function calcularPromocao() {
    let inMedicamento = document.getElementById("inMedicamento"); // Seleciona o nome do medicamento
    let inPreco = document.getElementById("inPreco"); // Ler o preço do medicamento
    let outNome = document.getElementById("outNome"); // Seleciona o titulo para saída do nome do medicamento
    let outPromocao = document.getElementById("outPromocao"); // Seleciona o titulo para saída da promoção

    let preco = Number(inPreco.value); // Transforma o preço em um numero
    let promocao = Math.floor(preco * 2); // Arredonda o preço para baixo após o dobro
    let medicamento = inMedicamento.value; // Texto do InMedicamento 
    outNome.textContent = "Promoção de " + medicamento; // Mostra no titulo outNome o nome do medicamento
    outPromocao.textContent = "Leve 2 por apenas R$: " + promocao.toFixed(2); // Mostra no titulo outPromocao a promocao
}

let btCalcular = document.getElementById("btCalcular"); // Seleciona o botão
btCalcular.addEventListener("click", calcularPromocao); // Dispara a funcao calcularPromocao com o clique
