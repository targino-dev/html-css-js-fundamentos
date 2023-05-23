let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

async function iniciarProcessoDeFazerCafe() {
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
    const cafePassado = await passarOCafe(aguaFervida);
    const cafeTomado = await tomarCafe(cafePassado);
    const xicaraLavada = await lavarXicara(cafeTomado);
    if (xicaraLavada) {
        console.log("Finalizado o ritual de tomar café, bora trabalhar");
    }
    console.log(aguaFervida);
}

iniciarProcessoDeFazerCafe()
