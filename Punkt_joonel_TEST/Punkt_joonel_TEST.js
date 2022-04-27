var r=255,g=255,b=255;
var ülesannete_loendur=0;
var õige_vastus=0;
var lõpetamise_tingimus=false;

function setup() {
  createCanvas(650, 300);
  background(r,g,b);
  create_TEXTS();
  Reset();
}

function draw() {
  background(r,g,b);
  ASUB_NUPP.mousePressed(sobib);
  VALE_NUPP.mousePressed(ei_sobi);
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
    circle(width,0,mouseY*2);
    pop();
    
    push();
    fill(220, 120, 52);
    strokeWeight(0);
    circle(0,height, mouseY-70);
    pop();
    
    push();
    fill(22,56,50);
    strokeWeight(0);
    circle(width,0,mouseX)
    pop();
  }
}

function Ylesanne(n){
  
  X=(round_0(random(-100,100)/5)*5)/10;
  
  // ESIMENE MUDEL
  if (n==0){
  ruutliige_A=(round_0(random(-100,100)/5)*5)/10;
  lineaarliige_B=(round_0(random(-100,100)/5)*5)/10;
  vabaliige_C=(round_0(random(-100,100)/5)*5)/10;
  ruutliige_A_str=str(ruutliige_A)
  if (lineaarliige_B>=0){
    lineaarliige_B_str="+ "+str(lineaarliige_B);
  } else {
    lineaarliige_B_str=str(lineaarliige_B)
  }
  if (vabaliige_C>=0){
    vabaliige_C_str="+ "+str(vabaliige_C);
  } else {
    vabaliige_C_str=str(vabaliige_C)
  }
  võrrand=ruutliige_A*X*X+lineaarliige_B*X+vabaliige_C;
  LaTeX_str="y="+ruutliige_A_str+"x^{2}"+lineaarliige_B_str+"x"+vabaliige_C_str;
  }
  
  // TEINE MUDEL
  else if (n==1){
  lineaarliige_B=(round_0(random(-100,100)/5)*5)/10;
  vabaliige_C=(round_0(random(-100,100)/5)*5)/10;
  lineaarliige_B_str=str(lineaarliige_B);
  if (vabaliige_C>=0){
    vabaliige_C_str="+ "+str(vabaliige_C);
  } else {
    vabaliige_C_str=str(vabaliige_C)
  }
  LaTeX_str="y="+lineaarliige_B_str+"x"+vabaliige_C_str;
  võrrand=lineaarliige_B*X+vabaliige_C;
  }
  
// KOLMAS MUDEL
//   else if (n==2){
//   nimetaja=(round(random(-100,100)/5)*5)/10;
//   lugeja=(round(random(-100,100)/5)*5)/10;
//   if (nimetaja<0 || lugeja<0){
//       nimetaja_str=str(abs(nimetaja));
//       lugeja_str=str(abs(lugeja));
//       LaTeX_str="y=-"+"\\dfrac{"+lugeja_str+"}{"+nimetaja_str+"x}";
//       if (nimetaja==0){
        
//       }
    
//   } else if (nimetaja<0 && lugeja<0) {
//       nimetaja_str=str(abs(nimetaja));
//       lugeja_str=str(abs(lugeja));
//       LaTeX_str="y="+"\\dfrac{"+lugeja_str+"}{"+nimetaja_str+"x}";
//   } else if (nimetaja>0 && lugeja>=0){
//     nimetaja_str=str(nimetaja);
//     lugeja_str=str(lugeja);
//     LaTeX_str="y=\\dfrac{"+lugeja_str+"}{"+nimetaja_str+"x}";
//     võrrand=lugeja/(nimetaja*X);
//   }
//   if (nimetaja==0 || X==0) {
//     LaTeX_str="y=\\dfrac{"+lugeja_str+"}{"+nimetaja_str+"x}";
//   }
// }
  
  punkt_õige=[X, round_2(võrrand)];
  punkt_vale=[X, round_2(võrrand+random(1,10))];
  kaks_punkti=[punkt_õige, punkt_vale];
  
  valik=random(kaks_punkti);

  katex.render( LaTeX_str, LaTeX_võrrand.elt);
  
  ül_text_2.html("Kontrolli, kas punkt P("+valik[0]+", "+valik[1]+") asub funktsiooniga määratud<br>joonel? Vajadusel ümarda vastused 2 kohta pärast koma.");
}

