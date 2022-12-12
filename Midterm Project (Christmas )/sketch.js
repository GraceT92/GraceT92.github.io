let colors=[];
let textScreen;
let bubbles = [];
let img;
var Text = "Merry Christmas";
let pageNum = 1;
let numPages = 6;
function preload() {
  img1 = loadImage("background.jpg");
  img2 = loadImage("Last.jpg");
}
function setup() {
  createCanvas(400, 400, WEBGL);
  colors[0] = color(192,192,192);
  colors[1] = color(255, 0, 0);
  colors[2] = color(255,223,0);
  colors[3] = color(0,0,255);
}

function draw() {
  //page 1
  if (pageNum == 1) {
    background(220);
    image(img1, -200, -200, 400, 400);

    textSize(100);
    textScreen = createGraphics(400, 400);
    // if (mouseIsPressed) {
    //   textScreen.textStyle(ITALIC);
    // }
    textScreen.textSize(20);
    textScreen.text(Text, 70, 100);
    image(textScreen, -20, -90);
  } //page 2
  else if (pageNum == 2) {
    background(220);
    stroke(3);
    fill(187, 142, 81);
    push();
    translate(90, 105);
    rotateY(10);
    rotateX(0);
    box(80);
    pop();
  } else if (pageNum == 3) {
    push();
    translate(-200, -195);
    fill(255, 248, 220);
    rect(112, 200, 40, 65);
    fill(0, 155, 0);
    triangle(20, 140, 140, 30, 230, 140);
    triangle(20, 180, 140, 50, 230, 180);
    triangle(20, 220, 140, 70, 230, 220);
    pop();
    noStroke();
  } //page4
  else if (pageNum == 4) {
   background(220);
        
    push();
    fill(187, 142, 81);
    stroke(0);
    translate(90, 105);
    rotateY(10);
    rotateX(0);
    box(80);
    pop();
        push();
    translate(-200, -195);
    fill(255, 248, 220);
    rect(112, 200, 40, 65);
    fill(0, 155, 0);
    triangle(20, 140, 140, 30, 230, 140);
    triangle(20, 180, 140, 50, 230, 180);
    triangle(20, 220, 140, 70, 230, 220);
    pop();
    noStroke();
    console.log(bubbles.length);
 for (let i = 0; i < bubbles.length; i++){
  bubbles[i].update();
    if (mouseIsPressed && dist(pmouseX,pmouseY,bubbles[i].x,bubbles[i].y)<10){
      bubbles[i].x = mouseX;
      bubbles[i].y = mouseY;
  }
 
}
  }
  
}

// function mouseReleased() {
//   if (pageNum == 1) {
//     pageNum = 2;
//   }
// }

 function mousePressed(){
   if (pageNum == 1 || pageNum == 2 || pageNum == 3 || pageNum==5){
    pageNum++;
  }
   else if (pageNum == 4){
 if (mouseX > 5 && mouseY >10){
 bubbles[bubbles.length] = new decoration(mouseX,mouseY);
 //bubbles[0].x = pmouseX;
}
   }
  else{
    pageNum = 1;
}

}


  class decoration {
 constructor(pmouseX,pmouseY){
  this.x = pmouseX;
  this.y = pmouseY;
  this.color = colors[floor(random(colors.length))];
  }
  update(){
  noStroke();
  fill(this.color);
  ellipse(this.x, this.y, 20,20);
   // if (mouseIsPressed){
   //  this.x = pmouseX;
   //   this.y = pmouseY;
   //    bubbles[0].x = pmouseX;
   //  }
    // this.x = pmouseX;
    // this.y = pmouseY;
 }
}