let cards = [];
function createCardTemplate({ title, description, image }) {
    return `
    <div class="card">
      <h3 class="card__title">${title}</h3>
      <p class="card__description">${description}</p>
      <img src="${image}" alt="${title}" class="card__image">
    </div>
  `;
}
function displayCard(cardData) {
    const cardDisplay = document.querySelector('.info__card-display');
    if (!cardDisplay)
        return;
    cardDisplay.innerHTML = createCardTemplate(cardData);
}
function handleFeatureClicks() {
    const features = document.querySelectorAll('.info__feature');
    features.forEach((feature, index) => {
        feature.addEventListener('click', () => {
            features.forEach(f => f.classList.remove('info__feature--active'));
            feature.classList.add('info__feature--active');
            if (cards[index]) {
                displayCard(cards[index]);
            }
        });
    });
}
function initCards() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
        .then(response => response.json())
        .then((json) => {
        cards = json.map((item) => ({
            title: item.title,
            description: item.body,
            image: "img/info-image.png"
        }));
        if (cards.length > 0) {
            displayCard(cards[0]);
            const features = document.querySelectorAll('.info__feature');
            if (features.length > 0) {
                features[0].classList.add('info__feature--active');
            }
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    handleFeatureClicks();
    initCards();
});
//# sourceMappingURL=main.js.map