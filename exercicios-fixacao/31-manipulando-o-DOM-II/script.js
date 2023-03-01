function alterarCorDeFundoPrimeiroPost() {
    let posts = document.getElementsByClassName("post");

    console.log(posts);

    let primeiroPost = post[0]; // Seleciona o primeiro post
    console.log("primeiroPost", primeiroPost);
    primeiroPost.style.backgroundColor = "red";  // Para ativar o background, é necessario o camelcase!
}

function aumentarFonteSegundoPost() {
    let textPosts = document.getElementsByClassName ("texto-post"); // Seleciona a class texto-post

    textoPost[1].classList.add("fonte-grande"); // Vai adicionar uma nova classe ao texto-post 2
    
    console.log(textoPost[1].classList);
}

function marcarRadio(genero) {
    let radioMasculino = document.getElementById("genero-masculino"); // Seleciona o elemento masculino

    let radioFeminino = document.getElementById("genero-feminino"); // Seleciona o elemento feminino

    if(genero === "M") {
        radioMasculino.checked = true; // Marca como checked o primeiro radio button
    } else if(genero === "F") {
        radioFeminino.checked = true; // Marca como checked o segundo radio button
    }
}
