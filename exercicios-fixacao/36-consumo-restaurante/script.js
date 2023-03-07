function calcularPreco() {
    let inQuilo = document.getElementById("inQuilo");
    let inConsumo = document.getElementById("inConsumo");
    let outValor = document.getElementById("outValor");
    // Faz referência aos ids dos elementos

    let quilo = Number(inQuilo.value);
    let consumo = Number(inConsumo.value);
    // Obtém os campos e transforma em numeros

    let valor = ( quilo / 1000) * consumo; // Transforma quilo em grama e transforma em consumo.
    outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2); // Coloca o valor e o campo adicional para moeda.

}

let btCalcular = document.getElementById("btCalcular"); // Faz referência ao botão Calcular.
btCalcular.addEventListener("click", calcularPreco); // Adiciona o evento de click ao botão com a função de calcular preço.
