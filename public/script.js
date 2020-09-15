const foods = document.querySelectorAll('.food')

for (let food of foods) {
    food.addEventListener("click", function () {
        const recipeId = food.getAttribute("id");
        window.location.href = `/recipe?id=${recipeId}`
    })
}
