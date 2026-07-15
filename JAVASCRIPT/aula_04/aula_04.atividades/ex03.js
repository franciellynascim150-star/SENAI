const pessoa = {
  nome: 'Franzoca',
  idade: 15,
  cidade: 'São José'
}




console.log(pessoa.nome);
console.log(pessoa.idade);


console.log(pessoa['nome']);
console.log(pessoa['idade']);


let chave = 'idade';
console.log(pessoa[chave]);
