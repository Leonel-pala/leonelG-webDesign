const btnLine = document.getElementById('icon-lines');
const nav = document.querySelector('nav');
const background = document.getElementById('background-navActive');

let show = true;
btnLine.addEventListener('click', () => {
  changeState();
});
background.addEventListener('click', () => {
  changeState();
});
nav.addEventListener('click', () => {
  changeState();
});

function changeState() {
  if (show) {
    nav.classList.add('show');
    btnLine.classList.add('show');
    background.classList.add('show');
  } else {
    nav.classList.remove('show');
    btnLine.classList.remove('show');
    background.classList.remove('show');
  }
  show = !show;
}
