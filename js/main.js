import Games from "./GetData.module.js";
import { closeGameDetails, CloseDetails } from "./details.module.js";

export let gameInstance; // تغيير من const إلى let
document.addEventListener("DOMContentLoaded", () => {
    gameInstance = new Games('4b492e085amshcef2e174e71e7d1p13d385jsn4df7b5763a7b'); // الآن يمكن إعادة تعيينه
    let navLinks = document.querySelectorAll(".nav-link");

    gameInstance.getAllGames();

    closeGameDetails.addEventListener("click", CloseDetails);

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function () {
            for (let j = 0; j < navLinks.length; j++) {
                navLinks[j].classList.remove("active");
            }

            navLinks[i].classList.add("active");

            gameInstance.getGameWithCat(navLinks[i].innerHTML);
        });
    }
});
