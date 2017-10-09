var obj =  {
    "monday": "понеделник",
    "tuesday": "вторник"
};

// for-of works pretty well but when we have
// the Symbol implemented so for-of knows how to iterate
var arr = [1,2,3,4];
for (var key of arr) {
    console.log(arr[key]);
}

// for (var val of obj) {
//     console.log(val);
// }

// for (var key in obj) {
//     console.log(key)
// }

// for (var key of console) {
//    console.log(`${key}`)
// }