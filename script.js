let janela = document.querySelector('.janela');
let overlay = document.querySelector('.overlay');
let btnFechar = document.querySelector('.close-modal');
let cards = document.querySelectorAll('.caixa');
let areas = document.querySelectorAll('.card');

const removeHidden = function () {
    janela.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const addHidden = function () {
  janela.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < areas.length; i++) {
    areas[i].addEventListener('click', removeHidden, function () {
    })
    };

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', removeHidden)
}



overlay.addEventListener('click', addHidden);
btnFechar.addEventListener('click', addHidden);