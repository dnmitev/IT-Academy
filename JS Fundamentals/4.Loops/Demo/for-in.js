// var arr = [1, 2, 3, 4, 5, 6, 7];

// for (var index in arr) {
//     console.log(`index=${index}`);
//     console.log(arr[index]);
// }


for (var key in console) {
    if (console.hasOwnProperty(key)) {
        console.log(`${key} ---> ${console[key]}`);
    }
}