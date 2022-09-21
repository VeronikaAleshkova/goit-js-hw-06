// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.


const input = document.querySelector('#validation-input');
// const length = Number(input.dataset.length);
const limit = Number(input.getAttribute('data-length'));
// console.log(input);
// console.log(length);

input.addEventListener('blur', checkData);

function checkData(evt) {
  console.log(evt.currentTarget.value.trim().length);
  if (evt.currentTarget.value.trim().length === limit) {
    evt.currentTarget.classList.add('valid');
    evt.currentTarget.classList.remove('invalid');
  } else {
    evt.currentTarget.classList.add('invalid');
    evt.currentTarget.classList.remove('valid');
  }
};