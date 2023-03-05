function converterDuracao () {
// Cria referencia aos elementos da página
let inTitulo = document.getElementById("inTitulo");
let inDuracao = document.getElementById("inDuracao");
let outTitulo = document.getElementById("outTitulo");
let outResposta = document.getElementById("outResposta");


// Obtém conteúdos dos campos de entrada
let titulo = inTitulo.value;
let duracao = Number(inDuracao.value); // Transforma a string em numero
let horas = Math.floor(duracao / 60); // Divide a hora em minutos e o .floor arredonda para baixo
let minutos = duracao % 60; // Obtém o resto da divisão entre os numeros
outTitulo.textContext = titulo; // Altera o conteudo do parágrafo de resposta / saida
outResposta.textContext = horas + " hora(s) e " + minutos + " minuto(s).";
}

let btConverter = document.getElementById("btConverter"); // Cria uma referência ao elemento btConverter (botão)
btConverter.addEventListener("click", converterDuracao); // Dispara o evento que ativa funcao ao clicar no botão
