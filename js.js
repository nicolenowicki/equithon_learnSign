window.onload = init;

var cardValues = ['A', 'B', 'I', 'N', 'P', 'R', 'X', 'Y', 'a', 'b', 'i', 'n', 'p', 'r', 'x', 'y'];
    // write function to randomize this
    
var cardIds = [];
var cardsFlipped = [];

var flipped = 0; 
var totalMatches = 0;
var matches = [];

function init(){
  var output = '';
  for(var i = 0; i < cardValues.length; i++){
    output += '<div id="tile_'+i+'" onclick="flip(this,\''+cardValues[i]+'\', )"></div>';
  }
  document.getElementById('board').innerHTML = output;
}

function flip(card, value) {
  if (flipped < 2 && !matches.includes(value)) {
    if (value == value.toUpperCase()) {
      var fileString = 'CardFacesLetters/letter_'+value.toUpperCase()+'.png'
      card.style.backgroundImage = "url("+fileString+")";
    } else {
      var fileString = 'CardFaces/asl_'+value.toUpperCase()+'.png'
      card.style.backgroundImage = "url("+fileString+")";
    }
      
    cardsFlipped.push(value.toUpperCase());
    cardIds.push(card.id);
    matches.push(value);
      
    flipped += 1;
      
    if (flipped == 2) {
      if (cardsFlipped[0] == cardsFlipped[1]) {              
        totalMatches++;
        document.getElementById("score").innerHTML = "Score: "+totalMatches;

        cardsFlipped = [];
        cardsIds = [];
        flipped = 0;

        if (totalMatches == 8) {
          // gameover
          totalMatches = 0;
          document.getElementById("score").innerHTML = "Score: "+totalMatches;
          document.getElementById("board").innerHTML = "";
          
          modal.style.display = "block";
          //init();
        }

      } else {
        matches.pop();
        matches.pop();
        setTimeout(flipBack, 500);
      }
    }
  }
}

function flipBack() {
  var card1 = document.getElementById(cardIds[cardIds.length - 2]);
  var card2 = document.getElementById(cardIds[cardIds.length - 1]);
  // make slower
  cardsFlipped = [];
  cardsIds = [];
  flipped = 0;
  card1.style.backgroundImage = 'url(Card.png)';
  card1.innerHTML = "";
  card2.style.backgroundImage = 'url(Card.png)';
  card2.innerHTML = "";
}