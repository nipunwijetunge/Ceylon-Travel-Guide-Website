// queries
const btnIncrease = document.querySelector('.bigger');
const btnDecrease = document.querySelector('.smaller');
const btnReset = document.querySelector('.reset');
const pDes = document.querySelector('.p-des');
const pName = document.querySelector('.p-name');
const title = document.querySelector('.title');
const cName = document.querySelector('.c-name');

let initialSizeForHeader = 50;
let initialSizeForDes = 14;
let initialSizeForName = 17;
let inirialSizeForCName = 18;

let pDesSize = initialSizeForDes;
let pNameSize = initialSizeForName;
let titleSize = initialSizeForHeader;
let cNameSize = inirialSizeForCName;

function textIncrease() {
  pDesSize++;
  pNameSize++;
  titleSize++;
  cNameSize++;

  pDes.style.fontSize = pDesSize+"px";
  title.style.fontSize = titleSize+"px";
  pName.style.fontSize = pNameSize+"px";
  cName.style.fontSize = cNameSize+"px";
}

function textDecrease() {
  pDesSize--;
  pNameSize--;
  titleSize--;
  cNameSize--;
  pDes.style.fontSize = pDesSize+"px";
  title.style.fontSize = titleSize+"px";
  pName.style.fontSize = pNameSize+"px";
  cName.style.fontSize = cNameSize+"px";
}

function textReset() {
  pDes.style.fontSize = initialSizeForDes+"px";
  title.style.fontSize = initialSizeForHeader+"px";
  pName.style.fontSize = initialSizeForName+"px";
  cName.style.fontSize = inirialSizeForCName+"px";

  pDesSize = initialSizeForDes;
  pNameSize = initialSizeForName;
  titleSize = initialSizeForHeader;
  cNameSize = inirialSizeForCName;
}

// Event listeners for buttons
btnIncrease.addEventListener('click', textIncrease);
btnDecrease.addEventListener('click', textDecrease);
btnReset.addEventListener('click', textReset);
