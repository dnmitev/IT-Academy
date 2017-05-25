var animal = {
    makeNoise: function() {
        console.log('The ' + this.type + ' makes noise "' + this.noise + '"');
    }
};

var dog = {
    type: 'dog',
    noise: 'Woof-woof'
};
debugger;

dog.__proto__ = animal; // var dog = new Animal('dog', 'woof-woof');
dog.makeNoise();

var cat = {
    type: 'cat',
    noise: 'miayu'
}

cat.__proto__ = animal;
cat.makeNoise();