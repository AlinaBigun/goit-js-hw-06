const sumCategories = document.getElementById("categories")
//console.log(sumCategori)
const arr = sumCategories.children
//console.log(arr)
console.log(`Number of categories: ${arr.length}`)
const sumList = sumCategories.querySelectorAll(".item")
//console.log(sumList)
sumList.forEach(item => {
    const liName = item.querySelector("h2").textContent;
    const elementSum = item.querySelectorAll("li").length;
    console.log(`Category: ${liName}`);
    console.log(`Elements: ${elementSum}`);
    
})