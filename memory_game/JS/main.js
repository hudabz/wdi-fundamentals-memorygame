/*console.log("Up and running!"); */

/*console.log("User flipped " + cardOne); */

var cards = ["queen" , "queen" , "king" , "king"];
var cardsInPlay = []; 


    function flipcard() {

   var cardOne = cards[0]; 

cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne); 

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo); 

if (cardsInPlay[0] === cardsInPlay[1]) {

	
    console.log("You found a match!");
} else 
    
    console.log ("Sorry, try again."); 

    }

    flipcard(0); 