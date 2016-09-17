'use strict';

//module.export

let pixelPainter = document.getElementById('pixelPainter');
pixelPainter.className = 'clearfix';



// let pixelCanvas = document.createElement('div');
// pixelCanvas.id = 'pixelCanvas';
// pixelCanvas.style.width = '400px';
// pixelCanvas.style.height = '400px';
// //pixelCanvas.innerHTML = 'CANVAS';
// pixelPainter.appendChild(pixelCanvas);



// canvas



function PixelPainter(width, height){
  let cellPx = 30;
  let colorSwatchColumns = 6;
  let colorSwatchRows = 9;
  let colorPalette = ['CC3333','FF0000','CC0000','990000','660000','FFFFFF',
      'FF6600','FF3300','CC3300','993300','663300','000000',
      'FFFF33','FFFF00','FFCC00','CC9900','996633','333333',
      '00FF00','00CC00','009900','006600','003300','666666',
      '00CCCC','009999','006666','336666','003333','999999',
      '00CCFF','0099FF','0066FF','0033FF','003399','CCCCCC',
      '3366FF','0000FF','0000CC','000099','000066','CCCC99',
      '9933FF','9900CC','663399','660099','330066','9999CC',
      'FF00FF','FF0099','CC0099','990066','660066','666699'];

  if (typeof width !== 'number' || typeof height !== 'number') {
    alert('width and height have to be a number');
  } else {
    // sidebar
    let sideBar = document.createElement('div');
    sideBar.id = 'sideBar';
    pixelPainter.appendChild(sideBar);
    // color palette
    let colorSwatch = document.createElement('div');
    colorSwatch.id = 'colorSwatch';
    colorSwatch.style.width = colorSwatchColumns * cellPx +'px';
    colorSwatch.style.height = colorSwatchRows * cellPx +'px';
    sideBar.appendChild(colorSwatch);

    for (var i = 1; i < 55; i++) {
      let colorCell = document.createElement('div');
      colorCell.className = 'colors';
      colorCell.id = colorPalette[i-1];
      colorCell.style.border = 'solid black';
      colorCell.style.width = cellPx + 'px';
      colorCell.style.height = cellPx + 'px';
      colorCell.style.backgroundColor = colorPalette[i-1];
      colorSwatch.appendChild(colorCell);
    }
    // buttons
    let buttonContainer = document.createElement('div');
    buttonContainer.id = 'buttonContainer';

    let eraseButton = document.createElement('button');
    eraseButton.id = 'eraseButton';
    eraseButton.innerHTML = 'erase';
    buttonContainer.appendChild(eraseButton);

    let clearButton = document.createElement('button');
    clearButton.id = 'clearButton';
    clearButton.innerHTML = 'clear';
    buttonContainer.appendChild(clearButton);

    sideBar.appendChild(buttonContainer);
    // canvas
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





