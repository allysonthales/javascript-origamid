// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const btn = document.querySelector("button");
const input = document.querySelector("#cep");
const form = document.querySelector("form");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  let cep = input.value;
  cep = fetch(`https://viacep.com.br/ws/${cep}/json`);
  cep
    .then((resolution) => {
      cep = resolution.json();
      return cep;
    })
    .then((resolution) => {
      const div = document.createElement("div");
      div.innerText = `CEP: ${resolution.cep}
      UF: ${resolution.uf}
      DDD: ${resolution.ddd}
      localidade: ${resolution.localidade}
      `;
      form.parentNode.insertBefore(div, form.nextSibling);
      // div.innerHTML = resolution;
      console.log(resolution);
    });
});

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

setInterval(() => {
  const conversor = fetch("https://blockchain.info/ticker");
  conversor
    .then((resolution) => {
      return resolution.json();
    })
    .then((resolution) => {
      let h2 = document.createElement("h2");
      h2.innerText = resolution.BRL.buy;
      btnJoke.insertAdjacentElement("beforebegin", h2);

      console.log(resolution);
    });
}, 30000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btnJoke = document.querySelector("#joke-btn");

btnJoke.addEventListener("click", (event) => {
  const joke = fetch("https://api.chucknorris.io/jokes/random");
  joke
    .then((resolution) => {
      return resolution.json();
    })
    .then((resolution) => {
      const pJoke = document.createElement("p");
      pJoke.innerText = resolution.value;
      const existeElemento = document.querySelector("p");
      if (existeElemento) {
        existeElemento.innerText = resolution.value;
      } else {
        btnJoke.insertAdjacentElement("afterend", pJoke);
      }
    });
});
