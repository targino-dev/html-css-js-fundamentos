function calcularRaiz() {
    // Cria uma referência aos elementos da página
    let inNumero = document.getElementById("inNumero");
    let outResposta = document.getElementById("outResposta");

    let numero = Number(inNumero.value); // Transforma em numero o valor de inNumero

    // Se não preencheu ou Not-a-Number (NaN)
    if (numero == 0 || isNaN(numero)) {
        alert("Informe um numero válido..."); // Exibe alerta
        inNumero.focus(); // Posiciona no campo inNumero
        return; // Retorna
    }

    let raiz = Math.sqrt(numero); // Calcula raiz quadrada do número

    // Se valor da variável raiz igual este valor arredondado para baixo...
    if (raiz == Math.floor(raiz)) {
        outResposta.textContent = "Raiz: " + raiz; // Mostra a raiz
    } else {
        // Senão, exibe mensagem indicando que não há raíz exata
        outResposta.textContent = "Não há raíz exata para " + numero;
    }
}

// Cria referencia ao elemento btExibir e registra evento que irá carregar function
let btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularRaiz);
