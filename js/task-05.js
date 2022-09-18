// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const input = document.querySelector('#name-input');
input.addEventListener('input', handleInput);

const name = document.querySelector('#name-output');

function handleInput(evt) {
  // console.dir(evt.currentTarget.value);
  if(evt.currentTarget.value.trim() === '') {
    name.textContent = "Anonymous";
  } else {
  name.textContent = evt.currentTarget.value;
  }
};