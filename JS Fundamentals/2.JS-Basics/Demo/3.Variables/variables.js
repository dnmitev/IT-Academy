function sayHello() {
    var greeting = 'Hello!'; // not equal to window.greeting

    if  (true) {
        let greeting = "Zdrasti!";
        console.log(greeting);
    }

    console.log(greeting);
}

sayHello();
console.log(globalVariable);
console.log("Outside the function: " + greeting);