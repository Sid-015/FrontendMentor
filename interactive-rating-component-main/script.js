const rating = document.querySelector("#rating");
const thankYou = document.querySelector("#thankYou");
const form = document.querySelector(".rating-input");

form.addEventListener("submit" , function(e){
    e.preventDefault();
    const selector= "input[name=rating]:checked";
    const checkedInput = document.querySelector(selector);

    if(checkedInput!== null){
        const selectedRating = document.querySelector(".rating-txt");
        selectedRating.textContent = "You selected " + checkedInput.getAttribute("value") + " out of 5"
        rating.classList.add("hidden");
        thankYou.classList.remove("hidden");
    }
})