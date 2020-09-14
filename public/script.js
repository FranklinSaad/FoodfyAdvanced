const modalOverlay = document.querySelector('.modalOverlay');
const foods = document.querySelectorAll('.food')

for (let food of foods) {
    food.addEventListener("click", function () {
        const imgID = food.getAttribute("id");
        const foodname = food.querySelector(".food-name").textContent;
        const foodauthor = food.querySelector(".food-author").textContent;

        modalOverlay.classList.add('active');
        modalOverlay.querySelector("img").src = `${imgID}`;
        modalOverlay.querySelector(".modalPlate").innerHTML = `${foodname}`;
        modalOverlay.querySelector(".modalChef").innerHTML = `${foodauthor}`;
    })
}


document.querySelector(".closeModal").addEventListener("click", function () {
    modalOverlay.classList.remove("active")
})
