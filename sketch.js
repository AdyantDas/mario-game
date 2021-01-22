var mario,marioWalking,mushroom,MIM,turtle,TIM
var pipe,bench
var background,BIM
var ground

function preload(){
marioWalking=loadAnimation("1.png","2.png","3.png");
BIM=loadImage("background.png")
MIM=loadImage("MIM.png");
TIM=loadImage("TIM.png");
pipe=loadImage("pipee.png");
bench=loadImage("bench.png");
}
function setup(){
createCanvas(displayWidth,displayHeight);
mario=createSprite(200,425,10,10)
mario.addAnimation("marioWalking",marioWalking);
mario.scale=0.05
mushroom=createSprite(200,300,10,10)
mushroom.addImage(MIM);
mushroom.scale=0.1
turtle=createSprite(200,100,10,10)
turtle.addImage(TIM);
turtle.scale=0.1
ground=createSprite(200,650,1200,5)
ground.velocityX=-2


}
function draw(){
background(BIM);
if(ground.x<0){
    ground.x=ground.width/2
}

mario.velocityY=mario.velocityY+0.8;





mario.collide(ground);
    drawSprites()
}
function keyPressed(){
    if(keyCode===32){
        console.log("mario")
    mario.velocityY=-20
    }
}

function spawnMushroom(){
    if(frameCount%80===0){
        mushroom=createSprite(width,height-700,20,20)
        mushroom.addImage(MIM)

    

    }
}