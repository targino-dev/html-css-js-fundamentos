// Possui os seguintes estados:

// Pendente - Recem criada
// Realizada (Resolve) - Executada
// Recusada (Reject) - Não executado
// Estabelecida - Um estado posterior ao pendente
//

// Escopo abaixo
// new Promise((resolve, reject) => {

// })


let ferverAgua = function(chaleiraEstaNoFogao, fogaoEstaAcesso) {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaAcesso) {
            console.log("Começando o processo de ferver água")
            resolve()
        } else {
            console.log("É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água");
            reject()
        }
    })
};

let chaleiraEstaNoFogao = true;
let fogaoEstaAcesso = true;
// let fogaoEstaAcesso = false; // Teste com o false para resultar no reject
console.log(chaleiraEstaNoFogao, fogaoEstaLigado);
console.log("Fazendo café");
