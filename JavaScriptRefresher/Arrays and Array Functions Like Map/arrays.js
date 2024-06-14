const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[1]);
hobbies.push("Working");
console.log(hobbies);

const index = hobbies.findIndex((item) => item === "Sports");

console.log(index);

// Map allows you to convert every item in an array to convert into another item.
// Map does not change the original array, but create a new array, with changed output.
const maps =hobbies.map((item) =>item+"!" );
const jsObjects =hobbies.map((item) =>({text: item}) );
console.log(maps)
console.log(jsObjects)