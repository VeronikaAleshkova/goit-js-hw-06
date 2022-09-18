const list = document.querySelector("#categories");
// console.log(list);

const categoriesList = list.children;
// console.log(categoriesList);
console.log(`Number of categories: ${categoriesList.length}`);

const items = document.querySelectorAll('.item');
// console.log(items);
items.forEach(item => {
  const elements = item.lastElementChild.children;
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${elements.length}`);
});