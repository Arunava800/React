// const userName = ["Arunava", "Sengupta"];
// const firstName = userName[0];
// const lastName = userName[1];
// console.log(firstName, lastName)

const [firstName, lastName] = ["arunava","sengupta"];
console.log(firstName, lastName);

const {name: Name, age: Age}={
    name: 'Max',
    age : 35
}

console.log(Name, Age);