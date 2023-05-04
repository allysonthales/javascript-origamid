// Crie uma função que verifique
// corretamente o tipo de dado
function verifyData(data){
  return Object.prototype.toString.call(data)
}

const data = verifyData(1)
console.log(data);

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {
  lados: 2,
}

Object.freeze(quadrado)

quadrado.lados = 3
console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

Object.freeze(configuracao)
Object.seal(configuracao)
Object.preventExtensions(configuracao)

configuracao.width = 500
configuracao.novoAtributo = "não deve entrar"
delete configuracao.height

console.log(configuracao);


// Liste o nome de todas
// as propriedades do
// protótipo de String e Array


