console.log("JS is connected.");

const turnCounter = 0;
const tileArray = [...document.getElementsByClassName("div--tile")];

console.log("whose turn:", xTurn(turnCounter))

//https://stackoverflow.com/questions/21616393/javascript-event-listener-firing-on-page-load-not-click-event
tileArray.map(tile => {
  tile.addEventListener("mouseenter", displayMarker.bind(event));
  tile.addEventListener("mouseleave", removeMarker.bind(event)); 
});

function xTurn(turnCounter){
  if (turnCounter % 2){
    return false;
  } else {
    return true;
  }
}

function displayMarker(event){
  const tile = event.target;

  if(xTurn(turnCounter)){
    console.log("tile", tile.firstChild);
    tile.firstChild.innerText = "X";
  } 
  else {
    tile.firstChild.innerText = "O";
  } 
  event.target.style.color = "red";
}

function removeMarker(event){
  const tile = event.target;

  console.log("Left the tile");
  event.target.style.color = "transparent";
}
