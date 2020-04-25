"use strict";

class Card {

	value;
	url;
	status = 'close';

}

class Game {
	amountHtml = document.querySelector('#amount');
	amount = document.querySelector('#amount').value;
	cards = [];

	/*constructor() {
		this.initializeEvents();
	}*/

	getRandomInteger(min, max) {
		let rand = Math.random() * (max + 1 - min) + min;
		return Math.floor(rand);
	}

	getRandomNumberCard(arr, amount, key) {
		let max = amount / 2;
		let ranNum;
		ranNum = this.getRandomInteger(1, max);

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

	createCards() {
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
		let field = document.querySelector('#field');

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

			field.append(cardHtml);
		})
	}

	startGame() {
		this.createCards();
		this.addNameUrlCards();
		this.addHtmlCards();
		console.log(this);
	}

	/*initializeEvents() {
		this.amountHtml.addEventListener('change', () => {
			console.log('test');
		})
	}*/
}

let newGame = new Game;
newGame.startGame();
