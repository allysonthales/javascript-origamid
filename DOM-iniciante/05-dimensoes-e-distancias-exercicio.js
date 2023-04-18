// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector("img");
console.log(primeiraImagem.offsetTop);

// Retorne a soma da largura de todas as imagens

const imagens = document.querySelectorAll("img");

function somaImagens() {
  let soma = 0;
  imagens.forEach((item) => {
    soma += item.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll(".menu a");

links.forEach((item) => {
  const linkWidth = item.clientWidth;
  const linkHeight = item.clientHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log("Possui acessibilidade");
  } else {
    console.log("Não possui acessibilidade");
  }

  // console.log(`${item.offsetWidth} offsetwidth`);
  // console.log(`${item.clientWidth} clientWidth`);
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const menu = document.querySelector(".menu");
const tela = window.matchMedia("(width < 720px)");
if (tela.matches) {
  menu.classList.add("menu-mobile");
}
