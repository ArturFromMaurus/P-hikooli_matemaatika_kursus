var õige_vastus=0;
var ülesannete_loendur=0;
lõpetamise_tingimus=false;

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
  
  LÕPETA_NUPP.mousePressed(Lõpp);
  if(lõpetamise_tingimus==true){
    
    push();
    fill(22, 56, 50);
    rect(0,0,width,height);
    pop();
    

    
    push();
    fill(48, 25, 52);
    strokeWeight(0);
    circle(width,0,mouseX*2);
    pop();
    
    push();
    fill(220, 120, 52);
    strokeWeight(0);
    circle(0,height, mouseX-70);
    pop();
    
    push();
    fill(22,56,50);
    strokeWeight(0);
    circle(width,0,mouseY)
    pop();
  }
  
}

function createPoints(x,y){
  fill(23,197,255);
  push();
  fill(0);
  textSize(16);
  text("B",round_0(y/15)*15-5, height/2-15);
  text("A",round_0(x/15)*15-5, height/2-15);
  pop();
  
  circle(round_0(x/15)*15,height/2-5, 10);
  circle(round_0(y/15)*15,height/2-5, 10);

}

function Ylesanne() {
  yl_number_1=(round_0(random(-100,100)/5)*5)/10; // Punkti asukoht arvteljel
  yl_number_2=(round_0(random(-100,100)/5)*5)/10; // Punkti asukoht arvteljel
  yl_text.html("Arvuta punkti A("+yl_number_1+") ning punkti B("+yl_number_2+") vaheline kaugus.");
  yl_number_teisendatud_1 = (yl_number_1*30)+width/2; // See on punkti asukoht Canvasil
  yl_number_teisendatud_2 = (yl_number_2*30)+width/2; // See on punkti asukoht Canvasil
}

function Kontroll() {
  if (VASTUS.value()==(abs(yl_number_1-yl_number_2)) ){
    result_text.html("Õige!");
    result_text.style("color","green");
    õige_vastus=õige_vastus+1;
    KONTROLL_NUPP.attribute("disabled","");
  } else {
    result_text.html("Vastus ei sobi!");
    result_text.style("color","red");
  }
}

function Reset(){
    if(ülesannete_loendur>0){
    
    RESET_NUPP.remove();
    LÕPETA_NUPP.remove();
    KONTROLL_NUPP.remove()
    VASTUS.remove();
  }
  
  
  
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
  
  LÕPETA_NUPP=createButton("Lõpeta");
  LÕPETA_NUPP.size(70,40);
  LÕPETA_NUPP.style("background-color",color(80,139,195,255));
  LÕPETA_NUPP.style("color",color(255,255,255,255));
  LÕPETA_NUPP.position(width/2+110,height+30);
  
  VASTUS = createInput();
  VASTUS.position(200,170);
  
  ülesannete_loendur=ülesannete_loendur+1;
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




function Lõpp(){

  
  KONTROLL_NUPP.attribute("disabled","");
  RESET_NUPP.attribute("disabled","");
  LÕPETA_NUPP.attribute("disabled","");

    RESET_NUPP.remove();
    LÕPETA_NUPP.remove();
    KONTROLL_NUPP.remove();
    yl_text.remove();
    result_text.remove();
    VASTUS.remove();
    vastus_text.remove();

  
  Tulemus=createP("Tulemus: "+str(round_2((õige_vastus/ülesannete_loendur)*100))+"%<br>Kogu ülesannete arv: "+str(ülesannete_loendur)+"<br>Õigeid lahendusi: "+str(õige_vastus));
  Tulemus.position(width/2-100,height/2-100);
  Tulemus.style("font-size","28px");
  Tulemus.style("color",color(255,255,255));
  
  
  
  lõpetamise_tingimus=true;
}


function round_0(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)) )
}

function round_1(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)*10)/10 )
}

function round_2(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)*100)/100 )
}

function round_3(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)*1000)/1000 )
}
