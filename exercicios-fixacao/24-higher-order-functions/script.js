const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir) {
    const mesAtual = 2;
    let anoDeNascimento = 2023 - idade;
    if(mesDeNascimento > mesAtual) anoDeNascimento --;
    imprimir(anoDeNascimento);
}

let imprimirAnoDeNascimento = anoDeNascimento => {
    console.log("Seu ano de nascimento é: " + anoDeNascimento)
}

calcularAnoDeNascimento(29, 11, imprimirAnoDeNascimento) // calcularAno... é uma função e o imprimirAno...

/*
function dobrar(numero) {
    return numero * 2;
}

function triplicar(numero) {
    return numero * 3;
}

function quadruplicar(numero) {
    return numero * 4;
}

console.log(quadruplicar(2))  // 8, Mas existem muitas funcoes separadas...
*/

function multiplicar(multiplicador) {
    return function(numero) {
        return numero * multiplicador;
    }
}

let dobrar = multiplicar(2);
let triplicar = multiplicar(3);
let quadruplicar = multiplicar(4);
