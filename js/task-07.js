// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>


const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
let value = 1;
input.addEventListener('input', onInput);

function onInput(evt) {
  value +=1;
  text.style.fontSize = value * 4 + 'px';
};

