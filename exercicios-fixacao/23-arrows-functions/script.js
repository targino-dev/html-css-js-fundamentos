let resultadoDaSoma = (numero1, numero2) => { // Remove o nome function no inicio e coloca => após os parâmetros
    return numero1 + numero2;
}

console.log(resultadoDaSoma(11, 2));

const incentivarEstudo = nomeEstudante => { // Não necessita parâmetros em (), pode criar a => após o nome sem ()
    console.log("Parabéns, " + nomeEstudante + ", você está evoluindo no Javascript!");
}

incentivarEstudo("Targino");
