function adicionarComentario () {
    let inputComentario = document.getElementsByName("novo-comentario"); // Vai selecionar o texto do input

    let textoDigitado = inputComentario[0].value; // Vai colocar na variavel a primeira coisa a ser digitada

    let novosComentarios = document.getElementsById("novos-comentarios"); // Seleciona div em branco abaixo do input

    novosComentarios.innerHTML += `<p>Novo comentário: ${textoDigitado} </p>` // o + no = adiciona um novo comentario

    // innerHTML seleciona o HTML da div, o texto digitado é mostrado sempre com um novo paragrafo.
}
