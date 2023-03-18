function calcularPreco() {
    let nomeProduto = document.getElementById("nomeProduto");
    let precoProduto = document.getElementById("precoProduto");
    let outPromocao = document.getElementById("outPromocao");
    let outSaida = document.getElementById("outSaida")
    // Faz referência aos ids dos elementos

    let Produto = nomeProduto.value; // Pega o valor do input nomeProduto
    let Preco = Number(precoProduto.value); // Pega o valor e transforma em numero
    let Calculo = (Preco * 2) + (Preco / 2);
    // Obtém os campos e transforma em numeros

    outPromocao.textContent = Produto + " - Promoção: Leve 3 por R$: " + Calculo.toFixed(2);
    outSaida.textContent = "O 3º produto custa apenas R$: " + (Preco / 2).toFixed(2); // Coloca o valor e o campo adicional para moeda.

}

let btCalcular = document.getElementById("btCalcular"); // Faz referência ao botão Calcular.
btCalcular.addEventListener("click", calcularPreco); // Adiciona o evento de click ao botão com a função de calcular preço.
