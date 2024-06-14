// Objects can be used to group multiple values together.
const userName = 'Max';
const userAger = 34;
const user = {
    name : 'Max',
    age: 34,
    greet(){
        console.log("Hell0");
        console.log(this.age);
    }
};
console.log(user.name);

// Objects can create functions, without the function keyword, which are then termed as methods.
user.greet();
// `this` keyword is used to get acess to the other methods.
