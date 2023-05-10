// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const li = document.querySelectorAll("li");

for (item of li) {
  item.classList.add("teste");
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for (style in window) {
  console.log(`${style} ${window[style]}`);
}
