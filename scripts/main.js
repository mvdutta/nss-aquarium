//importing the function created in database.js called getFish. When getFish is run, it produces a copy of the database. 
import { getFish } from './database.js'


//store the copy of the database from the function getFish and store it in the variable allFish...this will be our version of the database to change as needed.
const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}
