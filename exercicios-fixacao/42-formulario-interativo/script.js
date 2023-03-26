function validar() {
    let nome = document.getElementById("nome");
    let sobrenome = document.getElementById("sobrenome");
    let sexo = document.getElementById("sexo");
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");
    let telefone = document.getElementById("telefone");
    let cep = document.getElementById("cep");
    let newsletter = document.getElementById("newsletter");
}

if (nome.value == "") {
    alert("Nome não informado");
    nome.focus();
    return;
}

if (sobrenome.value == "") {
    alert("Sobrenome não informado");
    sobrenome.focus();
    return;
}

if (sexo.value == "") {
    alert("Sexo não informado");
    sexo.focus();
    return;
}

if (email.value == "") {
    alert("Email não inforrmado");
    email.focus();
    return;
}

if (senha.value == "") {
    alert("Senha não informada");
    senha.focus();
    return;
}

if (telefone.value == "") {
    alert("Telefone não informado");
    telefone.focus();
    return;
}

if (cep.value == "") {
    alert("CEP não informado");
    cep.focus();
    return;
}

alert("Formulário enviado com sucesso!")
