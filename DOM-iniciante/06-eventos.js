// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#');
linksInternos.forEach((item) => {
  item.addEventListener("click", handleClick);
});

function handleClick(event) {
  event.preventDefault();

  linksInternos.forEach((item) => {
    item.classList.remove("ativo");
  });

  event.target.classList.add("ativo");
}

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll("body *");
todosElementos.forEach((item) => {
  item.addEventListener("click", handleItem);
});
function handleItem(event) {
  console.log(event.target);
  event.stopPropagation();
}

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

todosElementos.forEach((item) => {
  item.addEventListener("click", removeClick);
});

function removeClick(event) {
  event.target.remove();
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

document.addEventListener("keydown", keyDown);
tamanho = 16;
function keyDown(event) {
  const htmlElement = document.querySelector("html");
  if (event.key == "t") {
    tamanho++;
    htmlElement.style.fontSize = `${tamanho}px`;
  }
}
