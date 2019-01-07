console.log("JS is connected.");

let turnCounter = 0;
const tileArray = [...document.getElementsByClassName("div--tile")];

console.log("X's turn?", isItXTurn(turnCounter))

//https://stackoverflow.com/questions/21616393/javascript-event-listener-firing-on-page-load-not-click-event
tileArray.map(tile => {

  //Displays and hides current user's marker as they choose a spot on the board
  tile.addEventListener("mouseenter", displayMarker.bind(event));
  tile.addEventListener("mouseleave", removeMarker.bind(event)); 

  tile.addEventListener("click", playTurn.bind(event));
});

function playTurn(event){
  const tile = event.target;
  tile.className += " played";
  tile.firstChild.innerText = currentMarker();
  event.target.style.color = "red";
  turnCounter++;
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
  if (tile.className.includes("played")) return console.log("Spot taken");


  if(isItXTurn(turnCounter)){
    tile.firstChild.innerText = currentMarker();
  } 
  else {
    tile.firstChild.innerText = currentMarker();
  } 
  event.target.style.color = "gray";
}

function removeMarker(event){
  const tile = event.target;
  if (tile.className.includes("played")){
    return console.log("Someone already used that tile");
  }
  tile.style.color = "transparent";
}
