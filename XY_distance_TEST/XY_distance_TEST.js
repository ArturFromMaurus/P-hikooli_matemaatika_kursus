var X=[];
var Y=[];

var xmin=-10; // HETKE SEISUGA PEAVAD NEED KOLM KOKKU KLAPPIMA!!!
var xmax=10;  // Teisisõnu xmin + xmax absoluutväärtused peavad kokku andma jaotiste arvu. 
var jaotiste_arv=20;


function setup() {
  createCanvas(500,500);
  x_koord=width/2;
  y_koord=height/2;
  Write_texts();
  Reset();
}


function draw() {
  background(255);
  XYplane(jaotiste_arv, 0.25, 2); //parameetriks on [jaotiste_arv(teljel), tausta_jaotise_paksus, telje_jaotiste_paksus]
  create_Points();
  KONTROLL_NUPP.mousePressed(Kontroll);
  RESET_NUPP.mousePressed(Reset);
}



function XYplane(jaotiste_arv, tausta_jaotise_paksus, telje_jaotiste_paksus) {
  //jaotised Y teljel
  var jaotisY=0;
  var Y_jaotise_väärtus=xmax;
  while (jaotisY <= height) {
    strokeWeight(tausta_jaotise_paksus);
    stroke(200);
    line(width*0, jaotisY , width, jaotisY);
    strokeWeight(telje_jaotiste_paksus);
    stroke(0);
    line(width/2-5, jaotisY , width/2+5, jaotisY);
    strokeWeight(0);
    stroke(1);
    text(Y_jaotise_väärtus, width/2+10, jaotisY );
    Y_jaotise_väärtus=Y_jaotise_väärtus-1;
    jaotisY = jaotisY+height/jaotiste_arv;
    
  }
  //jaotised X teljel
  var jaotisX = 0;
  var X_jaotise_väärtus=xmin;
  while (jaotisX <= width) {
    strokeWeight(tausta_jaotise_paksus);
    stroke(200);
    line(jaotisX, height*0 , jaotisX, height);
    strokeWeight(telje_jaotiste_paksus);
    stroke(0);
    line(jaotisX, height/2+5 , jaotisX, height/2-5);
    strokeWeight(0);
    stroke(0);
    text(X_jaotise_väärtus, jaotisX, height/2+20);
    X_jaotise_väärtus=X_jaotise_väärtus+1;
    jaotisX = jaotisX+width/jaotiste_arv;
  }
    // ----- X-Y plane -----
  strokeWeight(telje_jaotiste_paksus);
  stroke(0);
    //Y-axis
  line(width/2, height*0 , width/2 , height);
    //arrow
  line(width/2-5, 0+15, width/2, 0);
  line(width/2+5, 0+15, width/2, 0);
    //X-axis
  line(width*0, height/2, width, height/2);
    //arrow
  line(width-15,height/2-5,width, height/2);
  line(width-15,height/2+5,width, height/2); 
}


function create_Points(){
  push();
  fill(255,204,0);
  circle(round(yl_X1_teisendatud/12.5)*12.5, round(yl_Y1_teisendatud/12.5)*12.5, 10);
  circle(round(yl_X2_teisendatud/12.5)*12.5, round(yl_Y2_teisendatud/12.5)*12.5, 10);
  
  pop();
  
  
}

function Ylesanne(){
  yl_X1=(round(random(-100,100)/5)*5)/10; //Punkt XY teljestikul
  yl_Y1=(round(random(-100,100)/5)*5)/10; //Punkt XY teljestikul
  yl_X1_teisendatud = (yl_X1*25)+width/2; //Punkt Canvasil
  yl_Y1_teisendatud = -1*(yl_Y1*25)+height/2; // Punkt Canvasil
  
  
  yl_X2=(round(random(-100,100)/5)*5)/10;
  yl_Y2=(round(random(-100,100)/5)*5)/10;
  yl_X2_teisendatud = (yl_X2*25)+width/2;
  yl_Y2_teisendatud = -1*(yl_Y2*25)+height/2;
  
  distance_of_points = round(sqrt((yl_X1-yl_X2)*(yl_X1-yl_X2)+(yl_Y1-yl_Y2)*(yl_Y1-yl_Y2))*10)/10;
  yl_text.html("Leia punkti A("+yl_X1+"; "+yl_Y1+") ning punkti B("+yl_X2+"; "+yl_Y2+") vaheline kaugus.");
  yl_text2.html("Vastus ümarda 1 koht pärast koma.")
  vastus_TEXT.html("Vastus: ");
}

function Write_texts(){
  yl_text=createP("");
  yl_text.position(35,height+5);
  yl_text2=createP("");
  yl_text2.position(35,height+27);
  
  vastus_TEXT = createP("");
  vastus_TEXT.position(35,height+90);
  
  result_text=createP("");
  result_text.position(35,height+55);
}

function Kontroll(){
  if (VASTUS.value()==distance_of_points ){
    result_text.html("Õige!");
  } else {
    result_text.html("Asukoht ei sobi!");
  }
}


function Reset(){
  result_text.html("");
  Ylesanne();
  KONTROLL_NUPP=createButton("Kontrolli");
  KONTROLL_NUPP.size(70,40);
  KONTROLL_NUPP.style("background-color",color(80,139,195,255));
  KONTROLL_NUPP.style("color",color(255,255,255,255));
  KONTROLL_NUPP.position(4*width/5-100, height+95);
  
  
  
  RESET_NUPP=createButton("Uus ülesanne");
  RESET_NUPP.size(70,40);
  RESET_NUPP.style("background-color",color(80,139,195,255));
  RESET_NUPP.style("color",color(255,255,255,255));
  RESET_NUPP.position(4*width/5+10,height+95);
  
  VASTUS = createInput();
  VASTUS.position(90,height+105);
  
}


function keyPressed() {
  if (keyCode === ENTER){
    Kontroll();
  } else if (keyCode===32) {
    Reset();
  }
}
