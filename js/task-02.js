const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector(`ul#ingredients`)
const fragment = document.createDocumentFragment ();
ingredients.forEach((ingredient) => {
  const list = document.createElement(`li`);
  list.textContent = ingredient;
  list.classList.add(`item`);
  console.log(list);
  fragment.appendChild(list);
});
ingredientsList.appendChild(fragment);
console.log(ingredientsList);