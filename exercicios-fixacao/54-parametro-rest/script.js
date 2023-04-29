// Sintaxe

// function(a, b, ...args) {
//    //...
// }

// function incentivarEstudo(mensagem, aluno) {
//     console.log(`${mensagem} ${aluno}`)
// }

// console.log(incentivarEstudo("Logo você colherá os frutos, parabéns por permanecer estudando, ", "Targino"));

// Acima, é para um unico parametro de aluno, abaixo usaremos o parametro REST para deixar em aberto os nomes deles

// function incentivarEstudo(mensagem, ...alunos) {
//     console.log(`${mensagem} ${alunos}`)
// }

// console.log(incentivarEstudo("Logo você colherá os frutos, parabéns por permanecer estudando, ", "Targino", "Aluno2", "Aluno3", "Aluno4"));

// Acima, você acrescenta os nomes que serão adicionados no parametro REST para serem mostrados na mesma linha

// Para serem mostrados de forma separada deverá se feito o seguinte

// function incentivarEstudo(mensagem, ...alunos) {
//     console.log(alunos)
//     alunos.map(aluno => console.log(`${mensagem} ${aluno}`) // Mapeia um nome por vez
// }

// console.log(incentivarEstudo("Logo você colherá os frutos, parabéns por permanecer estudando, ", "Targino", "Aluno2", "Aluno3"));
