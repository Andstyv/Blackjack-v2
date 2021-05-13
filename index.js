let cardsEl = document.getElementById("cards-el");
let dealerEl = document.getElementById("dealer-el");
let shownCard1 = document.getElementById("card-img1");
let shownCard2 = document.getElementById("card-img2");
let shownCard3 = document.getElementById("card-img3");
let sumCards = document.getElementById("sum-el");
let sumDealer = document.getElementById("sum-dealer");
let gameMessage = document.getElementById("game-message");
let startButton = document.getElementById("startBtn");
let isAlive = false;

let deck = [
  { index: 2, value: 2, name: 2 },
  { index: 3, value: 3, name: 3 },
  { index: 4, value: 4, name: 4 },
  { index: 5, value: 5, name: 5 },
  { index: 6, value: 6, name: 6 },
  { index: 7, value: 7, name: 7 },
  { index: 8, value: 8, name: 8 },
  { index: 9, value: 9, name: 9 },
  { index: 10, value: 10, name: 10 },
  { index: 11, value: 10, name: "J" },
  { index: 12, value: 10, name: "Q" },
  { index: 13, value: 10, name: "K" },
  { index: 14, value: 11, name: "A" },
];

let suits = ["hearts", "diams", "clubs", "spades"];

let playerHand;
let newCardHand;
let sumHand = 0;
let newSum = 0;
let values = 0;

function drawRandom(deck) {
  let randomIndex = Math.floor(deck.length * Math.random());
  return deck[randomIndex];
}

function startGame() {
  isAlive = true;
  sumHand = 0;
  newSum = 0;
  sumDealerHand = 0;
  document.querySelector(".player-cards").innerHTML = "";
  document.querySelector(".dealer-cards").innerHTML = "";
  cardsEl.textContent = "Your cards: ";
  dealerEl.textContent = "Dealer's cards: ";
  sumCards.textContent = "Sum: ";
  sumDealer.textContent = "Sum: ";
  startButton.textContent = "New Game";
  gameMessage.textContent = "";
  playerHand = [drawRandom(deck), drawRandom(deck)];
  playerSuit = [drawRandom(suits), drawRandom(suits)];

  for (let i = 0; i < playerHand.length; i++) {
    sumHand += playerHand[i].value;
    document.querySelector(".player-cards").innerHTML += `<div id="card-img1" style="background-image: url(img/${playerSuit[i]}/${playerHand[i].name}.png)">TEST</div>`;
  }

  sumCards.textContent = `Sum: ${sumHand}`;

  console.log(sumHand);
  console.log(newSum);
  if (sumHand === 21) {
    gameMessage.textContent = "BLACKJACK";
    dealerEl.textContent = "";
    sumDealer.textContent = "";

    isAlive = false;
  } else {
    renderGame();
  }
}

function renderGame() {
  if (newSum <= 21) {
    isAlive = true;
    //   } else if (playerHand[0].value === 11 || playerHand[1].value === 11 || playerHand[2].value === 11 || playerHand[3].value === 11) {
    //     console.log("SECOND CHANCE");
    //     newSum = newSum - 10;
    //     sumCards.textContent = `Sum: ${newSum}`;
    //     renderGame();
  } else {
    gameMessage.textContent = "BUST";
    isAlive = false;
  }
}

function drawNewCard() {
  if (isAlive) {
    newCardHand = [drawRandom(deck)];
    newSuitHand = [drawRandom(suits)];
    playerHand.push(newCardHand[0]);
    playerSuit.push(newSuitHand[0]);
    document.querySelector(".player-cards").innerHTML += `<div id="card-img1" style="background-image: url(img/${newSuitHand[0]}/${newCardHand[0].name}.png)">${newCardHand[0].value}</div>`;
    sumCards.textContent = `Sum: ${sumHand}`;

    newSum = sumHand += newCardHand[0].value;
    sumCards.textContent = `Sum: ${newSum}`;
    renderGame();
  } else {
    isAlive = false;
  }
}

let dealerHand;
let dealerSuit;
let sumDealerHand = 0;

function showDealer() {
  if (isAlive) {
    document.querySelector(".dealer-cards").innerHTML = "";
    dealerHand = [drawRandom(deck), drawRandom(deck)];
    dealerSuit = [drawRandom(suits), drawRandom(suits)];
    if (dealerHand[0].value + dealerHand[1].value < 17) {
      newDealerCard = [drawRandom(deck)];
      newDealerSuit = [drawRandom(suits)];
      dealerHand.push(newDealerCard[0]);
      dealerSuit.push(newDealerSuit[0]);
      for (let i = 0; i < dealerHand.length; i++) {
        sumDealerHand += dealerHand[i].value;
        document.querySelector(".dealer-cards").innerHTML += `<div id="card-img1" style="background-image: url(img/${dealerSuit[i]}/${dealerHand[i].name}.png)"></div>`;
      }
      sumDealer.textContent = `Sum: ${sumDealerHand}`;
    } else {
      for (let i = 0; i < dealerHand.length; i++) {
        sumDealerHand += dealerHand[i].value;
        document.querySelector(".dealer-cards").innerHTML += `<div id="card-img1" style="background-image: url(img/${dealerSuit[i]}/${dealerHand[i].name}.png)"></div>`;
      }
      sumDealer.textContent = `Sum: ${sumDealerHand}`;
    }
    if (sumDealerHand >= sumHand && sumDealerHand <= 21) {
      gameMessage.textContent = "HOUSE WINS";
      isAlive = false;
    } else {
      gameMessage.textContent = "PLAYER WINS";
      isAlive = false;
    }
  }
}
