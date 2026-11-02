export default function iniAccordeon(){
    const accordionList = document.querySelectorAll('dt');

function activeList() {
  this.classList.toggle('ativo');
  this.nextElementSibling.classList.toggle('ativo');
}

accordionList.forEach((item) => {
  item.addEventListener('click', activeList)
});
}
