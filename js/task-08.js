const logForm = document.querySelector(".login-form");
const mailInput = logForm.elements.email;
const pasvordInput = logForm.elements.password;
//console.log(mailInput)
logForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const {
    elements: { login, password }
} = event.currentTarget;

    if (mailInput.value === "" || pasvordInput.value === "") {
        return alert("Please fill in all the fields!");
    }
console.log(`Login: ${login.value}, Password: ${password.value}`);
event.currentTarget.reset();
}
