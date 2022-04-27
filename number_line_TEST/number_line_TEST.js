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
  createPoint(x_koord);
  
  
  
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

function createPoint(x){
  fill(23,197,255);
  circle(round_0(x/15)*15,height/2-5, 10);
  
}

function mousePressed(){
  if (mouseX>0 && mouseX<width && mouseY>0 && mouseY<height){
    if (mouseX>750){
      x_koord=750;
    } else if (mouseX<150){
      x_koord=150;
    } else {
      x_koord=mouseX
    }
  }
}

// function mouseDragged(){
//   if (mouseX>0 && mouseX<width && mouseY>0 && mouseY<height){
//     if (mouseX>750){
//       x_koord=750;
//     } else if (mouseX<150){
//       x_koord=150;
//     } else {
//       x_koord=mouseX
//     }
//   }
// }

function Ylesanne() {
  yl_number=(round_0(random(-100,100)/5)*5)/10;
  yl_text.html("Märgi teljele punkt P("+yl_number+").");
  yl_text.position(20,10);
  yl_number_teisendatud = (yl_number*30)+width/2;
}

function Kontroll() {
  if (round_0(x_koord/15)*15==yl_number_teisendatud){
    result_text.html("Õige!");
    result_text.style("color","green");
    õige_vastus=õige_vastus+1;
    KONTROLL_NUPP.attribute("disabled","");
  } else {
    result_text.html("Asukoht ei sobi!");
    result_text.style("color","red");
  }
}

function Reset(){
  
  
  if(ülesannete_loendur>0){
    
    RESET_NUPP.remove();
    LÕPETA_NUPP.remove();
    KONTROLL_NUPP.remove()
    
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
  
  ülesannete_loendur=ülesannete_loendur+1;
  
}

function create_TEXT(){
  result_text=createP("");
  result_text.style("font-size","20px");
  result_text.position(width/2-30,10);
  
  yl_number=0;
  yl_text=createP("");
  yl_text.style("font-size","20px");
  yl_text.position(20,5);
}

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
