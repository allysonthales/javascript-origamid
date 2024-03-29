// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const dadosPessoais = {
  nome: "Allyson",
  sobrenome: "Thales",
  idade: 28,
};

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function nomeCompleto() {
  console.log(`${this.nome} ${this.sobrenome}`);
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

const cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa == "homem") {
      return "au au";
    } else {
      return "";
    }
  },
};

// console.log(cachorro.latir("homem"));
