const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector('#ingredients');
const ingredientsList = [];

ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.className = 'item';
  item.textContent = ingredient;
  ingredientsList.push(item);
});

list.append(...ingredientsList);