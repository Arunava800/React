const hobbies = ["Sports", "cooking"];
const user = {
    name :"max",
    age : 35
}
const newHobbies = ["Reading"];
const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);

const extendUser = {
    isAdmin : true,
    ...user
}
console.log(extendUser)