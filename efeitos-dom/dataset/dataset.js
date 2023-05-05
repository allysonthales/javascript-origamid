// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

const dataAnima = document.querySelectorAll("[data-anima");
dataAnima.forEach((item) => {
  if (item.dataset.anima == "show-right") {
    item.classList.add("show-right");
  } else if (item.dataset.anima == "show-down") {
    item.classList.add("show-down");
  }
});

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.

const jsScroll = document.querySelectorAll(".js-scroll");
console.log(jsScroll);

jsScroll.forEach((item) => {
  item.dataset.js = "scroll";
  item.classList.remove("js-scroll");
});
