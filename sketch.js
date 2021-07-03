
function setup() {
  createCanvas(400,400);

var box = createSprite(200,200,20,20)
box.shapeColor = "pink"
}
function draw(){
  if(keyIsDown(DOWN_ARROW)){
    background("red")
  }
  if(keyIsDown(UP_ARROW)){
    background("green")
  }
  drawSprites()
}