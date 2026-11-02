import outsideClick from "./outsideClick.js";

export default function iniMenu() {
  const btnMenu = document.querySelector('[data-menu="btn"]');
  const menuList = document.querySelector('[data-menu="ul"]');
  const nav = document.querySelector('[data-menu="main"]');

  if (!btnMenu || !menuList || !nav) return;

  function fecharMenu() {
    menuList.classList.remove("active");
    btnMenu.classList.remove("active");
    btnMenu.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    const aberto = menuList.classList.toggle("active");

    btnMenu.classList.toggle("active", aberto);
    btnMenu.setAttribute("aria-expanded", String(aberto));

    if (aberto) {
      outsideClick(nav, fecharMenu);
    }
  }

  btnMenu.addEventListener("click", openMenu);
}