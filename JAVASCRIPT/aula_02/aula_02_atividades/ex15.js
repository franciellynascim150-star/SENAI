let nome = "Francine";
let idade = 50;
let altura = 1.56;
let peso = 100;


let imc = peso / (altura * altura);


let maiorDeIdade = idade >= 18;
let imcAbaixo25 = imc < 25;
let nomeMaior3 = nome.length > 3;


console.log("Maior de idade: ${maiorDeIdade}");
console.log("IMC abaixo de 25: ${imcAbaixo25}");
console.log("O nome tem mais de 3 letras: ${nomeMaior3}");
