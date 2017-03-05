'use strict';

var Ball = function (options = {}) {
	var self = {};
	
	var x = options.x || 0;
	var y = options.y || 0;
	var width = options.width || 20;
	var height = options.height || 20;
	var color = options.color || '#aaaaaa';
	var verticalSpeed = 1 || options.verticalSpeed;
	var horizontalSpeed = 1 || options.horizontalSpeed;
	
	self.move = function () {
		x += horizontalSpeed;
		y += verticalSpeed;
	};
	
	self.verticalBounce = function () {
		verticalSpeed = -verticalSpeed;
	};
	
	self.horizontalBounce = function () {
		horizontalSpeed = -horizontalSpeed;
	};
	
	self.getX = function () {
		return x;
	};
	
	self.getY = function () {
		return y;
	};
	
	self.getWidth = function () {
		return width;
	};
	
	self.getHeight = function () {
		return height;
	};
	
	self.getColor = function () {
		return color;
	};
	
	self.getVerticalSpeed = function () {
		return verticalSpeed;
	};
	
	self.getHorizontalSpeed = function () {
		return horizontalSpeed;
	};
		
	return Object.seal(self);
};