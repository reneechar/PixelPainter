'use strict';

//module.export

let pixelPainter = document.getElementById('pixelPainter');
pixelPainter.className = 'clearfix';

function PixelPainter(width, height){
  let gridCellPx = 10;
  let colorCellPx = 30;
  let colorSwatchColumns = 6;
  let colorSwatchRows = 9;
  let selectedColor;
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
    colorSwatch.style.width = colorSwatchColumns * colorCellPx +'px';
    colorSwatch.style.height = colorSwatchRows * colorCellPx +'px';
    sideBar.appendChild(colorSwatch);

    for (var i = 1; i < 55; i++) {
      let colorCell = document.createElement('div');
      colorCell.className = 'colors';
      colorCell.id = colorPalette[i-1];
      colorCell.style.border = '1px solid black';
      colorCell.style.width = colorCellPx + 'px';
      colorCell.style.height = colorCellPx + 'px';
      colorCell.style.backgroundColor = colorPalette[i-1];
      colorSwatch.appendChild(colorCell);
      colorCell.addEventListener('click', function() {
        selectedColor = colorCell.id;
      });
    }
    // buttons
    let buttonContainer = document.createElement('div');
    buttonContainer.id = 'buttonContainer';

    let eraseButton = document.createElement('button');
    eraseButton.id = 'eraseButton';
    eraseButton.innerHTML = 'erase';
    buttonContainer.appendChild(eraseButton);
    eraseButton.addEventListener('click', function(){
      selectedColor = 'transparent';
    });

    let clearButton = document.createElement('button');
    clearButton.id = 'clearButton';
    clearButton.innerHTML = 'clear';
    buttonContainer.appendChild(clearButton);
    clearButton.addEventListener('click', function(){
      let gridCell = document.getElementsByClassName('gridCell');
      for (var i = 0; i < gridCell.length; i++) {
        gridCell[i].style.backgroundColor = 'transparent';
      }
    });

    sideBar.appendChild(buttonContainer);
    // canvas
    let pixelCanvas = document.createElement('div');
    pixelCanvas.id = 'pixelCanvas';
    pixelCanvas.style.width = width * gridCellPx +'px';
    pixelCanvas.style.height = height * gridCellPx +'px';
    pixelPainter.appendChild(pixelCanvas);

    let startDrag = false;
    for (var i = 1; i < ((width * height) + 1); i++) {
      let gridCell = document.createElement('div');
      gridCell.className = 'gridCell';
      gridCell.id = 'cell'+i;
      gridCell.style.border = '1px dotted grey';
      gridCell.style.width = gridCellPx + 'px';
      gridCell.style.height = gridCellPx + 'px';
      pixelCanvas.appendChild(gridCell);
      gridCell.addEventListener('click', function() {
        gridCell.style.backgroundColor = selectedColor;
        startDrag = !startDrag;
      });
      gridCell.addEventListener('mouseenter', function(){
        if (startDrag) {
          gridCell.style.backgroundColor = selectedColor;
        }
      });
    }
  }
}

PixelPainter(50,40);






