'use strict';

var Board = function (options = {}) {
	var self = {};
	
	var objects = [];
	var canvas = options.canvas || document.getElementsByTagName('canvas')[0];
	var ctx = canvas.getContext('2d');
	
	console.log(canvas.width);
	console.log(canvas.height);
	
	var moveObjects = function () {
		objects.forEach(function (object) {
			object.move();
		});
	};
	
	var detectCollisions = function () {
		
		var wallCollision = function (object) {
			if (object.getX() <= 0 || (object.getX() + object.getWidth()) > canvas.width) object.horizontalBounce();
			if (object.getY() <= 0 || (object.getY() + object.getHeight()) > canvas.height) object.verticalBounce();
		};
		
		var areColliding = function (objectA, objectB) {
			return (
				objectA.getX() < objectB.getX() + objectB.getWidth() &&
				objectA.getX() + objectA.getWidth() > objectB.getX() &&
				objectA.getY() < objectB.getY() + objectB.getHeight() &&
				objectA.getHeight() + objectA.getY() > objectB.getY()
			);
		}
		
		objects.forEach(function (currentObject, index, objects) {
			wallCollision(currentObject);
			for (var i = index + 1; i < objects.length; i++) {
				var nextObject = objects[i];
				if (areColliding(currentObject, nextObject)) {
					if (currentObject.getHorizontalSpeed() == - nextObject.getHorizontalSpeed()) {
						currentObject.horizontalBounce();
						nextObject.horizontalBounce();
					}
					if (currentObject.getVerticalSpeed() == - nextObject.getVerticalSpeed()) {
						currentObject.verticalBounce();
						nextObject.verticalBounce();
					}
				}
			}
		});
	};
	
	var draw = function () {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		objects.forEach(function (object) {
			ctx.fillStyle = object.getColor();
			ctx.fillRect(object.getX(), object.getY(), object.getWidth(), object.getHeight());
		});
	};
	
	self.frame = function () {
		moveObjects();
		draw();
		detectCollisions();
	};
	
	self.addObject = function (object) {
		objects.push(object);
	};
	
	return Object.seal(self);
};