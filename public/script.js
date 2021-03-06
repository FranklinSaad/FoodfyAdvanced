const foods = document.querySelectorAll('.food')
const cards = document.querySelectorAll('.card')

for (let food of foods) {
    food.addEventListener("click", function () {
        const recipeId = food.getAttribute('id');
        window.location.href = `/recipe?id=${recipeId}`
    })
}

for (let card of cards) {
    card.addEventListener("click", function () {
        const cardId = card.getAttribute('id');
        window.location.href = `/recipe?id=${cardId}`
    })
}

function mostra(id) {
    if (document.getElementById(id).style.display == 'block') {
        document.getElementById(id).style.display = 'none';
        document.getElementById('b' + id).value = "Mostrar";
    } else { document.getElementById(id).style.display = 'block';
    document.getElementById('b' + id).value = "Ocultar" }  
}
