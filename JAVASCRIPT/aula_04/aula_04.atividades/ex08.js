const carro = {
  modelo: "doido",
  ano: 2030,
  placa: "ABC1789"
};


console.log("Antes de remover a placa:", carro);


delete carro.placa;


console.log("Depois de remover a placa:", carro);


const existePlaca = "placa" in carro;
console.log("A placa ainda existe?", existePlaca);
