let img;
var memeText="Where am I ?";
function preload(){
  img = loadImage("donald duck.jpg");
}
function setup() {
  createCanvas(300, 268 );
}

function draw() {
  background(220);
  image(img,0,0,300,268);
  textSize(30);
  fill(255);
  stroke(0);
  strokeWeight(6);
  textStyle(BOLD);
  textFont('Comic Sans MS');
  if(mouseIsPressed){
     text(memeText,width/10,height/6);
  }
 
}