const textInput = document.getElementById('validation-input');
const inputLength = textInput.dataset.length;
//console.log(inputLength)
textInput.addEventListener('focus', () => {
    textInput.classList.remove('valid');
    textInput.classList.remove('invalid');
})
textInput.addEventListener('blur', () => {
    if (textInput.value.length === inputLength) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    } else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    }
})

