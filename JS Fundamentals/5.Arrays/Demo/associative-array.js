var weekdays = {
    "Monday": "Ponedelnik",
    "Tuesday": "Vtornik",
    "Wednesday": "Sryada",
    "Thursday": "Chetvurtuk",
    "Friday": "Petuk",
    "Saturday": "Subota",
    "Sunday": "Nedelya"
};

for (var day in weekdays) {
    debugger;
    console.log(`${day} -> ${weekdays[day]}`);
}

console.log(Array.isArray(weekdays));