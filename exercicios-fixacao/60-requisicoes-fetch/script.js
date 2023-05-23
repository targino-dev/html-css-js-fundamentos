document.getElementById("tirar-carta").addEventListener("click", () => {
    tirarUmaCartaAleatoriaDoBaralho()
})

async function criarBaralhoEmbaralhado() {
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const resposta = await fetch(url) // Retorna a resposta como uma promise pendente, tem que colocar async/await 
//    console.log(resposta) // Como a promise com o status de pending (pendente), necessário async/await
//    const json = await resposta.json()
//    console.log(json) // Ao der um console log no JSON retornará uma promise (pendente), necessário o await
    return await resposta.json // Retornará o JSON, com os objetos para pegar o ID posteriormente
}

criarBaralhoEmbaralhado() // Se colocar o async await, receberá a response com os dados. Sem o async = pendente

await function tirarUmaCarta(deck_id) {
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const resposta = await fetch(url)
    return await resposta.json()
}

function tirarUmaCartaAleatoriaDoBaralho() {
    const baralho = await criarBaralhoEmbaralhado()
//    console.log(baralho) 
    const carta = await tirarUmaCarta(baralho.deck_id) // Para pegar o deck id do objeto
//    console.log(carta) // Observar qual o indice da imagem das cartas para mostrar
    const imagemCarta = carta.cards[0].image
    document.getElementById("carta").src = imagemCarta
}

tirarUmaCartaAleatoriaDoBaralho()
console.log("Segue o fluxo sem esperar");
