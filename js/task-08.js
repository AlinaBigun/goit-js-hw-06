const logForm = document.querySelector(".login-form");
const mailInput = logForm.elements.email;
const pasvordInput = logForm.elements.password;

logForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const elForm = event.currentTarget.elements;
    const login = elForm.email.value;
    const password = elForm.password.value;
    if (login && password) {
        const formObj = {
            login,
            password,
        }
        console.log(formObj);
        logForm.reset();
    } else {
        alert("Please fill in all the fields!")
  }

}
