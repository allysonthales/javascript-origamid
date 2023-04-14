// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll(".menu li");
menu.forEach((item) => {
  item.classList.add("ativo");
});
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item, index) => {
  if (index != 0) {
    item.classList.remove("ativo");
  }
});

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");
imgs.forEach((item) => {
  console.log(item.hasAttribute("alt"));
});

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('.menu a[href*="https"]');
linkExterno.setAttribute("href", "google.com");
console.log(linkExterno);
