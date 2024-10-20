const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

const filterCards = (e) => {
    //Removes active from all cards
    document.querySelector(".filter_buttons .active").classList.remove("active");

    //add active to required/target divs
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        //Adds hide to all cards
        card.classList.add("hide")

        //Removes hide if name=bodypart or all is selected
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide")
        }
    });
}

//runs the forEach to every card for adding/removing active/hide
filterButtons.forEach(button => button.addEventListener("click", filterCards));