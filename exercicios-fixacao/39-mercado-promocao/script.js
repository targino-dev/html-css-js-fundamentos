function calcularPreco() {
    let nomeProduto = document.getElementById("nomeProduto");
    let precoProduto = document.getElementById("precoProduto");
    let outPromocao = document.getElementById("outPromocao");
    let outSaida = document.getElementById("outSaida")
    // Faz referência aos ids dos elementos

    let Produto = nomeProduto.value; // Pega o valor do input nomeProduto
    let Preco = Number(precoProduto.value); // Pega o valor e transforma em numero
    // Obtém os campos e transforma em numeros

    outPromocao.textContent = "Promoção de " + Produto;
    outSaida.textContent = "Valor a pagar R$: " + valor.toFixed(2); // Coloca o valor e o campo adicional para moeda.

}

let btCalcular = document.getElementById("btCalcular"); // Faz referência ao botão Calcular.
btCalcular.addEventListener("click", calcularPreco); // Adiciona o evento de click ao botão com a função de calcular preço.
