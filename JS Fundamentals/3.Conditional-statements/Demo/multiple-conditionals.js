var first = 5,
    second = 7,
    third = 9,
    biggest;

if (first > second) {
    if (first > third) {
        biggest = first;
    } else {
        biggest = third;
    }
} else if (second > third) {
    biggest = second;
} else {
    biggest = third;
}

console.log(
    `The biggest number is ${biggest} from numbers: ${first}, ${second}, ${third}`);

console.log(
    'The biggest number is ' + biggest + ' from numbers ' +
    first + ', ' + second + ', ' + third);