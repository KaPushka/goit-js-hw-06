const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredientsList = document.getElementById("ingredients");
const foodIngredients = ingredients.forEach(ingredient => {
  let lisIitems = document.createElement("li");
  lisIitems.innerHTML = ingredient;
  lisIitems.classList.add('item');
  ingredientsList.append(lisIitems);
});