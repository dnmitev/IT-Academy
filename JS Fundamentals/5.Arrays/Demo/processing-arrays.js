// processing arrays backwards
var weekDays = [
    'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday', 'Sunday'
];

for (var i = weekDays.length - 1; i >= 0; i--) {
    console.log(weekDays[i]);
}

for (var day in weekDays) {
    console.log(day + ' --> ' + weekDays[day]);
}