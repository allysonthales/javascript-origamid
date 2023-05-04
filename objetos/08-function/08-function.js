// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);
const arrayParagrafos = Array.from(paragrafos);
const somaCaracteres = arrayParagrafos.reduce((acumulador, item) => {
  return acumulador + item.innerText.length;
}, 0);
console.log(somaCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function novoHtml(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  elemento.classList.add(classe);
  elemento.innerHTML = conteudo;
  return elemento;
}

console.log(novoHtml("div", "ativo", "conteudo bastante"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const h1Titulo = novoHtml.bind(null, "h1", "titulo");

console.log(h1Titulo("texto"));
