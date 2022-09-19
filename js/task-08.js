// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  // console.dir(evt.currentTarget.elements);
  // console.dir(evt.currentTarget.elements.email.value);
  // console.dir(evt.currentTarget.elements.password.value);

  const {email, password} = evt.currentTarget.elements;
  // console.log(email.value);
  // console.log(password.value);

  if (email.value.trim() === '' || password.value.trim() === '') {
    alert("Bсе поля должны быть заполнены!");
  }

  const dataObj = {
    email: email.value,
    password: password.value
  }
  console.log(dataObj);
  form.reset();
}