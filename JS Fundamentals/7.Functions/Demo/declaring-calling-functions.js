function sayHello() {
    console.log('Hello World!');
}

function printSign(number) {
    if (number > 0) {
        console.log('The number ' + number + ' is positive.');
    } else if (number < 0) {
        console.log('The number ' + number + ' is negative.');
    } else {
        console.log('The number ' + number + ' is zero.');
    }
}

function printMax(number1, number2) {
    var max = number1;

    if (max > number1) {
        max = number2;
    }

    console.log('Maximal number: ' + max);
}

sayHello();

printSign(4);
printSign(-4);

printMax(5, 10);

function printArguments() {
    // arguments are parsed to array
    var args = [].slice.apply(arguments);

    for (var i in args) {
        console.log(args[i]);
    }
}

printArguments(1, 2, 3, 4); //1, 2, 3, 4