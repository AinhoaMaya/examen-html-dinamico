class Cards extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
    // this.text = this.getAttribute('text')
    // this.width = this.getAttribute('width')
    // this.height = this.getAttribute('height')
  }

  async connectedCallback() {
    await this.loadData();
    await this.render();
  }

  loadData() {
    // const response = await fetch('')
    this.data = [
      {
        title: "Gratis",
        price: "$0 /mes",
        list: [
          "10 usuarios incluidos",
          "2 GB de almacenamiento",
          "Soporte de correo electrónico",
          "Acceso al centro de ayuda"
        ],
        buttonText: "Registrate gratis",
      },
      {
        title: "Pro",
        price: "$15 /mes",
        list: [
          "20 usuarios incluidos",
          "10 GB de almacenamiento",
          "Soporte prioritario por correo electrónico",
          "Acceso al centro de ayuda"
        ],
        buttonText: "Empezar",
      },
      {
        title: "Empresa",
        price: "$29 /mes",
        list: [
          "30 usuarios incluidos",
          "15 GB de almacenamiento",
          "Soporte técnico y por correo electrónico",
          "Acceso al centro de ayuda"
        ],
        buttonText: "Contáctenos",
      }
    ]
  }

  render () {
    this.shadow.innerHTML =
      /* html */` 
      <style>
        .cards{
          display: flex;
          justify-content: center;
          gap: 2rem;
        }

        .card{
          display: flex;
          align-items: center;
          border-radius: 0.4rem;
          flex-direction: column;
          max-width: 18rem;
          border: 1px solid hsl(0, 1%, 63%);
        }

        .card-special{
          display: flex;
          align-items: center;
          border-radius: 0.4rem;
          flex-direction: column;
          max-width: 18rem;
          border: 1px solid hsl(204, 100%, 47%);
        }

        .card-title{
          background-color: hsl(240, 1%, 34%);
          max-height: 5rem;
          min-width: 18rem;
        }

        .card-title-special{
          background-color: hsl(204, 100%, 47%);
          max-height: 5rem;
          min-width: 18rem;
        }

        h2, span, li{
          color: hsl(0, 0%, 100%);
          font-family: "Lato", sans-serif;
          text-align: center;
        }

        .card-content{
          display: flex;
          align-items: center;
          flex-direction: column;
          padding-top: 2rem;
        }

        span{
          font-size: 2rem;
          font-weight: 700;
        }

        ul{
          list-style-type: none;
          padding: 0 1rem;
        }

        .card-button{
          display: flex;
          margin-top: auto;
          padding: 1.5rem 0;
        }

        .buttons{
          background-color: hsl(204, 100%, 47%);
          border: none;
          border-radius: 0.2rem;
          color: hsl(0, 0%, 100%);
          font-size: 14px;
          font-weight: 600;
          min-width: 15rem;
          outline: none;
          padding: 0.8rem 2.8rem;
          cursor: pointer;
        }

        .buttons:hover{
          background-color: transparent;
          border: 1px solid hsl(204, 100%, 47%);
          color: hsl(204, 100%, 47%);
        }
      </style>

      <div class="cards"></div>
    `
    const cards = this.shadow.querySelector('.cards');

    this.data.forEach((product, index) => {
      const card = document.createElement('div');
      cards.appendChild(card);
      card.classList.add('card');

      if (index === 2) {
        card.classList.add('card-special');
      }

      const cardTitleContainer = document.createElement('div');
      card.appendChild(cardTitleContainer);
      cardTitleContainer.classList.add('card-title');

      if (index === 2) {
        cardTitleContainer.classList.add('card-title-special');
      }

      const cardTitle = document.createElement('h2');
      cardTitleContainer.appendChild(cardTitle);
      cardTitle.textContent = product.title;

      const cardContent = document.createElement('div');
      card.appendChild(cardContent);
      cardContent.classList.add('card-content');

      const cardPrice = document.createElement('div');
      cardContent.appendChild(cardPrice);
      cardPrice.classList.add('card-price');

      const cardPriceSpan = document.createElement('span');
      cardContent.appendChild(cardPriceSpan);
      cardPriceSpan.textContent = product.price;

      const cardList = document.createElement('div');
      cardContent.appendChild(cardList);
      cardList.classList.add('card-list');

      const cardListUl = document.createElement('ul');
      cardList.appendChild(cardListUl);

      product.list.forEach(listItem => {
        const cardListLi = document.createElement('li');
        cardListUl.appendChild(cardListLi);
        cardListLi.textContent = listItem;
        cardListLi.classList.add('li');
      });

      const cardButtonContainer = document.createElement('div');
      card.appendChild(cardButtonContainer);
      cardButtonContainer.classList.add('card-button');

      const cardButton = document.createElement('button');
      cardButtonContainer.appendChild(cardButton);
      cardButton.textContent = product.buttonText;
      cardButton.classList.add('buttons');
    });
  }
}

customElements.define('cards-component', Cards)