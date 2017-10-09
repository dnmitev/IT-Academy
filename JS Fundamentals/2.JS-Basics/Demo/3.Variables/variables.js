function sayHello() {
    // not equal to window.greeting
    var greeting = 'Hello!'; 

    if  (true) {
        // available just in the block scope of the if-statement
        let greeting = "Zdrasti!"; 
        console.log(greeting);
    }

    console.log(greeting);
}

sayHello();
console.log(globalVariable);
console.log("Outside the function: " + greeting);