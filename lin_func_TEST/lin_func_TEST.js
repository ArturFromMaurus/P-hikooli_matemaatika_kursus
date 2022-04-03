var X=[];
var Y=[];
var x_koord=0.0, y_koord=0.0;

var xmin=-10; // HETKE SEISUGA PEAVAD NEED KOLM KOKKU KLAPPIMA!!!
var xmax=10;  // Teisisõnu xmin + xmax absoluutväärtused peavad kokku andma jaotiste arvu. 
var jaotiste_arv=20;


function setup() {
  createCanvas(500,800);
  x_koord=width/2;
  y_koord=height/2;
  Write_texts();
  Reset();
}


function draw() {
  background(255);
  XYplane(jaotiste_arv, 0.25, 2); //parameetriks on [jaotiste_arv(teljel), tausta_jaotise_paksus, telje_jaotiste_paksus]
  create_a_Point();
  create_TABLE();
  KONTROLL_NUPP.mousePressed(Kontroll);
  RESET_NUPP.mousePressed(Reset);
}



function XYplane(jaotiste_arv, tausta_jaotise_paksus, telje_jaotiste_paksus) {
  //jaotised Y teljel
  var jaotisY=0;
  var Y_jaotise_väärtus=xmax;
  while (jaotisY <= height-300) {
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
    jaotisY = jaotisY+(height-300)/jaotiste_arv;
    
  }
  //jaotised X teljel
  var jaotisX = 0;
  var X_jaotise_väärtus=xmin;
  while (jaotisX <= width) {
    strokeWeight(tausta_jaotise_paksus);
    stroke(200);
    line(jaotisX, (height-300)*0 , jaotisX, (height-300));
    strokeWeight(telje_jaotiste_paksus);
    stroke(0);
    line(jaotisX, (height-300)/2+5 , jaotisX, (height-300)/2-5);
    strokeWeight(0);
    stroke(0);
    text(X_jaotise_väärtus, jaotisX, (height-300)/2+20);
    X_jaotise_väärtus=X_jaotise_väärtus+1;
    jaotisX = jaotisX+width/jaotiste_arv;
  }
    // ----- X-Y plane -----
  strokeWeight(telje_jaotiste_paksus);
  stroke(0);
    //Y-axis
  line(width/2, (height-300)*0 , width/2 , (height-300));
    //arrow
  line(width/2-5, 0+15, width/2, 0);
  line(width/2+5, 0+15, width/2, 0);
    //X-axis
  line(width*0, (height-300)/2, width, (height-300)/2);
    //arrow
  line(width-15,(height-300)/2-5,width, (height-300)/2);
  line(width-15,(height-300)/2+5,width, (height-300)/2); 
}

points_on_plot=0;

function mousePressed() {
  
  if (mouseX>0 && mouseX<width && mouseY>0 && mouseY<(height-300)){
    x_koord=mouseX;
    y_koord=mouseY;
    points_on_plot=points_on_plot+1;
  }
}



function create_a_Point(){
  
  if (points_on_plot==1) {
    first_point_X = x_koord;
    first_point_Y = y_koord;
    second_point_X = -10;
    second_point_Y = -10;
  } else if (points_on_plot==2) {
        first_point_X = first_point_X;
        first_point_Y = first_point_Y;
        second_point_X = x_koord;
        second_point_Y = y_koord;
        
  } else if (points_on_plot>2) {
    points_on_plot=0;
    first_point_X = -10;
    first_point_Y = -10;
    second_point_X = -10;
    second_point_Y = -10;
  }
    push();
    fill(0,139,195);
    C1=circle(round(first_point_X/12.5)*12.5, round(first_point_Y/12.5)*12.5, 10);
    pop();
    push();
    strokeWeight(4);
    stroke(255);
    text("A",round(first_point_X/12.5)*12.5-5, round(first_point_Y/12.5)*12.5-10 )
    pop();
  
  
    push();
    fill(0,139,195);
    C2=circle(round(second_point_X/12.5)*12.5, round(second_point_Y/12.5)*12.5, 10);
    pop();
    push();
    strokeWeight(4);
    stroke(255);
    text("B",round(second_point_X/12.5)*12.5-5, round(second_point_Y/12.5)*12.5-10 )
    pop();
}

function Ylesanne(){
  tous_K=(round(random(-100,100)/5)*5)/10;
  vabaliige_B=(round(random(-100,100)/5)*5)/10;

  if (vabaliige_B>=0){
    vabaliige_B_str="+ "+str(vabaliige_B);
  } else {
    vabaliige_B_str=str(vabaliige_B)
  }
  
  yl_text.html("On antud funktsioon: y= "+tous_K +"x "+vabaliige_B_str+"<br> Täida funktsiooni väärtustetabel, ning <br> kanna leitud punktid graafikule.");
}

