'use strict';
var ball1 = Ball();
var ball2 = Ball({horizontalSpeed: -1, x: 638, y: 123, color: '#ff0000', width: 25, height: 60});
var ball3 = Ball({verticalSpeed: -1, x: 235, y: 453, color: '#00ff00', width: 75, height: 50});
var ball4 = Ball({horizontalSpeed: 1, x: 300, y: 300, color: '#0000ff', width: 50, height: 30});
var board = Board();

board.addObject(ball1);
board.addObject(ball2);
board.addObject(ball3);
board.addObject(ball4);

setInterval(board.frame, 1000/60);