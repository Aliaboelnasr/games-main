import { displayAllData } from './display.module.js';





export default class Games{
  
  constructor(apiKey){
    this.apiKey = apiKey
    this.baseUrl = "https://free-to-play-games-database.p.rapidapi.com/api";
    this.headers = {
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    };
    this.loadingElement = document.querySelector(".loading");
  }


  toggleLoading(show){
    if(show){
      this.loadingElement.classList.remove('d-none')
    }
    else{
      this.loadingElement.classList.add('d-none')
    }
  }
  // get all games
  async getAllGames(category = "mmorpg") {
    this.toggleLoading(true);
    try {
        const api = await fetch(`${this.baseUrl}/games?category=${category}`, {
            method: "GET",
            headers: this.headers,
        });
        if (api.ok) {
            const response = await api.json();
            displayAllData(response);
            console.log(response);
        } else {
            throw new Error(`Error: ${response.statusText}`);
        }
    } catch (error) {
        console.error("Error fetching all games:", error);
    } finally {
        this.toggleLoading(false);
    }
}


  // get game with category
  async getGameWithCat(category){
    this.toggleLoading(true);
    try {
      const response = await fetch(`${this.baseUrl}/games?category=${category}`, {
        method: "GET",
        headers: this.headers
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        displayAllData(result);
      } else {
        throw new Error(`Error: ${response.statusText}`);
      }
    } 
    catch (error) {
      console.error(`Error fetching games by category "${category}":`, error);
    } 
    finally {
      this.toggleLoading(false);
    }
  }
  // get game with id
  async getGameDetails(gameId) {
    this.toggleLoading(true);
    try {
      const response = await fetch(`${this.baseUrl}/game?id=${gameId}`, {
        method: "GET",
        headers: this.headers
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        this.displayGameDetails(result);
      } else {
        throw new Error(`Error: ${response.statusText}`);
      }
    } 
    catch (error) {
      console.error(`Error fetching game details for ID "${gameId}":`, error);
    } 
    finally {
      this.toggleLoading(false);
    }
  }



  displayGameDetails(game) {
    let imgDetails = document.querySelector('.img-details');
  let gameTitle = document.querySelector('.game-title');
  let gameCategory = document.querySelector('.game-category span');
  let gamePlatform = document.querySelector('.game-platform span');
  let gameStatus  = document.querySelector('.game-Status span');
  let gameDescription = document.querySelector('.game-description');
  let gameLink = document.querySelector('.game-link');

    gameTitle.innerHTML = `Title: ${game.title}`;
    gameCategory.innerHTML = `${game.genre}`;
    gamePlatform.innerHTML = `${game.platform}`;
    gameStatus.innerHTML = `${game.status}`;
    gameDescription.innerHTML = `${game.description}`;
    imgDetails.setAttribute("src", `${game.thumbnail}`);
    gameLink.setAttribute("href", `${game.game_url}`);
  }
}
    


