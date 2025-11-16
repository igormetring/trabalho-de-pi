// tema escuro
let body = document.body;
let bntTema = document.querySelector('.logo-darkmode');

bntTema.addEventListener('click', () => {
  body.classList.toggle('darkmode');

  if (body.classList.contains('darkmode')) {
    bntTema.textContent = '🌙';
  } else {
    bntTema.textContent = '🌞';
  }
});
// tema escuro

//modal window
let modal1 = document.querySelector('.dialog-1');
let modal2 = document.querySelector('.dialog-2');
let modal3 = document.querySelector('.dialog-3');
let modal4 = document.querySelector('.dialog-4');
let modal5 = document.querySelector('.dialog-5');
let modal6 = document.querySelector('.dialog-6');

let card1 = document.querySelector('#glass-1');
let card2 = document.querySelector('#glass-2');
let card3 = document.querySelector('#glass-3');
let card4 = document.querySelector('#card-1');
let card5 = document.querySelector('#card-2');
let card6 = document.querySelector('#card-3');

let btnFechar1 = modal1.querySelector('.close-modal');
let btnFechar2 = modal2.querySelector('.close-modal');
let btnFechar3 = modal3.querySelector('.close-modal');
let btnFechar4 = modal4.querySelector('.close-modal');
let btnFechar5 = modal5.querySelector('.close-modal');
let btnFechar6 = modal6.querySelector('.close-modal');

card1.onclick = function () {
  modal1.showModal();
}

card2.onclick = function () {
  modal2.showModal();
}

card3.onclick = function () {
  modal3.showModal();
}

card4.onclick = function () {
  modal4.showModal();
}

card5.onclick = function () {
  modal5.showModal();
}

card6.onclick = function () {
  modal6.showModal();
}

btnFechar1.onclick = function () {
  modal1.close();
};

btnFechar2.onclick = function () {
  modal2.close();
};

btnFechar3.onclick = function () {
  modal3.close();
};

btnFechar4.onclick = function () {
  modal4.close();
};

btnFechar5.onclick = function () {
  modal5.close();
};

btnFechar6.onclick = function () {
  modal6.close();
};

modal1.onclick = function (e) {
  if (e.target === modal1) {
    modal1.close();
  }
};

modal2.onclick = function (e) {
  if (e.target === modal2) {
    modal2.close();
  }
};

modal3.onclick = function (e) {
  if (e.target === modal3) {
    modal3.close();
  }
};

modal4.onclick = function (e) {
  if (e.target === modal4) {
    modal4.close();
  }
};

modal5.onclick = function (e) {
  if (e.target === modal5) {
    modal5.close();
  }
};

modal6.onclick = function (e) {
  if (e.target === modal6) {
    modal6.close();
  }
};