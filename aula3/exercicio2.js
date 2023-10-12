/*
    Você é um professor, e tem uma lista com alguns alunos (sendo objetos),
    que contém nome, nota1 e nota2. Use o for para percorer esse array
    e calcular a média das duas notas de cada aluno.
    Ao final, imprimir o nome do aluno e a sua média
*/
const listaDeAlunos = [
  { nome: "João", notas: [8, 7] },
  { nome: "Maria", notas: [9, 8] },
  { nome: "Carlos", notas: [6, 5] },
  { nome: "Ana", notas: [7, 6] },
  { nome: "Pedro", notas: [10, 9] },
  { nome: "Lúcia", notas: [8, 7] },
  { nome: "Fernando", notas: [7, 6] },
  { nome: "Camila", notas: [9, 8] },
  { nome: "Rafael", notas: [6, 5] },
  { nome: "Juliana", notas: [10, 9] },
]

const mediaDosAlunos = [];
// está variável utilizei para usar como base no espaçamento das colunas
let tamanhoMaiorNome=0
for (const aluno of listaDeAlunos) {
  // optei por segregar as notas para dar maior visibilidade
  const nota1 = aluno.notas[0];
  const nota2 = aluno.notas[1];
  // adiciono a lista um objeto contendo nome e média do aluno
  mediaDosAlunos.push({
    nome: aluno.nome,
    media: (nota1 + nota2) / 2,
  });
  // identificando o maior nome
  if(aluno.nome.length > tamanhoMaiorNome ){
    tamanhoMaiorNome = aluno.nome.length
  }
}
// impressão das médias
for (const aluno of mediaDosAlunos) {
  console.log(`${aluno.nome.padEnd(tamanhoMaiorNome)} - média = ${aluno.media.toLocaleString("pt-br")}`);
}