const sizeInput = document.getElementById('font-size-control')

const spanInput = document.getElementById('text')

sizeInput.addEventListener('input', () => {
    const fontSize = sizeInput.value;
    spanInput.style.fontSize = `${fontSize}px`;
})


















