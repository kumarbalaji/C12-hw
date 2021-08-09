var garden,rabbit;
var gardenImg,rabbitImg;
var redleaf,redleafimg;



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  redleafimg=loadImage("redImage.png");
  orangeleafImg=loadImage("orangeLeaf.png");
  appleImg=loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  var select_Sprites=Math.round(random(1,3));


  if(frameCount%80==0){
    if(select_Sprites==1){
      carrot();
    } else if(select_Sprites==2){
      redleaf();
    }
    else{
      orangeleaf();
    }

  }

  function redleaf(){
 
    var redleaf=createSprite(random(100,200),80,10,10); 
 redleaf.velocityY=2;
 redleaf.addImage(redleafImg) ; 
 redleaf.scale=0.05;
 redleaf.lifetime=100;
}   

function orangeleaf(){

  var orangeleaf=createSprite(random(50,350),80,10,10); 
orangeleaf.velocityY=2;
orangeleaf.addImage(orangeleafImg) ; 
orangeleaf.scale=0.05; 
orangeleaf.lifetime=100;  
}

function carrot(){

  var carrot=createSprite(random(80,330),80,10,10); 
 carrot.velocityY=2;
 carrot.addImage(carrotImg) ; 
 carrot.scale=0.1; 
 carrot.lifetime=100;
}



}








