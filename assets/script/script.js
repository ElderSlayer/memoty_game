"use strict";

let countClick = 0;
let imgOne;
let imgTwo;
let numSelectorOne;
let numSelectorTwo;

function delBlock (numOne, numTwo) {
    document.getElementsByClassName('card')[numOne].style.display = "none";
    document.getElementsByClassName('card')[numTwo].style.display = "none";
}

document.getElementsByClassName('card')[0].onclick = function click () {
    if (countClick === 0) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[0];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[0].src;
        numSelectorOne = 0;
        return imgOne;
    } else if ( countClick === 1) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[0];
        cardback.style.display = "none";
        imgTwo = document.getElementsByClassName('card__img')[0].src;
        numSelectorTwo = 0;
        if (imgOne === imgTwo) {
            setTimeout ( delBlock, 400, numSelectorOne, numSelectorTwo);
        }
    } else {
        countClick = 0;
        countClick++;
        for ( let i =0; i < 12; i++) {
            document.getElementsByClassName('cardback')[i].style.display = "block";
        }
        let cardback = document.getElementsByClassName('cardback')[0];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[0].src;
        numSelectorOne = 0;
        return imgOne;
    }
};
document.getElementsByClassName('card')[1].onclick = function click () {
    if (countClick === 0) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[1];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[1].src;
        numSelectorOne = 1;
        return imgOne;
    } else if ( countClick === 1) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[1];
        cardback.style.display = "none";
        imgTwo = document.getElementsByClassName('card__img')[1].src;
        numSelectorTwo = 1;
        if (imgOne === imgTwo) {
            setTimeout ( delBlock, 400, numSelectorOne, numSelectorTwo);
        }
    } else {
        countClick = 0;
        countClick++;
        for ( let i =0; i < 12; i++) {
            document.getElementsByClassName('cardback')[i].style.display = "block";
        }
        let cardback = document.getElementsByClassName('cardback')[1];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[1].src;
        numSelectorOne = 2;
        return imgOne;
    }
};
document.getElementsByClassName('card')[2].onclick = function click () {
    if (countClick === 0) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[2];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[2].src;
        numSelectorOne = 2;
        return imgOne;
    } else if ( countClick === 1) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[2];
        cardback.style.display = "none";
        imgTwo = document.getElementsByClassName('card__img')[2].src;
        numSelectorTwo = 2;
        if (imgOne === imgTwo) {
            setTimeout ( delBlock, 400, numSelectorOne, numSelectorTwo);
        }
    } else {
        countClick = 0;
        countClick++;
        for ( let i =0; i < 12; i++) {
            document.getElementsByClassName('cardback')[i].style.display = "block";
        }
        let cardback = document.getElementsByClassName('cardback')[2];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[2].src;
        numSelectorOne = 2;
        return imgOne;
    }
};
document.getElementsByClassName('card')[3].onclick = function click () {
    if (countClick === 0) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[3];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[3].src;
        numSelectorOne = 3;
        return imgOne;
    } else if ( countClick === 1) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[3];
        cardback.style.display = "none";
        imgTwo = document.getElementsByClassName('card__img')[3].src;
        numSelectorTwo = 3;
        if (imgOne === imgTwo) {
            setTimeout ( delBlock, 400, numSelectorOne, numSelectorTwo);
        }
    } else {
        countClick = 0;
        countClick++;
        for ( let i =0; i < 12; i++) {
            document.getElementsByClassName('cardback')[i].style.display = "block";
        }
        let cardback = document.getElementsByClassName('cardback')[3];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[3].src;
        numSelectorOne = 3;
        return imgOne;
    }
};
document.getElementsByClassName('card')[4].onclick = function click () {
    if (countClick === 0) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[4];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[4].src;
        numSelectorOne = 4;
        return imgOne;
    } else if ( countClick === 1) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[4];
        cardback.style.display = "none";
        imgTwo = document.getElementsByClassName('card__img')[4].src;
        numSelectorTwo = 4;
        if (imgOne === imgTwo) {
            setTimeout ( delBlock, 400, numSelectorOne, numSelectorTwo);
        }
    } else {
        countClick = 0;
        countClick++;
        for ( let i =0; i < 12; i++) {
            document.getElementsByClassName('cardback')[i].style.display = "block";
        }
        let cardback = document.getElementsByClassName('cardback')[4];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[4].src;
        numSelectorOne = 4;
        return imgOne;
    }
};
document.getElementsByClassName('card')[5].onclick = function click () {
    if (countClick === 0) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[5];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[5].src;
        numSelectorOne = 5;
        return imgOne;
    } else if ( countClick === 1) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[5];
        cardback.style.display = "none";
        imgTwo = document.getElementsByClassName('card__img')[5].src;
        numSelectorTwo = 5;
        if (imgOne === imgTwo) {
            setTimeout ( delBlock, 400, numSelectorOne, numSelectorTwo);
        }
    } else {
        countClick = 0;
        countClick++;
        for ( let i =0; i < 12; i++) {
            document.getElementsByClassName('cardback')[i].style.display = "block";
        }
        let cardback = document.getElementsByClassName('cardback')[5];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[5].src;
        numSelectorOne = 5;
        return imgOne;
    }
};
document.getElementsByClassName('card')[6].onclick = function click () {
    if (countClick === 0) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[6];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[6].src;
        numSelectorOne = 6;
        return imgOne;
    } else if ( countClick === 1) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[6];
        cardback.style.display = "none";
        imgTwo = document.getElementsByClassName('card__img')[6].src;
        numSelectorTwo = 6;
        if (imgOne === imgTwo) {
            setTimeout ( delBlock, 400, numSelectorOne, numSelectorTwo);
        }
    } else {
        countClick = 0;
        countClick++;
        for ( let i =0; i < 12; i++) {
            document.getElementsByClassName('cardback')[i].style.display = "block";
        }
        let cardback = document.getElementsByClassName('cardback')[6];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[6].src;
        numSelectorOne = 6;
        return imgOne;
    }
};
document.getElementsByClassName('card')[7].onclick = function click () {
    if (countClick === 0) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[7];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[7].src;
        numSelectorOne = 7;
        return imgOne;
    } else if ( countClick === 1) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[7];
        cardback.style.display = "none";
        imgTwo = document.getElementsByClassName('card__img')[7].src;
        numSelectorTwo = 7;
        if (imgOne === imgTwo) {
            setTimeout ( delBlock, 400, numSelectorOne, numSelectorTwo);
        }
    } else {
        countClick = 0;
        countClick++;
        for ( let i =0; i < 12; i++) {
            document.getElementsByClassName('cardback')[i].style.display = "block";
        }
        let cardback = document.getElementsByClassName('cardback')[7];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[7].src;
        numSelectorOne = 7;
        return imgOne;
    }
};
document.getElementsByClassName('card')[8].onclick = function click () {
    if (countClick === 0) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[8];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[8].src;
        numSelectorOne = 8;
        return imgOne;
    } else if ( countClick === 1) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[8];
        cardback.style.display = "none";
        imgTwo = document.getElementsByClassName('card__img')[8].src;
        numSelectorTwo = 8;
        if (imgOne === imgTwo) {
            setTimeout ( delBlock, 400, numSelectorOne, numSelectorTwo);
        }
    } else {
        countClick = 0;
        countClick++;
        for ( let i =0; i < 12; i++) {
            document.getElementsByClassName('cardback')[i].style.display = "block";
        }
        let cardback = document.getElementsByClassName('cardback')[8];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[8].src;
        numSelectorOne = 8;
        return imgOne;
    }
};
document.getElementsByClassName('card')[9].onclick = function click () {
    if (countClick === 0) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[9];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[9].src;
        numSelectorOne = 9;
        return imgOne;
    } else if ( countClick === 1) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[9];
        cardback.style.display = "none";
        imgTwo = document.getElementsByClassName('card__img')[9].src;
        numSelectorTwo = 9;
        if (imgOne === imgTwo) {
            setTimeout ( delBlock, 400, numSelectorOne, numSelectorTwo);
        }
    } else {
        countClick = 0;
        countClick++;
        for ( let i =0; i < 12; i++) {
            document.getElementsByClassName('cardback')[i].style.display = "block";
        }
        let cardback = document.getElementsByClassName('cardback')[9];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[9].src;
        numSelectorOne = 9;
        return imgOne;
    }
};
document.getElementsByClassName('card')[10].onclick = function click () {
    if (countClick === 0) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[10];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[10].src;
        numSelectorOne = 10;
        return imgOne;
    } else if ( countClick === 1) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[10];
        cardback.style.display = "none";
        imgTwo = document.getElementsByClassName('card__img')[10].src;
        numSelectorTwo = 10;
        if (imgOne === imgTwo) {
            setTimeout ( delBlock, 400, numSelectorOne, numSelectorTwo);
        }
    } else {
        countClick = 0;
        countClick++;
        for ( let i =0; i < 12; i++) {
            document.getElementsByClassName('cardback')[i].style.display = "block";
        }
        let cardback = document.getElementsByClassName('cardback')[10];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[10].src;
        numSelectorOne = 10;
        return imgOne;
    }
};
document.getElementsByClassName('card')[11].onclick = function click () {
    if (countClick === 0) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[11];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[11].src;
        numSelectorOne = 11;
        return imgOne;
    } else if ( countClick === 1) {
        countClick++;
        let cardback = document.getElementsByClassName('cardback')[11];
        cardback.style.display = "none";
        imgTwo = document.getElementsByClassName('card__img')[11].src;
        numSelectorTwo =11;
        if (imgOne === imgTwo) {
            setTimeout ( delBlock, 400, numSelectorOne, numSelectorTwo);
        }
    } else {
        countClick = 0;
        countClick++;
        for ( let i =0; i < 12; i++) {
            document.getElementsByClassName('cardback')[i].style.display = "block";
        }
        let cardback = document.getElementsByClassName('cardback')[11];
        cardback.style.display = "none";
        imgOne = document.getElementsByClassName('card__img')[11].src;
        numSelectorOne = 11;
        return imgOne;
    }
};



