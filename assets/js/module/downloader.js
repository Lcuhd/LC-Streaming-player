export default function iniDownloader() {
  const copy = document.querySelector("[data-codigo]");

  copy.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(copy.dataset.codigo);
      copy.textContent = "Copiado!";
    } catch {
      copy.textContent = "Não foi possível copiar";
    }
  });
}
