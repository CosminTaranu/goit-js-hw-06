function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  let size = 30;

  for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
      size += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}


const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const inputField = document.querySelector('#controls input');

createButton.addEventListener('click', function() {
  const amount = Number(inputField.value);
  if (amount <1 && amount > 100) {
    alert('Introduceți un număr între 1 și 100');
      
  } else {
    return createBoxes(amount);
  }
});

destroyButton.addEventListener('click', destroyBoxes);