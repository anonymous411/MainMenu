
  function setup(){
    createCanvas(600, 400);
  }

  function draw(){
    stroke(mouseX, 0, mouseY)
    line(0, 0, mouseX, mouseY);
    line(0, 800, mouseX, mouseY);
    line(800, 0, mouseX, mouseY);
    line(0, 400, mouseX, mouseY);
    line(400, 400, mouseX, mouseY);
    line(400, 0, mouseX, mouseY);
  }
