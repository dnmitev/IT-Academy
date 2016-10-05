var sample = "This is a sample string";
var test = ' and it\'s used just for the test';

console.log(sample.charAt(0)); // T <---> sample[0]
console.log(sample[0]); // T
debugger;

var testStr = sample.concat(test);
console.log(testStr); // This is a sample string and it\'s used just for the test
debugger;

var newSample = sample.replace('sample', 'test');
console.log(sample); // the initial string ramains immutable
console.log(newSample); // new string is created with the changed string in it

console.log(sample.indexOf('is')); // 2
console.log(sample.lastIndexOf('is')); // 5

var whitespaceSample = '   I have some trailing whitespaces and some leading whitespaces       ';
console.log(whitespaceSample.length);
console.log(whitespaceSample.trim().length);
console.log(whitespaceSample.trimLeft().length);
console.log(whitespaceSample.trimRight().length);

var strArray = sample.split(' ');
console.log(strArray);

console.log(sample.substr(5)); // is a sample string
console.log(sample.substr(5, 11)); // is a sample

console.log(sample.substring(5)); // is a sample string
console.log(sample.substring(5, 17)); // is a sample

console.log(sample.endsWith('ng'));
console.log(sample.endsWith('asd'));

var uppercased = 'PESHO';
console.log(uppercased.toLowerCase());
