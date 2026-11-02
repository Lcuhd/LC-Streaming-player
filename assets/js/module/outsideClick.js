export default function outsideClick(elemento, callback) {
  function verificarClique(event) {
    if (!elemento.contains(event.target)) {
      document.removeEventListener("click", verificarClique);
      callback();
    }
  }

  setTimeout(() => {
    document.addEventListener("click", verificarClique);
  }, 0);
}