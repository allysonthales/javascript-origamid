// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector("img");
console.log(primeiraImagem.offsetTop);

// Retorne a soma da largura de todas as imagens
let soma =0;
const imagens = document.querySelectorAll("img")
imagens.forEach(item => {
  soma += item.clientWidth;
})
console.log(soma);
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('.menu a')

// menu.forEach

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const menu = document.querySelector('.menu')
const tela = window.matchMedia("(max-width: 720px)")
if(tela.matches){
  
}else{
  console.log('false');
}

const telaAtual = window.innerWidth
console.log(telaAtual);