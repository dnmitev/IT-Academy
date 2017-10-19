function printText(number, text) {
    switch (arguments.length) {
        case 1:
            debugger;
            console.log('Number :' + number);
            break;
        case 2:
            debugger;
            console.log('Number :' + number);
            console.log('Text :' + text);
            break;
    }
}

debugger;
printText(5); //logs 5
console.log('------------------');
debugger;
printText(5, 'Lorem Ipsum'); //logs 5 and Lorem Ipsum

// function print(number) {
//     console.log('Number: ' + number);
// }

// function print(number, text) {
//     console.log('Number: ' + number + '\nText: ' + text);
// }

// print(5);