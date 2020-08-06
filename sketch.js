var hr, min, sec;
var hourangle, minuteangle, secondangle;

function setup() {
  createCanvas(400,400);
angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);
  hr = hour();
  min = minute();
  sec= second();
  hourangle = map(hr%12, 0,12, 0,360);
  minuteangle = map(min, 0,60,0,360);
  secondangle = map(sec, 0,60,0,360);
  push();
rotate(secondangle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
  pop();

  push();
  rotate(minuteangle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
    pop();

    push();
    rotate(hourangle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
      pop();

      //drawing the arcs 
      strokeWeight(10); 
      noFill(); 
      stroke(255,0,0); 
      arc(0,0,300,300,0,secondangle);
       //Minutes 
       stroke(0,255,0); 
       arc(0,0,280,280,0,minuteangle); 
       //Hour
       stroke(0,0,255); 
       arc(0,0,260,260,0,hourangle);
  drawSprites();
}