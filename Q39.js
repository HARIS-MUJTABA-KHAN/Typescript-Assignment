"use strict";
/*City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/
function cityCountry(city, country) {
    return `${city}, ${country}`;
}
// Call the function with three city-country pairs and print the results
let ciTy1 = cityCountry("Lahore", "Pakistan");
let ciTy2 = cityCountry("New York", "USA");
let ciTy3 = cityCountry("Paris", "France");
console.log(ciTy1);
console.log(ciTy2);
console.log(ciTy3);