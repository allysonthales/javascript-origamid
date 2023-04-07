// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
console.log(var, marca, portas);

// Resposta = não existe variavel "var" e a variavel "marca" e "portas" sera undefined porque sua declaração e atribuição estão em outro escopo.

// Como corrigir o erro abaixo?
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);

// Resposta = A variável "dois" dentro está sendo declarada na função "SomarDois()" e não pode ser utilizada dentro da função "DividirDois()" porque está em um escopo diferente.

// O que fazer para total retornar 500?
var numero = 50;

for(var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

// Resposta = Dentro do "for", o valor de "numero" está sendo sobrescrito porque está saindo do escopo.