(function () {
    'use strict'

    	var animals = [{
			title: 'Cats',
			url: 'images/cats.jpg'
		}, {
			title: 'Cow',
			url: 'images/cow.jpg'
		}, {
			title: 'Dogs',
			url: 'images/dogs.jpg'
		}, {
			title: 'Eagle',
			url: 'images/eagle.jpg'
		}, {
			title: 'Elephant',
			url: 'images/elephant.jpg'
		}, {
			title: 'Hamster',
			url: 'images/hamster.jpg'
		}, {
			title: 'Horse',
			url: 'images/horse.jpg'
		}, {
			title: 'Lion',
			url: 'images/lion.jpg'
		}, {
			title: 'Rabbits',
			url: 'images/rabbits.jpg'
		}, {
			title: 'Rhinos',
			url: 'images/rhinos.jpg'
		}, {
			title: 'Squirrel',
			url: 'images/squirrel.jpg'
		}, {
			title: 'Tigers',
			url: 'images/tigers.jpg'
		}];

        window.addEventListener('load', onWindowLoad);

        function onWindowLoad(ev) {
            Image.createImagesPreviewer('#container', animals);
        }
}());