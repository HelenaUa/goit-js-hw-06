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
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны 
// быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
// где имя поля будет именем свойства, а значение поля - значением свойства.Для доступа к элементам формы 
// используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    // console.log("это сабмит формы");
    const formElements = event.currentTarget.elements;
    const male = formElements.email.value;
    const password = formElements.password.value;

    if (!male || !password) {
        alert("Attention, all fields must be filled!");
    } else {
        const result = {
            email: male,
            password: password,
        };
        console.log(result);
        event.currentTarget.reset();       
    };
}






