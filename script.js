// tema escuro
let body = document.body;
let bntTema = document.querySelector('.logo-darkmode');

bntTema.addEventListener('click', () => {
  body.classList.toggle('darkmode');

  if (body.classList.contains('darkmode')) {
    bntTema.textContent = '🌙';
  } else {
    bntTema.textContent = '😎';
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

// tradução do site para inglês
const tradução = {
  pt: {
    'enter-title': 'Ciência e Tecnologia',
    'enter-description': 'Inovação, descoberto, e o futuro da humanidade',
    'area-title': 'Áreas da Pesquisa',
    'area-description': 'Esses são os campos mais inovadores da ciência e tecnologia que estão moldando o futuro da humanidade',
    'area2-title': 'Inteligência Artificial',
    'area2-description': 'A Inteligência Artificial é o nosso "cérebro" digital. Ela é a tecnologia transversal que impulsiona a inovação em todas as nossas outras áreas.',
    'area3-title': 'Piscicultura',
    'area3-description': 'A produção de proteína aquática é vital para a segurança alimentar global. No entanto, ela precisa ser sustentável. Nossa pesquisa em Piscicultura (ou Aquacultura Inteligente) usa a tecnologia para:',
    'area4-title': 'Agricultura',
    'area4-description': 'Esqueça a ideia de agricultura como algo "analógico". Nossa pesquisa foca na Agricultura de Precisão (ou Agricultura 4.0), onde a tecnologia e a terra andam juntas. Ao aplicar IA, sensores e drones, buscamos:',
    'card-title': 'Inteligência Artificial',
    'card-description': 'Os modelos de linguagem estão evoluindo de "chatbots" para "agentes" proativos. A grande descoberta recente não é apenas a capacidade de entender texto, mas de processar e gerar múltiplos formatos (vídeo, áudio e código) simultaneamente.',
    'card2-title': 'Piscicultura',
    'card2-description': 'A vanguarda da piscicultura está em duas frentes: Primeiro, a "piscicultura celular", onde filés de peixe reais são cultivados em laboratório a partir de células, eliminando a necessidade de criação e abate.',
    'card3-title': 'Agricultura',
    'card3-description': 'A Agricultura de Precisão evoluiu. A descoberta mais recente é a "fenotipagem digital". Drones e robôs autônomos equipados com sensores hiperespectrais varrem o campo, analisando não apenas a fazenda, mas cada planta individualmente.',
  },
  en: {
    'enter-title': 'Science and Tecnology',
    'enter-description': 'Inovation, discover, and the future of the humanity',
    'area-title': 'Search Area',
    'area-description': 'This are the most search areas of the science and tecnology are becoming the future of the humanity',
    'area2-title': 'Artificial Inteligence',
    'area2-description': 'The artificial inteligence is our digital brain. She is the transversal tecnology, who inovate in all the new areas',
    'area3-title': 'Aquaculture',
    'area3-description': 'Aquatic protein production is vital for global food security. However, it needs to be sustainable. Our research in Fish Farming (or Smart Aquaculture) uses technology to:',
    'area4-title': 'Agriculture',
    'area4-description': 'Forget the idea of ​​agriculture as something "analog." Our research focuses on precision Agriculture (or Agriculture 4.0), where technology and the land go hand in hand. By applying AI, sensors, and drones, we seek to:',
    'card-title': 'Artificial Intelligence',
    'card-description': 'The Rise of AI Agents and Multimodal Generation Language. The major recent breakthrough is not just the ability to understand text, but to process and generate multiple formats (video, audio, and code) simultaneously.',
    'card2-title': 'Aquaculture',
    'card2-description': 'The cutting edge of aquaculture is on two fronts: First, "cellular aquaculture," where real fish fillets are grown in a lab from cells, eliminating the need for farming and slaughter. Second, the use of CRISPR (gene editing) to create disease-resistant fish.',
    'card3-title': 'Agriculture',
    'card3-description': 'Precision Agriculture has evolved. The latest discovery is "digital phenotyping." Drones and autonomous robots equipped with hyperspectral sensors scan the field, analyzing not just the farm, but each individual plant.',
  },
  es: {
    'enter-title': 'Ciencia y tecnología',
    'enter-description': 'Innovación, descubrimiento y el futuro de la humanidad',
    'area-title': 'Áreas de investigación',
    'area-description': 'Estos son los campos más innovadores de la ciencia y la tecnología que están dando forma al futuro de la humanidad.',
    'area2-title': 'Inteligencia artificial',
    'area2-description': 'La inteligencia artificial es nuestro «cerebro» digital. Es la tecnología transversal que impulsa la innovación en todas nuestras demás áreas.',
    'area3-title': 'Piscicultura',
    'area3-description': 'La producción de proteínas acuáticas es vital para la seguridad alimentaria mundial. Sin embargo, debe ser sostenible. Nuestra investigación en piscicultura (o acuicultura inteligente) utiliza la tecnología para:',
    'area4-title': 'Agricultura',
    'area4-description': 'Olvídese de la idea de la agricultura como algo «analógico». Nuestra investigación se centra en la agricultura de precisión (o agricultura 4.0), donde la tecnología y la tierra van de la mano. Al aplicar la IA, los sensores y los drones, buscamos:',
    'card-title': 'Inteligencia artificial',
    'card-description': 'Los modelos de lenguaje están evolucionando de «chatbots» a «agentes» proactivos. El gran descubrimiento reciente no es solo la capacidad de comprender texto, sino de procesar y generar múltiples formatos (vídeo, audio y código) simultáneamente.',
    'card2-title': 'Piscicultura',
    'card2-description': 'La vanguardia de la piscicultura se encuentra en dos frentes: en primer lugar, la «piscicultura celular», en la que se cultivan filetes de pescado reales en laboratorio a partir de células, lo que elimina la necesidad de criarlos y sacrificarlos.',
    'card3-title': 'Agricultura',
    'card3-description': 'La agricultura de precisión ha evolucionado. El descubrimiento más reciente es el «fenotipado digital». Drones y robots autónomos equipados con sensores hiperespectrales escanean el campo, analizando no solo la granja, sino cada planta individualmente.',
  }
}

let linguaAtual = 'pt';

function changeLanguage(lingua) {
  linguaAtual = lingua;

  // Atualiza os botões ativos
  document.querySelectorAll('.language-selector button').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById(`btn-${lingua}`).classList.add('active');

  // Atualiza todos os elementos com data-translate
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (tradução[lingua][key]) {
      element.textContent = tradução[lingua][key];
    }
  });
}