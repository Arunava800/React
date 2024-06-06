function greet(userName="Hell0", message="MAX"){
    console.log("Good Morning"); //defining the function
}

greet();//calling the function


function greeted(userName, message){
    console.log(userName+" "+ message);
}

greeted("Soham", "how are you");
greet();



function add(number1, number2){
    return number1 + number2;
}

console.log(add(10,20));

function combine(a, b, c){
    return a * b / c
}