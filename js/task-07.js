const sizeInput = document.getElementById('font-size-control')

const spanInput = document.getElementById('text')

sizeInput.addEventListener('input', () => {
    
    spanInput.style.fontSize = `${sizeInput.value}px`;
})


















