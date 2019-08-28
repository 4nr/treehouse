const myHeading = document.getElementById('myHeading');
const colorButton = document.getElementById('colorButton');
const colorInput = document.getElementById('colorInput');
const sizeButton = document.getElementById('sizeButton');
const sizeInput = document.getElementById('sizeInput');
/*
myHeading.addEventListener('click', () => {
  myHeading.style.color = 'red';
});
*/
colorButton.addEventListener('click', () => {
  myHeading.style.color = colorInput.value;
});

sizeButton.addEventListener('click', () => {
  myHeading.style.fontSize = sizeInput.value+"px";
});

