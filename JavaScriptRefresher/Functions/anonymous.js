() =>{
    console.log("This is the first message");
}
/* If only one parameter is there*/
name => {
    console.log(name+"How are you");
}
/* If two or more parameters are there*/
(name, message) =>{
    console.log(name+" "+ message);

}

/* If returns only one variable*/
number => number*3;
/* If returning an object*/
number => {{age: number}};