function create_TABLE(){
  line(35,(height-300)+100,200,(height-300)+100); // horizontal line 1
  line(35,(height-300)+125,200,(height-300)+125); //horizontal line 2
  line(35,(height-300)+100,35,(height-300)+150); //horizontal line 3
  
  line(35,(height-300)+150,200,(height-300)+150); //vertical line 1
  line(70,(height-300)+100,70,(height-300)+150); //vertical line 2
  line(130,(height-300)+100,130,(height-300)+150); //vertical line 3
  line(200,(height-300)+100,200,(height-300)+150); //vertical line 2
  push();
  strokeWeight(0.5);
  text("X",45,(height-300)+117);
  text("Y",45,(height-300)+142);
  pop();
}

function Write_texts(){
  yl_text=createP("");
  yl_text.position(35,(height-300)+5);
  
  result_text=createP("");
  result_text.position(35,(height-300)+55);
  
  
  p1_text=createP("");
  p1_text.position(280,(height-300)+200)
  
  p2_text=createP("");
  p2_text.position(35,(height-300)+250)
  
}

function Kontroll(){
  
  // ##########################  TABELI KONTROLL ###############################
  
  if (INPUT_X1.value()=="" || INPUT_X2.value()=="" || INPUT_Y1.value()==""|| INPUT_Y2.value()==""){
    result_text.html("Tabel on tühi!");
  } else if (INPUT_X1.value() == INPUT_X2.value() || INPUT_X1.value() > INPUT_X2.value()) {
    result_text.html("X-ide rida peab tabelis olema kasvamisjärjekorras!")
  }
  else if (INPUT_X1.value() < INPUT_X2.value() ) {
    func_Y_väärtus_1=tous_K * (INPUT_X1.value()) +vabaliige_B;
    func_Y_väärtus_2=tous_K * (INPUT_X2.value()) +vabaliige_B;
    if (INPUT_Y1.value() == func_Y_väärtus_1 && INPUT_Y2.value() == func_Y_väärtus_2){
        result_text.html("Väärtustetabel on ÕIGESTI arvutatud!")
  } else {
        result_text.html("Väärtustetabel on valesti arvutatud.")
  }
  }
  
  
  // ############################# GRAAFIKU KONTROLL ##############################
  
  // PUNKT A
  if ( ((round(first_point_X/12.5)*12.5)-250)/25==round((INPUT_X1.value()*2 )/2 ) && -1*((round(first_point_Y/12.5)*12.5)-250)/25 == (round((tous_K*INPUT_X1.value()+vabaliige_B)*2)/2)    ) {
    p1_text.html("Punkt A on korras!");
      } else {
        p1_text.html("Punkti B asukoht ei sobi.<br> Y1_canvas "+ str(((round(first_point_Y/12.5)*12.5)-250)/25)+"<br>Y1_numeric"+str((round((tous_K*INPUT_X1.value()+vabaliige_B)*2)/2))+"<br>X1_canvas"+str(((round(first_point_X/12.5)*12.5)-250)/25)+"<br>X1_numeric"+str(  round(INPUT_X1.value()*2 )/2)  );
      }
  
  // PUNKT B
    if ( (((round(second_point_X/12.5)*12.5)-250)/25) == round(INPUT_X2.value()*2 )/2  && -1*((round(second_point_Y/12.5)*12.5)-250)/25 == (round((tous_K*INPUT_X2.value()+vabaliige_B)*2)/2)) {
    p2_text.html("Punkt B on korras!");
      } else {
        p2_text.html("Punkti B asukoht ei sobi.<br> Y2_canvas "+ str(((round(second_point_Y/12.5)*12.5)-250)/25)+"<br>Y2_numeric"+str((round((tous_K*INPUT_X2.value()+vabaliige_B)*2)/2))+"<br>X2_canvas"+str(((round(second_point_X/12.5)*12.5)-250)/25)+"<br>X2_numeric"+str(  round(INPUT_X2.value()*2 )/2)  );
      }
  
}


function Reset(){
  
  points_on_plot=0;
  first_point_X = -10;
  first_point_Y = -10;
  second_point_X = -10;
  second_point_Y = -10;
  
  result_text.html("");
  Ylesanne();
  KONTROLL_NUPP=createButton("Kontrolli");
  KONTROLL_NUPP.size(70,40);
  KONTROLL_NUPP.style("background-color",color(80,139,195,255));
  KONTROLL_NUPP.style("color",color(255,255,255,255));
  KONTROLL_NUPP.position(4*width/5-100, (height-300)+30);
  
  
  
  RESET_NUPP=createButton("Uus ülesanne");
  RESET_NUPP.size(70,40);
  RESET_NUPP.style("background-color",color(80,139,195,255));
  RESET_NUPP.style("color",color(255,255,255,255));
  RESET_NUPP.position(4*width/5+10,(height-300)+30);
  
  
  // ###################### VÄÄRTUSTETABELI SISENDID #################################
  INPUT_X1=createInput();
  INPUT_X1.size(50,17)
  INPUT_X1.position(71,(height-300)+101);
  
  
  INPUT_X2=createInput();
  INPUT_X2.size(59,17)
  INPUT_X2.position(132,(height-300)+101);
  
  INPUT_Y1=createInput();
  INPUT_Y1.size(50,17)
  INPUT_Y1.position(71,(height-300)+126);
  
  INPUT_Y2=createInput();
  INPUT_Y2.size(59,17)
  INPUT_Y2.position(132,(height-300)+126);
  
}
