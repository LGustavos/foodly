const modalOverlay = document.querySelector('.modal_overlay');
const cards = document.querySelectorAll('.card');
const modalContent = document.querySelector('.modal_content');

for (let card of cards) {
    card.addEventListener("click", function () {
        modalOverlay.classList.add('active')
        modalContent.innerHTML = card.innerHTML
    })
}

document.querySelector('.close_modal').addEventListener("click", function () {
    modalOverlay.classList.remove('active')
})