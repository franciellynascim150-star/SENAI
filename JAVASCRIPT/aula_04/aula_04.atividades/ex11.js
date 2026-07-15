let filme = {
  titulo: "fran e suas decepções",
  diretor: "Franzoca silva",
  ano: 2022,
  genero: "dó"
};


for (const chave in filme) {
  console.log(`${chave}: ${filme[chave]}`);
}
