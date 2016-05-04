var animal = {
    makeNoise: function() {
        console.log('The ' + this.type + ' makes noise "' + this.noise + '"');
    }
};

var dog = {
    type: 'dog',
    noise: 'Woof-woof'
};

dog.__proto__ = animal;
dog.makeNoise();