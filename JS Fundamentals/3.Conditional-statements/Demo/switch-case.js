var day = 2;

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Working day');
        break;
    case 6:
    case 7:
        console.log('Weekend!');
        break;
    default:
        console.log('Error!');
        break;
}

console.log('after');