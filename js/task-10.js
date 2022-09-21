// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
console.log(input);
const btnCreate = document.querySelector('#controls button[data-create]');
console.log(btnCreate);
const btnDestroy = document.querySelector('#controls button[data-destroy]');
console.log(btnDestroy);
const divBoxes = document.querySelector('#boxes');
console.log(divBoxes);

// btnCreate.addEventListener('click', createBoxes);

function createBoxes(amount) {
  amount = input.value;
  // console.log(amount);
  const arrBox = [];
  for (let i = 0; i < amount; i += 1) {
  const box = document.createElement("div");
  box.classList.add('box');

  let boxSize = 30;

  box.style.backgroundColor = `${getRandomHexColor()}`;
  box.style.width = (boxSize + i * 10) + 'px';
  box.style.height = (boxSize + i * 10) + 'px';

  arrBox.push(box);  
}
  divBoxes.append(...arrBox);
}

function destroyBoxes() {
  const box = document.querySelectorAll('.box');
  box.forEach(el => el.remove());
}

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);


