"use strict";

class Card {

	status = 'close';

	testMethod(e) {
		console.log(e);
	}
}

let testCard = new Card();

testCard.testMethod(testCard.status);
