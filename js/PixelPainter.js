'use strict';

//module.export

let pixelPainter = document.getElementById('pixelPainter');



// let pixelCanvas = document.createElement('div');
// pixelCanvas.id = 'pixelCanvas';
// pixelCanvas.style.width = '400px';
// pixelCanvas.style.height = '400px';
// //pixelCanvas.innerHTML = 'CANVAS';
// pixelPainter.appendChild(pixelCanvas);

// let eraseButton = document.createElement('button');
// eraseButton.id = 'eraseButton';
// eraseButton.innerHTML = 'erase';
// pixelPainter.appendChild(eraseButton);

// let clearButton = document.createElement('button');
// clearButton.id = 'clearButton';
// clearButton.innerHTML = 'clear';
// pixelPainter.appendChild(clearButton);

// canvas



function PixelPainter(width, height){
  let cellPx = 30;
  let colorSwatchColumns = 6;
  let colorSwatchRows = 9;

  if (typeof width !== 'number' || typeof height !== 'number') {
    alert('width and height have to be a number');
  } else {

    let colorSwatch = document.createElement('div');
    colorSwatch.id = 'colorSwatch';
    colorSwatch.style.width = colorSwatchColumns * cellPx +'px';
    colorSwatch.style.height = colorSwatchRows * cellPx +'px';
    pixelPainter.appendChild(colorSwatch);

    for (var i = 1; i < 55; i++) {
      let colorCell = document.createElement('div');
      colorCell.className = 'colors';
      colorCell.id = 'd';
      colorCell.style.border = 'solid black';
      colorCell.style.width = cellPx + 'px';
      colorCell.style.height = cellPx + 'px';
      colorSwatch.appendChild(colorCell);
    }

    let pixelCanvas = document.createElement('div');
    pixelCanvas.id = 'pixelCanvas';
    pixelCanvas.style.width = width * cellPx +'px';
    pixelCanvas.style.height = height * cellPx +'px';
    pixelPainter.appendChild(pixelCanvas);


    for (var i = 1; i < ((width * height) + 1); i++) {
      let gridCell = document.createElement('div');
      gridCell.className = 'gridCell';
      gridCell.id = 'cell'+i;
      gridCell.style.border = 'solid black';
      gridCell.style.width = cellPx + 'px';
      gridCell.style.height = cellPx + 'px';
      pixelCanvas.appendChild(gridCell);
    }







  }
}

PixelPainter(10,10);


// let n =9;

// for (var i = 1; i < n+1; i++) {
//   let colorCell = document.createElement('div');
//   colorCell.className = 'colorCell';
//   colorCell.innerHTML = i;
//   colorCell.style.border = 'solid black';
//   colorSwatch.appendChild(colorCell);
// }





