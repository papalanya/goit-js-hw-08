import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

let formData = {};

form.addEventListener('input', throttle(onSave, 500));
form.addEventListener('submit', onFormSubmit);

populateInput();

function onSave(event) {
    event.preventDefault();
    
    const emailInput = form.elements.email.value;
    const messageInput = textarea.value;

    formData = {
        email: emailInput, message: messageInput
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateInput() {
    const saveInput = localStorage.getItem(STORAGE_KEY);

    if (saveInput) {
        const parsSaveInput = JSON.parse(saveInput);
        textarea.value = parsSaveInput.message || '';
        form.nextElementSibling.email.value = parsSaveInput.email || '';
    }
}

function onFormSubmit(event) {
    event.preventDefault();

    const saveInput = localStorage.getItem(STORAGE_KEY);

    if (saveInput) {
        const parsSaveInput = JSON.parse(saveInput);
        console.log(parsSaveInput);
    }

    localStorage.removeItem(STORAGE_KEY);

    event.currentTarget.reset();
}