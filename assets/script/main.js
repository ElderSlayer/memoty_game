"use strict";

class Card {
	value;
	url;
	status = 'close';
	cardHtml;

	openCard() {
		this.status = 'open';
		this.cardHtml.classList.add('card--open');
	}

	closeCard() {
		this.status = 'close';
		this.cardHtml.classList.remove('card--open');
	}

	doneCard() {
		this.status = 'done';
		this.cardHtml.classList.remove('card--open');
		this.cardHtml.classList.add('card--done');
	}
}

class Game {
	refresh = document.querySelector('#refresh');
	amountSelector = document.querySelector('#amount');
	field = document.querySelector('#field');
	amount;
	cards = [];

	constructor() {
		this.startGame();
	}

	getRandomInteger(min, max) {
		let rand = Math.random() * (max + 1 - min) + min;

		return Math.floor(rand);
	}

	getRandomNumberCard(arr, amount, key) {
		let max = amount / 2;
		let ranNum = this.getRandomInteger(1, max);

		for ( let i = 0; i < amount; i++ ) {
			if ( arr[i][key] === ranNum ) {
				for (let j = 0; j < amount; j++) {
					if (arr[j][key] === ranNum && i !== j) {
						return this.getRandomNumberCard(arr, amount, key);
					}
				}
				return  ranNum;
			}
		}
		return ranNum;
	}

	init() {
		this.field.innerHTML = '';
		this.amount = document.querySelector('#amount').value;
	}

	createCards() {
		this.cards.splice(0, this.cards.length);

		for (let i = 0; i < this.amount; i++) {
			this.cards.push(new Card);
		}
	}

	addNameUrlCards() {
		this.cards.forEach( (e)=> {
			e.value = this.getRandomNumberCard(this.cards, this.amount, 'value');
			e.url = `assets/img/card-${e.value}.png`;
		})
	}

	addHtmlCards() {
		this.cards.forEach( (e)=> {
			let cardHtml = document.createElement('div');
			let imgCardBackHtml = document.createElement('img');
			let imgCardMainHtml = document.createElement('img');

			imgCardBackHtml.src = 'assets/img/card-back.png';
			imgCardBackHtml.className = 'card__back';

			imgCardMainHtml.src = e.url;
			imgCardMainHtml.className = 'card__img';

			cardHtml.className = 'card';
			cardHtml.append(imgCardBackHtml, imgCardMainHtml);

			e.cardHtml = cardHtml;

			this.field.append(cardHtml);
		})
	}

	startGame() {
		this.init();
		this.createCards();
		this.addNameUrlCards();
		this.addHtmlCards();
		this.initializeEvents();
		console.log(this);
	}

	initializeEvents() {
		this.refresh.addEventListener('click', () => {
			this.startGame();
		})

		this.amountSelector.addEventListener('change', () => {
			this.startGame();
		})

		this.cards.forEach( (e) => {
			e.cardHtml.addEventListener('click', () => {
				if (e.status === 'open') {
					return;
				}

				let openCards = [];

				this.cards.forEach( (e) => {
					if (e.status === 'open') {
						openCards.push(e);
					}
				})

				switch (openCards.length) {
					case 0:
						e.openCard();

						openCards.push(e);

						break;
					case 1:
						e.openCard();

						openCards.push(e);

						if (openCards[0].value === openCards[1].value) {
							this.cards.forEach((e) => {
								if (e.value === openCards[0].value) {
									setTimeout(() => {
										e.doneCard();
									}, 400)

								}
							})
						}

						break;
					case 2:
						this.cards.forEach( (e) => {
							if (e.status === 'open') {
								e.closeCard();
								return;
							}
						})

						e.openCard();

						break;
				}
			})
		})
	}
}

let newGame = new Game;
