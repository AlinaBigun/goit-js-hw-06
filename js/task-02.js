const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector(`#ingredients`);
const fragment = document.createDocumentFragment();
for (const ingredient of ingredients) {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  ulEl.append(liEl)
  fragment.append(liEl);
}
ulEl.append(fragment)