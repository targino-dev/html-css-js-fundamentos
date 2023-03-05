function mostrarOla () {
let nome = document.getElementById("nome").value; // Selecionou o valor do texto no id nome
document.getElementById("resposta").textContent = "Olá " + nome; // Mostrou o valor alterando o conteudo de texto
} 
let mostrar = document.getElementById("mostrar"); // Seleciona o id mostrar
mostrar.addEventListener("click", mostrarOla); // Adiciona um evento a variavel mostrar, que ao ser clicado chama a funçao mostrarOla

// .textContent - Consulta ou altera o texto exibido por elementos HTML como parágrafos (p), cabeçalhos (h1, h2,...) ou containers (span, div).
// .innerHTML - Consulta ou altera o conteúdo de elementos HTML como parágrafos (p), cabeçalhos (h1, h2,...) ou containers (span, div). 
// Códigos HTML presentes no conteúdo são renderizados pelo navegador.
// .value - Consulta ou altera o conteúdo de campos de formulário.

