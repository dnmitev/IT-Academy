// throw new Error('I am a type error');
// throw 'I am simple custom error with just a message';
throw {
    message: 'I am complex error',
    type: 'complex custom error',
    value: 666
};