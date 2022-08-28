import { getFish } from './database.js'


//making a new function called FishList which will return an HTML representation of all the fish in the database
// This function starts with an empty string called htmlString
        // For each fish in the fishes array: 
        //     1. Make a html string for that fish with the fish properties inserted.
        //     2. Add this string to htmlString
        // Return htmlString, which now contains the html for all the fish.
        
export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish().slice(-6)

    // Start building a string filled with HTML syntax. This is the start of the HTML string.
    let htmlString = ''

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string? Need a template literal to put in the values of the variables
        htmlString += `<div class="fish_card">
        <img
          src="${fish.image}" class="fish_img"
        />
        <div class="fish_container">
          <p class="fish_text">Name: ${fish.name}</p>
          <p class="fish_text">Species: ${fish.species}</p>
          <p class="fish_text">Length: ${fish.len}</p>
          <p class="fish_text">Diet: ${fish.diet}</p>
        </div>
      </div>`
    }

    return htmlString
}