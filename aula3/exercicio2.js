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
];

const mediaDosAlunos = [];
// está variável serve de base para tabular as colunas
let tamanhoMaiorNome = 0;

for (const aluno of listaDeAlunos) {
  const nota1 = aluno.notas[0];
  const nota2 = aluno.notas[1];

  mediaDosAlunos.push({
    nome: aluno.nome,
    media: (nota1 + nota2) / 2,
  });

  // identificando o maior nome
  if (aluno.nome.length > tamanhoMaiorNome) {
    tamanhoMaiorNome = aluno.nome.length;
  }
}

for (const aluno of mediaDosAlunos) {
  console.log(`${aluno.nome.padEnd(tamanhoMaiorNome)} - média = ${aluno.media.toLocaleString("pt-br")}`);
}
