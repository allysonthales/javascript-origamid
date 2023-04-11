// este script esta sendo importado na pagina "animais fantasticos"

// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll('img');
imgs.forEach((item) => {
  console.log(item.src);
})

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgSomente = document.querySelectorAll('img[src*="imagem"]')
imgSomente.forEach((item) =>{
  console.log(item.src);
})

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('a[href^="#"]')

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2')


// Selecione o último p do site
const ultimop = [...document.querySelectorAll('p')].at(-1)