function Kontroll(){
  if ((valik[1]==võrrand)==arvamus ){
    tulemus_txt.html("Õige!");
    r=244;
    g=255;
    b=250;
    push();
    fill(0,255,0);
    strokeWeight(5);
    line(width/2-120,height/2,width/2-120+50,height/2);
    pop();
    õige_vastus=õige_vastus+1;
    ASUB_NUPP.attribute("disabled","");
    VALE_NUPP.attribute("disabled","");
    
  } else{
    tulemus_txt.html("Vale!");
    r=255;
    g=244;
    b=250;
    ASUB_NUPP.attribute("disabled","");
    VALE_NUPP.attribute("disabled","");
  }
}


function create_TEXTS(){
  p1="...";
  p2="...";
  ül_text_1=createP("On antud järgmine funktsioon: ");
  ül_text_1.position(50,20);
  ül_text_1.style("font-size","20px");
  
  LaTeX_võrrand=createP("");
  LaTeX_võrrand.position(310,15);
  LaTeX_võrrand.style("font-size","20px");
  
  ül_text_2=createP("Kontrolli, kas punkt P(,) asub funktsiooniga määratud joonel<br>?");
  ül_text_2.position(50,60);
  ül_text_2.style("font-size","20px");
  
  tulemus_txt=createP("");
  tulemus_txt.position(width/2-180,height/2+50);
  tulemus_txt.style("font-size","20px");
  
  staatus_txt=createP("Tulemus: ");
  staatus_txt.position(width/2-260,height/2+50);
  staatus_txt.style("font-size","20px");
}



function Reset(){
  
  
  if(ülesannete_loendur>0){
    
    VALE_NUPP.remove();
    ASUB_NUPP.remove();
    RESET_NUPP.remove();
    LÕPETA_NUPP.remove();
    
  }
  
  LaTeX_võrrand.html("");
  ül_text_2.html("");
  tulemus_txt.html("");
  Ylesanne(random([0,1]));
  ASUB_NUPP=createButton("Asub");
  ASUB_NUPP.size(70,40);
  ASUB_NUPP.style("background-color",color(80,139,195,255));
  ASUB_NUPP.style("color",color(255,255,255,255));
  ASUB_NUPP.position(width/2-250, height/2);
  
  VALE_NUPP=createButton("Ei asu");
  VALE_NUPP.size(70,40);
  VALE_NUPP.style("background-color",color(80,139,195,255));
  VALE_NUPP.style("color",color(255,255,255,255));
  VALE_NUPP.position(width/2-150, height/2);
  
  
  RESET_NUPP=createButton("Uus ülesanne");
  RESET_NUPP.size(70,40);
  RESET_NUPP.style("background-color",color(80,139,195,255));
  RESET_NUPP.style("color",color(255,255,255,255));
  RESET_NUPP.position(width/2+90, height/2);
  
  LÕPETA_NUPP=createButton("Lõpeta test");
  LÕPETA_NUPP.size(70,40);
  LÕPETA_NUPP.style("background-color",color(80,139,195,255));
  LÕPETA_NUPP.style("color",color(255,255,255,255));
  LÕPETA_NUPP.position(width/2+190, height/2);
  
  r=255
  g=255
  b=255;
  ülesannete_loendur=ülesannete_loendur+1;

  
}

function sobib(){
  arvamus= true;
  Kontroll();
}

function ei_sobi(){
  arvamus = false;
  Kontroll();
}


function Lõpp(){

  
  ASUB_NUPP.attribute("disabled","");
  RESET_NUPP.attribute("disabled","");
  LÕPETA_NUPP.attribute("disabled","");
  VALE_NUPP.attribute("disabled","");
  
  
  ül_text_1.remove();
  ül_text_2.remove();
  LaTeX_võrrand.remove();
  tulemus_txt.remove();
  staatus_txt.remove();
  
  RESET_NUPP.remove();
  LÕPETA_NUPP.remove();
  ASUB_NUPP.remove();
  VALE_NUPP.remove();
    
  
  
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
