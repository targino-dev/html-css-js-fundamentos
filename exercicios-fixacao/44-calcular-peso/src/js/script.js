function calcularPeso() {
    // Cria referência aos elementos manipulados pela function
    let inNome = document.getElementById("inNome");
    let rbMasculino = document.getElementById("rbMasculino");
    let rbFeminino = document.getElementsById("rbFeminino");
    let inAltura = document.getElementById("inAltura");
    let outResposta = document.getElementById("outResposta");

    // Obtém o conteúdo dos campos de edição da página
    let nome = inNome.value;
    let masculino = rbMasculino.checked;
    let feminino = rbFeminino.checked;
    let altura = Number(inAltura.value)

    // Verifica se nome foi preenchido e sexo selecionado
    if (nome == "" || (masculino == false && feminino == false)) {
        alert("Por favor, informe o nome e selecione o sexo...");
        inNome.focus(); // Coloca o foco no campo de edição para digitar inNome
        return;
    }

    // Se altura vazio (0) ou NaN: Not-a-Number (um texto for informado, por exemplo)
    if (altura == 0 || isNaN(altura)) {
        alert("Por favor, informe a altura corretamente...");
        inAltura.focus();
        return;
    }

    // Se masculino (significa se masculino == true)
    if (masculino) {
        let peso = 22 * Math.pow(altura, 2); // Math.pow eleva ao quadrado
    } else {
        let peso = 21 * Math.pow(altura, 2); 
    }

    // Apresenta a resposta ( altera o conteúdo da linha outResposta)
    outResposta.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + "kg";
}

// Cria referência ao elemento btCalcular e registra evento associado a calcularPeso
    let btResultado = document.getElementById("btCalcular");
    btCalcular.addEventListener("click", calcularPeso);
