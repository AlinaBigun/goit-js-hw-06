function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const colorBody = document.querySelector('body');
const colorBtn = document.querySelector(".change-color");
const color = document.querySelector('.color')

colorBtn.addEventListener('click', () => {
  color.textContent = getRandomHexColor();
  colorBody.style.backgroundColor = color.textContent;

})
