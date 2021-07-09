var spaceBg, spaceImage;
var iss,issImage;
var spacecraft,spacecraftImage1,spacecraftImage2,spacecraftImage3,spacecraftImage4
var hasDocked;

function preload(){
  spaceImage=loadImage("Docking-undocking/spacebg.jpg");
  issImage=loadImage("Docking-undocking/iss.png");
  spacecraftImage1=loadImage("Docking-undocking/spacecraft1.png");
  spacecraftImage2=loadImage("Docking-undocking/spacecraft2.png");
  spacecraftImage3=loadImage("Docking-undocking/spacecraft3.png");
  spacecraftImage4=loadImage("Docking-undocking/spacecraft4.png");

}
function setup() {
  createCanvas(1280,577);

  spacecraft=createSprite(550,400);
  spacecraft.addImage(spacecraftImage1);
  spacecraft.scale=0.3

  iss=createSprite(600,260,100,100);
  iss.addImage(issImage);

  
}

function draw() {
  background(spaceImage);

    if(!hasDocked){
      if(keyDown(UP_ARROW)){
      spacecraft.y=spacecraft.y-1
      spacecraft.addImage(spacecraftImage2);
      }
        if(keyDown(LEFT_ARROW)){
          spacecraft.x=spacecraft.x-1
          spacecraft.addImage(spacecraftImage3);
          }
          if(keyDown(RIGHT_ARROW)){
            spacecraft.x=spacecraft.x+1
            spacecraft.addImage(spacecraftImage4);
            }
    }
     
  drawSprites();
}