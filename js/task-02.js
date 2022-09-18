const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// console.log(ingredients);

// const list = document.querySelector('#ingredients');
// const items = [];
// ingredients.forEach(ingredient => {
//   const li = document.createElement('li');
//   li.textContent = ingredient;
//   li.classList.add('item');
//   items.push(li);
// });

// console.log(items);

// list.append(...items);

const list = document.querySelector('#ingredients');
const makeIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    li.classList.add('item');
    return li;
  });
}

const items = makeIngredients(ingredients);
list.append(...items);
console.log(items);
