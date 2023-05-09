// Remova o erro
const priceNumber = (n) => +n.replace("R$", "").replace(",", ".");
console.log(priceNumber("R$ 99,99"));
// Crie uma IIFE e isole o escopo
// de qualquer código JS.

const teste = "abc";
(() => {
  const teste = "aaa";
  console.log(teste);
})();
console.log(teste);

// Como podemos utilizar
// a função abaixo.
const active = (callback) => callback();

active(() => {
  console.log("callback");
});
