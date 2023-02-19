// function somar (numero1, numero2) {
//    return numero1 + numero2;
// }

// let resultadoDaSoma = somar(12, 5);
// console.log(resultadoDaSoma);    // O escopo de uma função padrão para mostrar o resultado

let resultadoDaSoma = function(numero1, numero2) { // Cria a função sem nome na declaração da variável
    return numero1 + numero2;
}

console.log(resultadoDaSoma(11, 2));
