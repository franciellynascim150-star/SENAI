let pessoa = { nome: 'Luan', idade: 40, cidade: 'MG' };


for (let chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}