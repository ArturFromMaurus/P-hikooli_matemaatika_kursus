function setup() {
  createCanvas(700,200);
  background(55);
  x_coord=500;
}


function draw() {
  clear();
  background(55);
  line_y();
  line_x();
}

function line_y() {
  x1_coord=mouseX;
  
  if (x1_coord>width) {
    x1_coord=width;
  }
  
  strokeWeight(0);
  stroke(0);
  fill(255,204,0);
  rect(x1_coord,60, width, 5);
  fill(255);
  textSize(17);
  text(round(((width-x1_coord)/width),3), (width-x1_coord/10)-50, 60-10);
}

function line_x() {
  x2_coord=mouseX;
  
  if (x2_coord>width) {
    x2_coord=width;
  }
  
  strokeWeight(0);
  stroke(0);
  fill(255,124,0);
  rect((width-(width-x2_coord)*5) , 100, width*5 , 5);
  
  if (x2_coord<(4*width/5)) {
    rect(0, 110, -5*(x2_coord-4*width/5), 5);
  } 
  if (x2_coord<3*width/5){
    rect(width-5*(-x2_coord+3*width/5), 120, width*5 , 5);
  }
  if (x2_coord<2*width/5){
    rect(0, 130, -5*(x2_coord-2*width/5), 5);
  }
  if (x2_coord<width/5) {
    rect(width-5*(-x2_coord+1*width/5), 140, width*5 , 5);
  }
  
  fill(255);
  textSize(17);
  text(round(((5*(width-x2_coord))/width),3), (width-x2_coord/10)-50, height/2-10);

  
  
}