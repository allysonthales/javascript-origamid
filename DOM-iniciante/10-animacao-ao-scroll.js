function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll(event) {
      sections.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top;
        const isWindowVisile = sectionTop - windowMetade < 0;
        if (isWindowVisile) {
          item.classList.add("ativo");
        }
      });
    }
  }
  animaScroll();
  window.addEventListener("scroll", animaScroll);
}

initAnimacaoScroll();
