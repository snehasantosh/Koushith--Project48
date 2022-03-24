var bgimg
var groundimg,ground
var cannonimg,cannon
var sqimg,sq,sq2,sq3,sq3,sq4,sq5,sq6,sq7,sq8,sq9,sq10,sq11,sq12,sq13,sq14,sq15,sq16,sq17,sq18,sq19,sq20,sq21,sq22,sq23,sq24
var cbimg,cannonball;
var cs,hs;
var count=0

function preload(){
bgimg=loadImage("images/bg.png")
groundimg=loadImage("images/ground.png")
cannonimg=loadImage("images/cannon ball.png")
sqimg=loadImage("images/square.png")
cbimg=loadImage("images/cbimg.png")
cs=loadSound("sounds/sounds_collided.wav")
hs=loadSound("sounds/sounds_hit.wav")



}

function setup() {
  createCanvas(1535,749);

  ground=createSprite(700,400,20,20)
  ground.addImage(groundimg)
  ground.scale=0.23

  cannonball=createSprite(700,500,20,20)
  cannonball.addImage(cbimg)
  cannonball.scale=0.2
  cannonball.visible=false

  cannon=createSprite(700,600,20,20)
  cannon.addImage(cannonimg)
  cannon.scale=0.25
 
 
  sq=createSprite(869,330,20,20)
  sq.addImage(sqimg)
  sq.scale=0.03

  sq2=createSprite(805,330,20,20)
  sq2.addImage(sqimg)
  sq2.scale=0.03

  sq3=createSprite(740,330,20,20)
  sq3.addImage(sqimg)
  sq3.scale=0.03

  sq4=createSprite(675,330,20,20)
  sq4.addImage(sqimg)
  sq4.scale=0.03

  sq5=createSprite(610,330,20,20)
  sq5.addImage(sqimg)
  sq5.scale=0.03

  sq6=createSprite(545,330,20,20)
  sq6.addImage(sqimg)
  sq6.scale=0.03

  sq7=createSprite(570,270,20,20)
  sq7.addImage(sqimg)
  sq7.scale=0.03

  sq10=createSprite(699,270,20,20)
  sq10.addImage(sqimg)
  sq10.scale=0.03

  sq12=createSprite(829,270,20,20)
  sq12.addImage(sqimg)
  sq12.scale=0.03

  sq13=createSprite(634,270,20,20)
  sq13.addImage(sqimg)
  sq13.scale=0.03

  sq14=createSprite(765,270,20,20)
  sq14.addImage(sqimg)
  sq14.scale=0.03

  sq15=createSprite(800,210,20,20)
  sq15.addImage(sqimg)
  sq15.scale=0.03

  sq16=createSprite(735,210,20,20)
  sq16.addImage(sqimg)
  sq16.scale=0.03

  sq17=createSprite(666,210,20,20)
  sq17.addImage(sqimg)
  sq17.scale=0.03
  
  sq19=createSprite(697,90,20,20)
  sq19.addImage(sqimg)
  sq19.scale=0.03

  sq20=createSprite(764,150,20,20)
  sq20.addImage(sqimg)
  sq20.scale=0.03

  sq21=createSprite(699,150,20,20)
  sq21.addImage(sqimg)
  sq21.scale=0.03

  sq22=createSprite(600,210,20,20)
  sq22.addImage(sqimg)
  sq22.scale=0.03

  sq23=createSprite(634,150,20,20)
  sq23.addImage(sqimg)
  sq23.scale=0.03
}

