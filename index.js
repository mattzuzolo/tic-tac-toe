console.log("JS is connected.");

let turnCounter = 0;
const tileArray = [...document.getElementsByClassName("div--tile")];

console.log("X's turn?", isItXTurn(turnCounter))

//https://stackoverflow.com/questions/21616393/javascript-event-listener-firing-on-page-load-not-click-event


document.addEventListener("DOMContentLoaded", () => {
  tileArray.map(tile => {

    //Displays and hides current user's marker as they choose a spot on the board
    tile.addEventListener("mouseenter", displayMarker.bind(event));
    tile.addEventListener("mouseleave", removeMarker.bind(event)); 
  
    tile.addEventListener("click", playTurn.bind(event));
    console.log("Original instance", playTurn);
  });
})

function playTurn(event){
  const tile = event.target;
  if (!tile.className.includes("played")){
    tile.className += " played";
    tile.firstChild.innerText = currentMarker();
    event.target.style.color = "red";
    turnCounter++;
    checkGameOver()
    console.log("Current turn:", turnCounter);
  } else {
    console.log("That spot is taken!");
  }
  
}





function isItXTurn(turnCounter){
  if (turnCounter % 2){
    return false;
  } else {
    return true;
  }
}

function currentMarker(){
  if(isItXTurn(turnCounter)){
    return "X";
  } 
  else {
    return "O";
  } 
}

function displayMarker(event){
  const tile = event.target;

  if (!tile.className.includes("played")){
    tile.firstChild.innerText = currentMarker();
    event.target.style.color = "gray";
  } else {
    console.log("That spot is already taken!")
  }
}

function removeMarker(event){
  const tile = event.target;
  if (!tile.className.includes("played")){
    return tile.style.color = "transparent";
  }
}

function checkGameOver(){
  if (turnCounter >= 9){
    alert("Game over!")
    tileArray.map(tile => {
      tile.removeEventListener("mouseenter", displayMarker.apply(event));
      tile.removeEventListener("mouseleave", removeMarker.apply(event));
      tile.removeEventListener("click", playTurn(event));
    
    
    });


  }
}
