"use strict";
//random block

function randomInteger(min, max) {
    let rand = Math.random() * (max + 1 - min) + min;
    return Math.floor(rand);
}

function ranNumTwoRepeat(arr, amount) {
    let max = amount / 2;
    let ranNum;
    ranNum = randomInteger(1, max);

    for ( let i = 0; i < amount; i++ ) {
        if ( arr[i] === ranNum ) {
            for (let j = 0; j < amount; j++) {
                if (arr[j] === ranNum && i !== j) {
                    return ranNumTwoRepeat(arr, amount);
                }
            }
            return  ranNum;
        }
    }
    return ranNum;
}

function addImgCard (amount) {
    let ranNumArr = [];

    for ( let j = 0; j < amount; j++) {
        ranNumArr[j] = ranNumTwoRepeat(ranNumArr, amount);
    }

    for ( let i = 0; i < 24; i++) {
        document.getElementsByClassName('card')[i].style.display = "none";
    }

    for ( let i = 0; i < amount; i++ ) {
        let src;
        src = "assets/img/card-" + ranNumArr[i] + ".png";
        document.getElementsByClassName('card__img')[i].src = src;
        document.getElementsByClassName('card')[i].style.display = "block";
        document.getElementsByClassName('cardback')[i].style.display = "block";
    }
}

let amount = document.getElementById('amount').value;
addImgCard(amount);

document.getElementById('amount').onchange = function () {

    let amount = document.getElementById('amount').value;
    addImgCard(amount);
};

document.getElementById('refresh').onclick = function () {
    let amount = document.getElementById('amount').value;
    addImgCard(amount);
}

debugger;

//clock block

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

let countClick = 0;
let imgOne;
let imgTwo;
let numSelectorOne;
let numSelectorTwo;

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
clickCard (12);
clickCard (13);
clickCard (14);
clickCard (15);
clickCard (16);
clickCard (17);
clickCard (18);
clickCard (19);
clickCard (20);
clickCard (21);
clickCard (22);
clickCard (23);