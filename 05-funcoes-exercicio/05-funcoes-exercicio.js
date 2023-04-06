// Crie uma função para verificar se um valor é Truthy
function isTruthy(value) {
  if (!!value == true) {
    return true;
  } else {
    return false;
  }
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado) {
  return lado * 4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  var nomeCompleto = `${nome} ${sobrenome}`;
  return nomeCompleto;
}

// Crie uma função que verifica se um número é par
function par(valor) {
  if (valor % 2 == 0) {
    return "Valor é um número par";
  } else {
    return "Valor é um número ímpar";
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(valor) {
  return typeof valor;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
function imprimeNome(valor) {
  console.log("Allyson Thales dos Santos");
}

addEventListener("click", imprimeNome);

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193; // << faltava definir no escopo o total de países
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
