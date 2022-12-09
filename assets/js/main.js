const footer = document.querySelector("footer");
const parrafo = footer.firstElementChild;
const anioActual = new Date().getFullYear();

parrafo.textContent = `@ ${anioActual} ${parrafo.textContent}`;
