// var numbers = [1, 2, 3, 4, 5],
//     tail,
//     head;

// debugger;
// console.log(numbers.join('|')); // result: 1|2|3|4|5

// tail = numbers.pop(); // tail = 5;
// debugger;
// console.log(numbers.join('|')); // result: 1|2|3|4
// console.log(tail); // 5
// debugger;

// numbers.unshift(0);
// debugger;
// console.log(numbers.join('|')); // result: 0|1|2|3|4
// debugger;

// head = numbers.shift(); // head = 0;
// debugger;
// console.log(numbers.join('|')); // result: 1|2|3|4
// console.log(head);

var words = ['This', 'is', 'stupid', 'sample'];
var sentence = words.join(' ');
var desiredWord = '';

for (var i = 0; i < 4; i++) {
    desiredWord += sentence[i];
    console.log(desiredWord);
}

console.log(desiredWord);