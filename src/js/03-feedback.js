import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const email = document.querySelector('input[type="email"]');
const textSpace = document.querySelector('textarea[name="message"]');
const btn = document.querySelector('button[type="submit"]');

form.addEventListener(
  "input",
  throttle(() => {
    let inputValues = {
      email: email.value,
      textSpace: textSpace.value,
    };

    localStorage.setItem("feedback-form-state", JSON.stringify(inputValues));
  }, 500)
);

const storageValue = localStorage.getItem("feedback-form-state");

if (storageValue !== null) {
  email.value = JSON.parse(storageValue).email;
  textSpace.value = JSON.parse(storageValue).textSpace;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log({
    email: email.value,
    textSpace: textSpace.value,
  });

  localStorage.removeItem("feedback-form-state");
  form.reset();
});
