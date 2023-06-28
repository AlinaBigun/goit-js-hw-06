const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterValue = 0;
const spanClick = document.querySelector('#value');


const minusClick = () => {
    counterValue -= 1;
    spanClick.textContent = counterValue;
};

const plusClick = () => {
    counterValue += 1;
    spanClick.textContent = counterValue;
}
decrementBtn.addEventListener("click", minusClick);
incrementBtn.addEventListener("click", plusClick);