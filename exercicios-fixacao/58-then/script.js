// let ferverAgua = function(chaleiraEstaNoFogao, fogaoEstaAcesso) {
//     return new Promise((resolve, reject) => {
//         if(chaleiraEstaNoFogao && fogaoEstaAcesso) {
//             console.log("Começando o processo de ferver água")
//             resolve()
//         } else {
//             console.log("É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água");
//             reject()
//         }
//     })
// };

// let chaleiraEstaNoFogao = true;
// let fogaoEstaAceso = true;

// let passarCafe = () => console.log("Passando café")


// // let fogaoEstaAcesso = false; // Teste com o false para resultar no reject
// console.log(chaleiraEstaNoFogao, fogaoEstaLigado).then(passarCafe);
// console.log("Fazendo café");


// O metodo then pode ser utilizado da seguinte maneira

ferverAgua(chaleiraEstaNoFogao, fogoEstaAceso) 
    .then(() => {
        return passarOCafe();
    })
    .then(() => {
        return tomarCafe();
    })
    .then(() => {
        return lavarXicara();
    })
    .then(() => {
        console.log("Finalizando ritual do café, bora trabalhar");
    });
