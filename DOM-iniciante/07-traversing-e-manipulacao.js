// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");
const novoMenu = menu.cloneNode("true");

copy.appendChild(novoMenu);

// Selecione o primeiro DT da dl de Faq
const primeiraDT = document.querySelector(".faq dt");
// Selecione o DD referente ao primeiro DT
const primeiraDD = primeiraDT.nextElementSibling;

console.log(primeiraDT);
console.log(primeiraDD);

// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector(".animais");
const faq = document.querySelector(".faq");

faq.innerHTML = animais.innerHTML;
