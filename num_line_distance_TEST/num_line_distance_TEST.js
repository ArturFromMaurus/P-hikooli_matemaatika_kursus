function setup() {
  let c= createCanvas(900, 200);
  x_koord=width/2;
  background(255);
  
  create_TEXT();
  Reset();
}

function draw() {
  clear();
  
  background(255);
  
  for (x=-10;x<11;x=x+2){
    strokeWeight(1.5);
    line((x*30)+width/2,height/2,(x*30)+width/2,height/2-10);
  }
  
  for (x=-10;x<11;x=x+1){
    strokeWeight(1);
    line((x*30)+width/2,height/2,(x*30)+width/2,height/2-10);
  }
  
    for (x=-10;x<10;x=x+0.5){
    strokeWeight(1);
    line((x*30)+width/2,height/2-2,(x*30)+width/2,height/2-8);
  }
  
  for (x=-10; x<11;x=x+1){
    fill(0);
    push();
    textSize(14);
    text(x, (x*30)+width/2-3,height/2+17);
    pop();
  }
  strokeWeight(2);
  line((-10*30)+width/2, height/2-5, (10*30)+width/2+30, height/2-5);
  
  //arrow
  line(((10*30)+width/2+30)-10,height/2-10,((10*30)+width/2+30),height/2-5);
  line(((10*30)+width/2+30)-10,height/2,((10*30)+width/2+30),height/2-5); 
  
  fill(255,0,0);
  push();
  strokeWeight(3);
  line((0*30)+width/2,height/2,(0*30)+width/2, height/2-10);
  pop();
  
  createPoints(yl_number_teisendatud_1, yl_number_teisendatud_2);
  

  
  KONTROLL_NUPP.mousePressed(Kontroll);
  RESET_NUPP.mousePressed(Reset);
}

function createPoints(x,y){
  fill(23,197,255);
  push();
  fill(0);
  textSize(16);
  text("B",round(y/15)*15-5, height/2-15);
  text("A",round(x/15)*15-5, height/2-15);
  pop();
  
  circle(round(x/15)*15,height/2-5, 10);
  circle(round(y/15)*15,height/2-5, 10);

}

function Ylesanne() {
  yl_number_1=(round(random(-100,100)/5)*5)/10; // Punkti asukoht arvteljel
  yl_number_2=(round(random(-100,100)/5)*5)/10; // Punkti asukoht arvteljel
  yl_text.html("Arvuta punkti A("+yl_number_1+") ning punkti B("+yl_number_2+") vaheline kaugus.");
  yl_number_teisendatud_1 = (yl_number_1*30)+width/2; // See on punkti asukoht Canvasil
  yl_number_teisendatud_2 = (yl_number_2*30)+width/2; // See on punkti asukoht Canvasil
}

function Kontroll() {
  if (VASTUS.value()==(abs(yl_number_1-yl_number_2)) ){
    result_text.html("Õige!");
  } else {
    result_text.html("Vastus ei sobi!");
  }
}

function Reset(){
  result_text.html("");
  Ylesanne();
  KONTROLL_NUPP=createButton("Kontrolli");
  KONTROLL_NUPP.size(70,40);
  KONTROLL_NUPP.style("background-color",color(80,139,195,255));
  KONTROLL_NUPP.style("color",color(255,255,255,255));
  KONTROLL_NUPP.position(width/2-100, height+30);
  
  
  RESET_NUPP=createButton("Uus ülesanne");
  RESET_NUPP.size(70,40);
  RESET_NUPP.style("background-color",color(80,139,195,255));
  RESET_NUPP.style("color",color(255,255,255,255));
  RESET_NUPP.position(width/2+10,height+30);
  
  VASTUS = createInput();
  VASTUS.position(200,170);
  
}

function create_TEXT(){
  result_text=createP("");
  result_text.style("font-size","16px");
  result_text.position(width/2-30,155);
  
  yl_text=createP("");
  yl_text.style("font-size","20px");
  yl_text.position(150,5);
  
  vastus_text=createP("Vastus:");
  vastus_text.position(150,155);
}

// ENTERit vajutades kontrollib sisestatud vastust.
// Tühikut vajutades genereerib uue ülesande.

function keyPressed() {
  if (keyCode === ENTER){
    Kontroll();
  } else if (keyCode===32) {
    Reset();
  }
}