function draw() 
{
background(bgimg);
textSize(30)
text("SCORE = "+count,50,50)

  if(mousePressedOver(sq)){
    cannonball.visible=true
    cs.play();
    cannonball.velocityY=-4;
    cannonball.velocityX=4;
    
  }
  if(cannonball.isTouching(sq)){
    hs.play()
    sq.destroy();
    cannonball.velocityY=0;
    cannonball.velocityX=0;
    cannonball.y=500
    cannonball.x=700
    count= count+1;
   
  }

  if(mousePressedOver(sq2)){
    cannonball.visible=true
    cs.play();
    cannonball.velocityY=-4;
    cannonball.velocityX=1.5;
  }
  if(cannonball.isTouching(sq2)){
    hs.play()
    sq2.destroy();
    cannonball.velocityY=0
    cannonball.velocityX=0
    cannonball.y=500
    cannonball.x=700
    count= count+1;
  }

  if(mousePressedOver(sq3)){
    cannonball.visible=true
    cs.play();
    cannonball.velocityY=-4;
    cannonball.velocityX=0.5;
  }

  if(cannonball.isTouching(sq3)){
    hs.play()
    sq3.destroy();
    cannonball.velocityY=0
    cannonball.velocityX=0
    cannonball.y=500
    cannonball.x=700
    count= count+1;
  }

  if(mousePressedOver(sq4)){
    cannonball.visible=true
    cs.play();
    cannonball.velocityY=-4;
    cannonball.velocityX=-1;
  }

  if(cannonball.isTouching(sq4)){
    hs.play()
    sq4.destroy();
    cannonball.velocityY=0
    cannonball.velocityX=0
    cannonball.y=500
    cannonball.x=700
    count= count+1;
  }

  if(mousePressedOver(sq5)){
    cannonball.visible=true
    cs.play();
    cannonball.velocityY=-4;
    cannonball.velocityX=-2;
  }

  if(cannonball.isTouching(sq5)){
    hs.play()
    sq5.destroy();
    cannonball.velocityY=0
    cannonball.velocityX=0
    cannonball.y=500
    cannonball.x=700
    count= count+1;
  }

  if(mousePressedOver(sq6)){
    cannonball.visible=true
    cs.play();
    cannonball.velocityY=-4;
    cannonball.velocityX=-3;
  }

  if(cannonball.isTouching(sq6)){
    hs.play()
    sq6.destroy();
    cannonball.velocityY=0
    cannonball.velocityX=0
    cannonball.y=500
    cannonball.x=700
    count= count+1;
  }

  if(mousePressedOver(sq7)){
    cannonball.visible=true
    cs.play();
    cannonball.velocityY=-4;
    cannonball.velocityX=-4;
  }

  if(cannonball.isTouching(sq7)){
    hs.play()
    sq7.destroy();
    cannonball.velocityY=0
    cannonball.velocityX=0
    cannonball.y=500
    cannonball.x=700
    count= count+1;
  }

  if(mousePressedOver(sq13)){
    cannonball.visible=true
    cs.play();
    cannonball.velocityY=-4;
    cannonball.velocityX=-0.5;
  }
  
  if(cannonball.isTouching(sq13)){
    hs.play()
    sq13.destroy();
    cannonball.velocityY=0
    cannonball.velocityX=0
    cannonball.y=500
    cannonball.x=700
    count= count+1;
  }

  if(mousePressedOver(sq10)){
    cannonball.visible=true
    cs.play();
    cannonball.velocityY=-4;
    cannonball.velocityX=0,5;
  }
  
  if(cannonball.isTouching(sq10)){
    hs.play()
    sq10.destroy();
    cannonball.velocityY=0
    cannonball.velocityX=0
    cannonball.y=500
    cannonball.x=700
    count= count+1;
  }

  if(mousePressedOver(sq14)){
    cannonball.visible=true
    cs.play();
    cannonball.velocityY=-4;
    cannonball.velocityX=1.5;
  }

  if(cannonball.isTouching(sq14)){
    hs.play()
    sq14.destroy();
    cannonball.velocityY=0
    cannonball.velocityX=0
    cannonball.y=500
    cannonball.x=700
    count= count+1; 
  }

  if(mousePressedOver(sq12)){
    cannonball.visible=true
    cs.play();
    cannonball.velocityY=-4;
    cannonball.velocityX=2;
  }

  if(cannonball.isTouching(sq12)){
    hs.play()
    sq12.destroy();
    cannonball.velocityY=0
    cannonball.velocityX=0
    cannonball.y=500
    cannonball.x=700
    count= count+1; 
  }

  if(mousePressedOver(sq15)){
    cannonball.visible=true
    cs.play();
    cannonball.velocityY=-4;
    cannonball.velocityX=1;
  }

  if(cannonball.isTouching(sq15)){
    hs.play()
    sq15.destroy();
    cannonball.velocityY=0
    cannonball.velocityX=0
    cannonball.y=500
    cannonball.x=700
    count= count+1; 
  }

  if(mousePressedOver(sq16)){
    cannonball.visible=true
    cs.play();
    cannonball.velocityY=-4;
    cannonball.velocityX=-0,5;
  }

  if(cannonball.isTouching(sq16)){
    hs.play()
    sq16.destroy();
    cannonball.velocityY=0
    cannonball.velocityX=0
    cannonball.y=500
    cannonball.x=700
    count= count+1; 
  }

  if(mousePressedOver(sq17)){
    cannonball.visible=true
    cs.play();
    cannonball.velocityY=-2;
    cannonball.velocityX=-0.5;
  }

  if(cannonball.isTouching(sq17)){
    hs.play()
    sq17.destroy();
    cannonball.velocityY=0
    cannonball.velocityX=0
    cannonball.y=500
    cannonball.x=700
    count= count+1; 
  }

  if(mousePressedOver(sq19)){
    cannonball.visible=true
    cs.play();
    cannonball.velocityY=-10;
    cannonball.velocityX=0,5;
  }

  if(cannonball.isTouching(sq19)){
    hs.play()
    sq19.destroy();
    cannonball.velocityY=0
    cannonball.velocityX=0
    cannonball.y=500
    cannonball.x=700
    count= count+1; 
  }

  if(mousePressedOver(sq20)){
    cannonball.visible=true
    cs.play();
    cannonball.velocityY=-4;
    cannonball.velocityX=0.5;
  }

  if(cannonball.isTouching(sq20)){
    hs.play()
    sq20.destroy();
    cannonball.velocityY=0
    cannonball.velocityX=0
    cannonball.y=500
    cannonball.x=700
    count= count+1; 
  }

  if(mousePressedOver(sq21)){
    cannonball.visible=true
    cs.play();
    cannonball.velocityY=-4;
    cannonball.velocityX=0,5;
  }

  if(cannonball.isTouching(sq21)){
    hs.play()
    sq21.destroy();
    cannonball.velocityY=0
    cannonball.velocityX=0
    cannonball.y=500
    cannonball.x=700
    count= count+1; 
  }
  if(mousePressedOver(sq22)){
    cannonball.visible=true
    cs.play();
    cannonball.velocityY=-4;
    cannonball.velocityX=-1;
  }

  if(cannonball.isTouching(sq22)){
    hs.play()
    sq22.destroy();
    cannonball.velocityY=0
    cannonball.velocityX=0
    cannonball.y=500
    cannonball.x=700
    count= count+1; 
  }

  if(mousePressedOver(sq23)){
    cannonball.visible=true
    cs.play();
    cannonball.velocityY=-4;
    cannonball.velocityX=-0.5;
  }

  if(cannonball.isTouching(sq23)){
    hs.play()
    sq23.destroy();
    cannonball.velocityY=0
    cannonball.velocityX=0
    cannonball.y=500
    cannonball.x=700
    count= count+1; 
  }

  drawSprites();
  

}





