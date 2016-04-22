var numbers = [1, 2, 3, 4, 5],
    tail,
    head;

console.log(numbers.join('|')); // result: 1|2|3|4|5

tail = numbers.pop(); // tail = 5;
console.log(numbers.join('|')); // result: 1|2|3|4

numbers.unshift(0);
console.log(numbers.join('|')); // result: 0|1|2|3|4

head = numbers.shift(); // head = 0;
console.log(numbers.join('|')); // result: 1|2|3|4