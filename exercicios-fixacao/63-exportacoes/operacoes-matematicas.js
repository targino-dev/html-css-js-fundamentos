// function somar(numero1, numero2) {
//     return numero1 + numero2;
// }

// function multiplicar(numero1, numero2) {
//     return numero1 * numero2;
// }

// // Pode utilizar o elemento export na frente do nome da função para chama-la de forma unitária
// // Mas, se deseja que todas as funções sejam chamadas utilize o modelo abaixo

// export { somar, multiplicar } // Export { nome das funções separadas por vírgulas}

function somar(numero1, numero2) {
     return numero1 + numero2;
}

export default somar // Para exportar de forma Default, só remover as chaves
