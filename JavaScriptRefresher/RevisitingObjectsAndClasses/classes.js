class User{
    constructor(name, age){
        this.name = name;
        this.age = age;

    }

    greet(){
        console.log("Hello");
    }
}

const user1 = new User("Arunava", 31);
console.log(user1.name)
user1.greet();