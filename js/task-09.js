// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}

const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const span = document.querySelector('.color');

button.addEventListener('click', onClick);

function onClick(evt) {
  let currentColor;
  currentColor = getRandomHexColor();
  console.log(currentColor);
  body.style.backgroundColor = currentColor;
  span.textContent = currentColor;
};

