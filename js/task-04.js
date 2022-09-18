// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


let counterValue = 0;

const buttonDecr = document.querySelector('#counter button[data-action="decrement"]');
console.log(buttonDecr);
const buttonIncr = document.querySelector('#counter button[data-action="increment"]');
console.log(buttonIncr);
const value = document.querySelector('#value');
console.dir(value);

buttonDecr.addEventListener('click', onClickDecr);
function onClickDecr(evt) {
//  console.log(evt);
//   console.dir(evt.currentTarget);
  counterValue -= 1;
  value.textContent = counterValue;
};

buttonIncr.addEventListener('click', onClickIncr);
function onClickIncr(evt) {
  //  console.log(evt);
  //   console.dir(evt.currentTarget);
    counterValue += 1;
    value.textContent = counterValue;
  };