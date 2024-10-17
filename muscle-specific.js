const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

const filterCards = (e) => {
    //Removes active from everything
    document.querySelector(".filter_buttons .active").classList.remove("active");

    //add active to required/target divs
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        //Adds hide to everyting
        card.classList.add("hide")

        //Removes hide if name=bodypart or all is selected
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide")
        }
    });
}

//runs the forEach to every card
filterButtons.forEach(button => button.addEventListener("click", filterCards));