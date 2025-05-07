interface CardData {
  title: string;
  description: string;
  image: string;
}

let cards: CardData[] = [];

function createCardTemplate({ title, description, image }: CardData): string {
  return `
    <div class="card">
      <h3 class="card__title">${title}</h3>
      <p class="card__description">${description}</p>
      <img src="${image}" alt="${title}" class="card__image">
    </div>
  `;
}

function displayCard(cardData: CardData): void {
  const cardDisplay = document.querySelector('.info__card-display') as HTMLElement;
  if (!cardDisplay) return;
  cardDisplay.innerHTML = createCardTemplate(cardData);
}

function handleFeatureClicks(): void {
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

function initCards(): void {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    .then(response => response.json())
    .then((json: any[]) => {
      cards = json.map((item): CardData => ({
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
