// Array holding integers
var numbers = [1, 2, 3, 4, 5];

// Array holding strings
var weekDays = [
    'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday', 'Sunday'
];

// Array of different types
var mixedArr = [1, new Date(), 'hello'];

// Array of arrays (matrix)
var matrix = [
    ['0,0', '0,1', '0,2'],
    ['1,0', '1,1', '1,2'],
    ['2,0', '2,1', '2,2']
];

console.log(weekDays[0]); // Monday
console.log(weekDays.length); // 7
console.log(matrix[0][1]); // 0,1

// for (var i = 0; i < weekDays.length; i++) {
//     console.log(weekDays[i]);
// }

// for (var i = weekDays.length - 1; i >= 0; i--) {
//     debugger;
//     console.log(weekDays[i]);
// }

for (var dayNumber in weekDays) {
  console.log(`${dayNumber} ----> ${weekDays[dayNumber]}`);
}