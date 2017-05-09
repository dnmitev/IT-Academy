var a = 5,
    b = 6,
    c = 8;

// if (((a + b) > c) && ((a + c) > b) && ((b + c) > a)) {
//     console.log('Triangle can be constructed');
// } else {
//     console.log('Triangle CANNOT be constructed');
// }

var isTrianglePossible = false;
if ((a + b) > c) {
    isTrianglePossible = true;
} else if ((a+c)>b) {
    isTrianglePossible = true;
} else if ((b+c)>a) {
    isTrianglePossible = true;
} else {
    isTrianglePossible = false;
}

if (isTrianglePossible) {
    console.log('Triangle can be constructed');
} else {
    console.log('Triangle CANNOT be constructed');
}