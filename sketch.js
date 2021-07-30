var sea
var sea_1 
var ships
var ships_1


function preload()
{
 sea_1 = loadImage("sea.png");

 ships_1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(300,300);
  sea = createSprite(150,150,300,300); 
  sea.velocityX = -5
  ships = createSprite(250,200,50,50);
  velocityY = 2
}

function draw() {
  background("blue");

  
  sea.addImage(sea_1) ;
  sea.scale = 0.2
  

  
  ships.addAnimation("cruise",ships_1);
  ships.scale = 0.2
  
   





  drawSprites()
}