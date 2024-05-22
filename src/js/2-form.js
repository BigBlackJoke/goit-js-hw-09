const formData = { email: "", message: "" };

const inputFill = document.querySelector(".feedback-form");

const email = inputFill.elements.email;
const message = inputFill.elements.message;
const localStorageKey = "feedback-form-state";

const savedData = JSON.parse(localStorage.getItem(localStorageKey));

inputFill.elements.email.value = savedData.email;
inputFill.elements.message.value = savedData.message;

inputFill.addEventListener("input", () => {
    formData.email = email.value;
    formData.message = message.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});


inputFill.addEventListener("submit", event => {
    event.preventDefault();
    if (formData.email !== "" && formData.message !== "") {
        console.log(formData);
        localStorage.removeItem(localStorageKey);
        inputFill.reset();
        formData.email = "";
        formData.message = "";
    } else {
        alert('Please fill all fields');
    }
});