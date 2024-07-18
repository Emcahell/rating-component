const btnSubmit = document.getElementById('btn-submit');
const cardRating = document.querySelector('.card-rating');
const cardThankYou = document.querySelector('.card-thank-you');

let selected = null;

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".rating");
    const screenRating = document.getElementById('screen-rating');

    buttons.forEach( (button, index) => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            
            button.classList.add("active");

            screenRating.textContent = `You selected ${index + 1} out of 5`;

            selectedIndex = index;
        });
    });
});

btnSubmit.addEventListener('click', (e) =>{
    if (selectedIndex === null) {
        e.preventDefault();
    } else {
        cardRating.classList.add('none');
        cardThankYou.classList.remove('none');
    }
})