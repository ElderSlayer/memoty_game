"use strict";
//random block

function randomInteger(min, max) {
    let rand = Math.random() * (max + 1 - min) + min;
    return Math.floor(rand);
}

function ranNumNoRepeat(arr) {
    let ranNum;
    ranNum = randomInteger(1, 6);
    for ( let i = 0; i < 12; i++ ) {
        if ( arr[i] === ranNum ) {
            for (let j = 0; j < 12; j++) {
                if (arr[j] === ranNum && i !== j) {
                    return ranNumNoRepeat(arr);
                }
            }
            return  ranNum;
        }
    }
    return ranNum;
}

let ranNumArr = [];

for ( let j = 0; j < 12; j++) {
    ranNumArr[j] = ranNumNoRepeat(ranNumArr);
}

for ( let i = 0; i < 12; i++ ) {
    let src;
    src = "assets/img/card-" + ranNumArr[i] + ".png";
    document.getElementsByClassName('card__img')[i].src = src;
}

//clock block

let countClick = 0;
let imgOne;
let imgTwo;
let numSelectorOne;
let numSelectorTwo;

function delBlock (numSelectorOne, numSelectorTwo) {
    document.getElementsByClassName('card')[numSelectorOne].style.display = "none";
    document.getElementsByClassName('card')[numSelectorTwo].style.display = "none";
}

function clickCard (numSelector) {
    document.getElementsByClassName('card')[numSelector].onclick = function () {
    if (countClick === 0) {
        countClick++;

        let cardback = document.getElementsByClassName('cardback')[numSelector];

        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[numSelector].src;
        numSelectorOne = numSelector;
    } else if ( countClick === 1) {
        countClick++;

        let cardback = document.getElementsByClassName('cardback')[numSelector];

        cardback.style.display = "none";
        imgTwo = document.getElementsByClassName('card__img')[numSelector].src;
        numSelectorTwo = numSelector;

        if (imgOne === imgTwo && numSelectorOne !== numSelectorTwo) {
            setTimeout ( delBlock, 400, numSelectorOne, numSelectorTwo);
        }

        if (numSelectorOne === numSelectorTwo) {
            countClick = 1;
        }
    } else {
        if (document.getElementsByClassName('cardback')[numSelector].style.display === "none") {
            return 0;
        }

        countClick = 0;
        countClick++;

        document.getElementsByClassName('cardback')[numSelectorOne].style.display = "block";
        document.getElementsByClassName('cardback')[numSelectorTwo].style.display = "block";

        let cardback = document.getElementsByClassName('cardback')[numSelector];

        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[numSelector].src;
        numSelectorOne = numSelector;
    }
    };
}
clickCard (0);
clickCard (1);
clickCard (2);
clickCard (3);
clickCard (4);
clickCard (5);
clickCard (6);
clickCard (7);
clickCard (8);
clickCard (9);
clickCard (10);
clickCard (11);