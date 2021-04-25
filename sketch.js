var bgImg;
var cat , catImg1 , catImg2 ;
var mouse , mouseImg1 , mouseImg2;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadImage("images/cat2.png");
    catImg3 = loadImage("images/cat3.png");
    catImg4 = loadImage("images/cat4.png");
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadImage("images/mouse2.png");
    mouseImg3 = loadImage("images/mouse3.png");
    mouseImg4 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(950,650);
    //create tom and jerry sprites here

    mouse = createSprite(150,500,50,50);
    mouse.addImage(mouseImg2)
    mouse.scale=0.2;

    cat = createSprite(850,530,50,50);
    cat.addImage(catImg1);
    cat.scale=0.15;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if( cat.x - mouse.x <(cat.width - mouse.width)/2){
        mouse.addAnimation("mouseHappy" , mouseImg1);
        mouse.changeAnimation("mouseHappy");
        
        cat.addAnimation("catHappy" , catImg4);
        cat.changeAnimation("catHappy");
        cat.velocityX = 0;
        cat.x = 400;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode === LEFT_ARROW){
       mouse.addAnimation("mouseTeasing" , mouseImg3);
       mouse.changeAnimation("mouseTeasing");
       mouse.frameDelay = 25;
       mouse.scale = 0.18
       
       cat.addAnimation("catRunning" , catImg2 , catImg3)
       cat.changeAnimation("catRunning");
       cat.velocityX = -3;
       cat.scale = 0.2
   }

   if(keyCode === RIGHT_ARROW){
       mouse.addAnimation("mouseSearch" , mouseImg4);
       mouse.changeAnimation("mouseSearch");

       cat.addAnimation("CatRelax" , catImg1);
       cat.changeAnimation("CatRelax");
       cat.scale = 0.2;
       cat.x = 700;
   }

}
