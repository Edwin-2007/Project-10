var ship, shipanimation
var sea
var seaimage
function preload(){
  shipanimation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  seaimage = loadImage("sea.png")
}

function setup(){
  createCanvas(1360, 695);
  sea = createSprite (200,180,100,100)
  sea.addImage(seaimage)
  sea.velocityX = - 2
  ship = createSprite (500,290,20,50)
ship.addAnimation("floatinganimation",shipanimation)
ship.scale = 0.3
}

function draw() {
  background("blue");
  if(sea.x < 0){
    sea.x = sea.width/2
  }
  drawSprites()
}