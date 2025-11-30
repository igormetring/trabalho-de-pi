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
    'title': 'Ciência e Tecnologia',
    'inicio': 'Inicio',
    'noticia': 'Noticias',
    'lang': 'Português (BR)',
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
    'dialog-title1': 'Inteligência Artificial: O Cérebro Digital da Inovação',
    'dialog-desc1': 'A Inteligência Artificial é mais do que apenas código; é a capacidade de aprender, adaptar e decidir. Em nossa pesquisa, tratamos a IA como a tecnologia transversal que impulsiona todas as outras. Desde a criação de algoritmos preditivos até a automação de sistemas complexos, exploramos como o machine learning e o deep learning estão moldando um futuro mais eficiente e inteligente.',
    'dialog-title2': 'Piscicultura',
    'dialog-desc2': 'A produção de proteína aquática é um pilar para a segurança alimenta global, mas enfrenta desafios de sustentabilidade. Nossa pesquisa foca na "Aquacultura 4.0", um campo que une biologia e tecnologia. Usamos sensores IoT para monitorar a qualidade da água em tempo real, IA para otimizar a alimentação e biotecnologia para garantir a saúde dos peixes, criando um sistema mais produtivo e ecológico.',
    'dialog-title3': 'Agricultura',
    'dialog-desc3': 'A agricultura moderna não é mais analógica. Nossa pesquisa foca na Agricultura de Precisão (ou AgTech), onde dados são a semente mais importante. Ao aplicar IA, sensores de solo, e drones para mapeamento aéreo, transformamos a tomada de decisão no campo. O objetivo é claro: maximizar a produtividade, otimizar o uso de recursos (água e fertilizantes) e garantir uma produção de alimentos sustentável para o planeta.',
    'dialog-title4': 'Inteligência Artificial',
    'dialog-desc4': 'A IA está sendo cada vez mais aplicada para resolver desafios ambientais complexos. No Brasil, por exemplo, iniciativas recentes (anunciadas em eventos como a COP30) destacam o uso de algoritmos de deep learning e análise de imagens de satélite para monitorar o desmatamento na Amazônia em tempo quase real. Esses sistemas conseguem identificar atividades ilegais, como extração de madeira e mineração, com uma precisão muito maior, permitindo que as autoridades ajam de forma mais rápida e eficaz na proteção dos biomas. 2025 foi o ano em que a IA multimodal (que entende e processa vários tipos de informação) realmente amadureceu. Modelos como o Llama 4, da Meta, conseguem processar e integrar de forma fluida texto, imagens, vídeo e áudio ao mesmo tempo, tornando a interação mais natural.',
    'dialog-title5': 'Piscicultura',
    'dialog-desc5': 'A tendência dominante na piscicultura moderna é a "Aquacultura de Precisão". Tecnologias de IA e Internet das Coisas (IoT) estão revolucionando o setor. Sensores avançados agora monitoram a qualidade da água (níveis de oxigênio, pH, amônia) 24/7, enquanto câmeras subaquáticas usam visão computacional para rastrear o crescimento, a saúde e o comportamento alimentar dos peixes. Isso permite a automação da alimentação, reduzindo o desperdício de ração e melhorando a taxa de conversão alimentar, tornando a produção mais sustentável e lucrativa.',
    'dialog-title6': 'Agricultura',
    'dialog-desc6': 'Na agricultura, a grande notícia é a consolidação da "Automação Inteligente". Tratores e colheitadeiras autônomos equipados com GPS de alta precisão e IA estão se tornando mais comuns. Além disso, o uso de "gêmeos digitais" (digital twins) de fazendas está crescendo. Agricultores podem simular o impacto de diferentes estratégias de plantio, irrigação ou fertilização em um modelo virtual antes de aplicá-las no campo. Isso, combinado com drones que usam IA para identificar pragas e estresse hídrico em plantas individuais, está levando a eficiência no uso de recursos a um novo patamar.',
    'footer': '© 2025 - Todos os direitos reservados'
  },
  en: {
    'title': 'Science and Tecnology',
    'inicio': 'Beginning',
    'noticia': 'News',
    'lang': 'English (EN)',
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
    'dialog-title1': 'Artificial Intelligence: The Digital Brain of Innovation',
    'dialog-desc1': 'Artificial Intelligence is more than just code; it is the ability to learn, adapt, and decide. In our research, we treat AI as the transversal technology that drives all others. From creating predictive algorithms to automating complex systems, we explore how machine learning and deep learning are shaping a more efficient and intelligent future.',
    'dialog-title2': 'Smart Aquaculture',
    'dialog-desc2': 'Aquatic protein production is a pillar for global food security, but it faces sustainability challenges. Our research focuses on "Aquaculture 4.0," a field that merges biology and technology. We use IoT sensors to monitor water quality in real-time, AI to optimize feeding, and biotechnology to ensure fish health, creating a more productive and ecological system.',
    'dialog-title3': 'Precision Agriculture',
    'dialog-desc3': 'Modern agriculture is no longer analog. Our research focuses on Precision Agriculture (or AgTech), where data is the most important seed. By applying AI, soil sensors, and drones for aerial mapping, we transform decision-making in the field. The goal is clear: to maximize productivity, optimize the use of resources (water and fertilizers), and ensure sustainable food production for the planet.',
    'dialog-title4': 'The Rise of AI Agents',
    'dialog-desc4': 'Language models are evolving from "chatbots" to proactive "agents." The major recent breakthrough is not just the ability to understand text, but to process and generate multiple formats (video, audio, and code) simultaneously. This allows AI to analyze a live broadcast, hold a real-time spoken conversation without lag, and even begin executing complex tasks autonomously, such as scheduling meetings or debugging software.',
    'dialog-title5': 'Cellular Aquaculture',
    'dialog-desc5': 'The cutting edge of aquaculture is on two fronts: First, "cellular aquaculture," where real fish fillets are grown in a lab from cells, eliminating the need for farming and slaughter. Second, the use of CRISPR (gene editing) to create disease-resistant fish, such as salmon that are immune to sea lice. Both discoveries aim to increase sustainability and food security.',
    'dialog-title6': 'High-Throughput Phenotyping with AI',
    'dialog-desc6': 'Precision Agriculture has evolved. The latest discovery is "digital phenotyping." Drones and autonomous robots equipped with hyperspectral sensors scan the field, analyzing not just the farm, but each individual plant. AI processes this data to create a "digital twin" of the crop, predicting diseases days before they are visible and identifying the plants with the highest genetic potential.',
    'footer': '© 2025 - All the rights reserved.',
  },
}

let linguaAtual = 'pt';

function changeLanguage(lingua) {
  linguaAtual = linguaAtual === 'pt' ? 'en' : 'pt';
  updateLanguage();
}

function updateLanguage() {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (tradução[linguaAtual][key]) {
      element.textContent = tradução[linguaAtual][key];
    }
  });

  document.documentElement.lang = linguaAtual === 'pt' ? 'pt-BR' : 'en-US';
}

//scrool suave
function smoothScroll(target) {
  const element = document.querySelector(target);

  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset;

  // Verifica se o navegador suporta scroll suave nativo
  if ('scrollBehavior' in document.documentElement.style) {
    // Navegadores modernos
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } else {
    // Fallback para navegadores antigos - animação manual
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = 800; // Duração em milissegundos
    let start = null;

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Função de easing para suavizar a animação
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        smoothScroll(href);
      }
    });
  });
});