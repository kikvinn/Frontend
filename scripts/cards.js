
const cards = {
  card1: {
    img: "../images/news_card/mcuin.jpg",
    title: "Макуин разбился на повороте",
    description: "Макуин разбился на 100 повороте и тем самым выбыл из гонки"
  },
  card2: {
    img: "../images/news_card/GuidoCars3.jpg",
    title: "Гуидо стал топовым автомехаником",
    description: "Гуидо стал самым быстрым и умелым автомехаником по версии журнал Top Gear"
  },
  card3: {
    img: "../images/news_card/ChickHicksCars3.jpg",
    title: "Чико Хикс стал ведром",
    description: "Когда-то победитель кубка поршня стал ржаветь и превратился в настоящее ведро с болтами"
  },
  card4: {
    img: "../images/news_card/uaz.jpg",
    title: "Буханка запрещена к производству",
    description: "ДОСАВТО запретил производство буханки в связи с проблемами безопасности"
  },
  card5: {
    img: "../images/news_card/mcuin_yellow.jpg",
    title: "Макуин нашел себе ученика",
    description: "После того как Макуин разбился и реабелитировался он нашел себе ученика"
  },
}

function createCardTemplate(cardData) {
  return `
    <div class="news__item">
      <img class="news__image" src="${cardData.img}" alt="${cardData.title}" />
      <a class="news__item-link" href="">${cardData.title}</a>
      <p class="news__text">${cardData.description}</p>
    </div>
  `;
}

export function renderCards(containerSelector) {
  const container = document.querySelector(containerSelector);


  const cardsArray = Object.entries(cards).map(([key, value]) => ({
    id: key,
    ...value
  }));


  console.log('Container element:', container); // ← Проверьте что элемент существует
  // ...остальной код

  container.innerHTML = cardsArray
    .map(card => createCardTemplate(card))
    .join('');
}