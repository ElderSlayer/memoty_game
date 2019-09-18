"use strict";

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