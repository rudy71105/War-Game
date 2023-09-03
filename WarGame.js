// Define a Deck object constructor
function Deck() {
 this.cards = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13];
  //[1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13]
  this.shuffle = function() {
    var currentIndex = this.cards.length;
    var temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  };

  this.half1 = [];
  this.half2 = [];

  this.splitIt = function() {
    this.half1 = this.cards.slice(0,26);
    this.half2 = this.cards.slice(26,52);
  }
}

var BrandNewDeck = new Deck();

BrandNewDeck.shuffle();
BrandNewDeck.splitIt();

var player01 = BrandNewDeck.half1;

var player02 = BrandNewDeck.half2;

function War(a,b) {
    var score1 = 0;
    var score2 = 0;

    for (let i = 0; i < 26; i++) {
        if (a[i] > b[i]){
            score1++;
        }
        else if (a[i] < b[i]){
            score2++;
        }
        else {
            score1++;
            score2++;
        }
    }

    if (score1 > score2) {
        return "Player 1 Wins!";
    }
    else if (score1 < score2) {
        return "Player 2 Wins!";
    }
    else {
        return "Tie Game!";
    }
}

console.log(War(player01,player02));