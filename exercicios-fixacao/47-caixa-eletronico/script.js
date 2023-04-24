function calcularNotas() {
    // Cria uma referência aos elementos da página
    let inSaque = document.getElementById("inSaque");
    let outNotasCem = document.getElementById("outNotasCem");
    let outNotasCinquenta = document.getElementById("outNotasCinquenta");
    let outNotasDez = document.getElementById("outNotasDez");

    // Limpa mensagens (caso, segunda execução)
    outNotasCem.textContent = "";
    outNotasCinquenta.textContent = "";
    outNotasDez.textContent = "";

    let saque = Number(inSaque.value); // Converte conteúdo do campo inSaque

    // Se não preencheu ou Not-a-Number (NaN)
    if (saque == 0 || isNaN(saque)) {
        alert("Informe o valor do saque corretamente"); // Exibe alerta
        inSaque.focus(); // Posiciona em inSaque
        return;
    }

    // Verifica se saque não é multiplo de 10
    if(saque % 10 != 0) {
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
        inSaque.focus();
    }

    // Calcula notas de 100, 50 e 10
    let notasCem = Math.floor(saque / 100);
    let resto = saque % 100;
    let notasCinquenta = Math.floor(resto / 50);
    resto = resto % 50;
    let notasDez = Math.floor(resto / 10);
    // Exibe as notas apenas se houver
    if (notasCem > 0) {
        outNotasCem.textContent = "Notas de R$100: " + notasCem;
    }
    if (notasCinquenta > 0) {
        outNotasCinquenta.textContent = "Notas de R$50: " + notasCinquenta;
    }
    if (notasDez > 0) {
        outNotasDez.textContent = "Notas de R$10: " + notasDez;
    }

}

// Cria referência ao elemento btExibir e associa function ao evento click
let btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularNotas);
