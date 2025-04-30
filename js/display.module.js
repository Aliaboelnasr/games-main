
import { gameInstance } from "./main.js";

import { gameDetails, home } from "./details.module.js";

export function displayAllData(list) {
    let blackBox = ``;

    for (let i = 0; i < list.length; i++) {
        blackBox += ` <div data-id="${list[i].id}" class="col-md-6 col-lg-3 col-xl-3 card-game">
    
        <div class="card bg-transparent">
    
            <div class="card-img p-3 pb-0">
                <img src="${list[i].thumbnail}" class="card-img-top" alt="..." class="w-100">
            </div>


            <div class="card-body">
                <div class="card-title d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">${list[i].title}</h5>
                    <span class="badge text-bg-primary p-2">Free</span>
                </div>
                <p class="card-text text-center">${list[i].short_description.slice(0, 55)}</p>
            </div>


            <div class="card-footer text-body-secondary d-flex justify-content-between">
                <span class="badge footer-badge">${list[i].genre}</span>
                <span class="badge footer-badge">${list[i].platform}</span>
            </div>
        </div>


        </div>`; 
    }

    document.getElementById("games").innerHTML = blackBox;

    let cardGame = document.querySelectorAll(".card-game");
    for (let i = 0; i < cardGame.length; i++) {
        cardGame[i].addEventListener("click", function (e) {
            const gameId = e.currentTarget.getAttribute("data-id");
            gameInstance.getGameDetails(gameId); 
            gameDetails.classList.remove("d-none");
            home.classList.add("d-none");
        });
    }
}
