var bgImg;
var ISS, ISSImg;
var spaceship, shipImg;
var hasDocked = false;

function preload(){
  bgImg = loadImage("Docking-undocking/spacebg.jpg");
  ISSImg = loadImage("Docking-undocking/iss.png");
  shipImg = loadImage("Docking-undocking/spacecraft1.png");
  shipImg2 = loadImage("Docking-undocking/spacecraft2.png");
  shipImg3 = loadImage("Docking-undocking/spacecraft3.png");
  shipImg4 = loadImage("Docking-undocking/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  spaceship = createSprite(random(10, 790), 355, 50, 50);
  spaceship.addImage(shipImg);
  spaceship.scale = 0.1;
  ISS = createSprite(400, 200, 50, 50);
  ISS.addImage(ISSImg);
}

function draw() {
  background(bgImg);  
  
  if(!hasDocked){
    if(keyDown("left")){
      spaceship.x -= 2;
      spaceship.addImage(shipImg4);
    }
    if(keyDown("right")){
      spaceship.x += 2;
      spaceship.addImage(shipImg3);
    }
    if(keyDown("down")){
      spaceship.addImage(shipImg2);
    }
    if(keyDown("up")){
      spaceship.addImage(shipImg2);
      spaceship.velocityY = -2;
    }
    if(spaceship.y < 270){
      spaceship.velocityY = 0;
      if(spaceship.x > 320 && spaceship.x < 340){
        hasDocked = true;
      }
    }
  }else{
    fill("white");
    textSize(20);
    text("Docking Successfull", 225, 360);
  }
  drawSprites();
}




