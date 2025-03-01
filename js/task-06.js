// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, 
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили 
// в исходные файлы задания.
// #validation-input {
//   border: 3px solid #bdbdbd;
// }
// #validation-input.valid {
//   border-color: #4caf50;
// }
// #validation-input.invalid {
//   border-color: #f44336;
// }

let inputEl = document.querySelector("#validation-input");
console.log(inputEl);
let inputLength = inputEl.getAttribute("data-length");

const inputValid = document.querySelector("#validation-input.valid");
console.log(inputValid);

const inputInvalid = document.querySelector("#validation-input.invalid");
console.log(inputInvalid);

inputEl.addEventListener('blur', onBlur); 
function onBlur(event) {
    const text = event.target.value;
    if (text.length === + inputLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else { 
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid')
    }
};
