var PixelPainter = require('./Pixelpainter.js');

'use strict';

let pixelPainter = document.getElementById('pixelPainter');

let colorSwatch = document.createElement('div');
colorSwatch.id = 'colorSwatch';
//colorSwatch.innerHTML = 'color Swatch';
pixelPainter.appendChild(colorSwatch);

let pixelCanvas = document.createElement('div');
pixelCanvas.id = 'pixelCanvas';
//pixelCanvas.innerHTML = 'CANVAS';
pixelPainter.appendChild(pixelCanvas);

let eraseButton = document.createElement('button');
eraseButton.id = 'eraseButton';
eraseButton.innerHTML = 'erase';
pixelPainter.appendChild(eraseButton);

let clearButton = document.createElement('button');
clearButton.id = 'clearButton';
clearButton.innerHTML = 'clear';
pixelPainter.appendChild(clearButton);

// canvas
let n =9;

for (var i = 1; i < n+1; i++) {
  let gridCell = document.createElement('div');
  gridCell.className = 'gridCell';
  gridCell.innerHTML = i;
  gridCell.style.border = 'solid black';
  pixelCanvas.appendChild(gridCell);
}

for (var i = 1; i < n+1; i++) {
  let colorCell = document.createElement('div');
  colorCell.className = 'colorCell';
  colorCell.innerHTML = i;
  colorCell.style.border = 'solid black';
  colorSwatch.appendChild(colorCell);
}