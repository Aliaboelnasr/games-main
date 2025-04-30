export let closeGameDetails =  document.getElementById("close-game-details");
export let gameDetails = document.getElementById("game-details");
export let home = document.getElementById("home");


export function CloseDetails() {
    gameDetails.classList.add("d-none");
    home.classList.remove("d-none");
}
