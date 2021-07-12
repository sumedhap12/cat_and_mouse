var cat
var mouse

function preload() {
    background1=loadImage("images/garden.png")
    catimg1=loadAnimation("images/cat1.png")
    catani=loadAnimation("images/cat2.png","images/cat3.png")
    catimg2=loadAnimation("images/cat4.png")

    mouseimg1=loadAnimation("images/mouse4.png")
    mouseani=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseimg2=loadAnimation("images/mouse1.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600)
    jerry=createSprite(200,600)
    tom.addAnimation("sitting",catimg1)
    tom.scale=0.2
    jerry.addAnimation("standing", mouseimg1)
    jerry.scale=0.17
}

function draw() {

    background(background1);
    if(tom.x-jerry.x< (tom.width/2+jerry.width/2)){
        tom.velocityX=0;
        tom.addAnimation("aftercollided", catimg2)
        tom.changeAnimation("aftercollided")
        tom.scale=0.2

        jerry.addAnimation("aftercollided", mouseimg2)
        jerry.changeAnimation("aftercollided")
        jerry.scale=0.17

        
    }

    drawSprites();
}


function keyPressed(){
 if(keyCode===LEFT_ARROW){
     jerry.addAnimation("tease", mouseani)
     jerry.changeAnimation("tease")
 }
 if(keyCode===RIGHT_ARROW){
     tom.addAnimation("walk", catani)
     tom.changeAnimation("walk")
     tom.velocityX=-2
 }
  //For moving and changing animation write code here


}
