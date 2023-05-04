// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll(".curso");
const cursosArray = Array.from(cursos);

const objetoConteudo = cursosArray.map((item) => {
  const titulo = item.querySelector("h1").innerText;
  const descricao = item.querySelector("p").innerHTML;
  const aulas = item.querySelector(".aulas").innerText;
  const horas = item.querySelector(".horas").innerText;

  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
});

console.log(objetoConteudo);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const numerosMaiores = numeros.filter((item) => item > 100);
console.log(numerosMaiores);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const containBaixo = instrumentos.some((item) => {
  return item == "Baixo";
});
console.log(containBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

valorTotal = compras.reduce((acumulador, item, index) => {
  const preco = +item.preco.split(" ")[1].replace(",", ".");
  return acumulador + preco;
}, 0);

console.log(valorTotal);
