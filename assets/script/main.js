"use strict";

class Game {
	amount;
}

class Card {

	name;
	url;
	status = 'close';

}

let amount = document.querySelector('#amount').value;

let cards = [];

for (let i = 0; i < amount; i++) {
	cards.push(new Card);
}

function randomInteger(min, max) {
	let rand = Math.random() * (max + 1 - min) + min;
	return Math.floor(rand);
}

function ranNumTwoRepeat(arr, amount, key) {
	let max = amount / 2;
	let ranNum;
	ranNum = randomInteger(1, max);

	for ( let i = 0; i < amount; i++ ) {
		if ( arr[i][key] === ranNum ) {
			for (let j = 0; j < amount; j++) {
				if (arr[j][key] === ranNum && i !== j) {
					return ranNumTwoRepeat(arr, amount, key);
				}
			}
			return  ranNum;
		}
	}
	return ranNum;
}

cards.forEach(function (e) {
	e.name = ranNumTwoRepeat(cards, amount, 'name');
	e.url = `assets/img/card-${e.name}`;
})

console.log(cards);


