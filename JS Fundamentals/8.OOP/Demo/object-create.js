var animal = {
    makeNoise: function() {
        console.log('The ' + this.type + ' makes noise "' + this.noise + '"');
    }
};

var dog = Object.create(animal);

dog.type = 'dog';
dog.noise = 'Woof-woof';

dog.makeNoise();