//importing the function created in database.js called getFish. When getFish is run, it produces a copy of the database. 
// import { getFish } from './database.js'
import { FishList } from './fishList.js'

//store the copy of the database from the function getFish and store it in the variable allFish...this will be our version of the database to change as needed.
// const allFish = getFish()

// for (const fish of allFish) {
//     console.log(fish)
// }
//grab the fish_cards div from the DOM and store it as fishCardsDiv by using document.querySelector (go throught the DOM and find the fisrt thing you see that has class fish_cards and store a reference to it in fishCardsDiv.
let fishCardsDiv = document.querySelector(".fish_cards");
//innerHTML means whatever is inside the div. When FishList is run, it provides the giant string. Change the HTML by putting this string in the innerHTML of fishCardsDiv
fishCardsDiv.innerHTML = FishList();

