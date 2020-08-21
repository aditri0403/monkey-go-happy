var banana1,obstacle1,background1,player1,player2,background2,banana2,obstacle2,ground;
var obstacleGroup, foodGroup;
var score =0;

function preload(){
  player1 = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  background1 = loadImage("jungle.png");
  
  banana1 = loadImage("banana.png");
  
  obstacle1 = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  
  background2 = createSprite(200,200,400,400);
  background2.addImage(background1);
  background2.velocityX=-3;
  background2.scale=2;
  background2.x = background2.width/2;
  
  player2 = createSprite(100,370,10,10);
  player2.addAnimation("monkey",player1);
  player2.scale = 0.15;
  
  
  
  
  ground = createSprite(200,380,800,5);
  ground.visible = false;
  ground.velocityX=-5;
  
  
  
  foodGroup = new Group();
 
  
  obstacleGroup = new Group();
  
  
  stroke("white");
  textSize(20);
  fill("white");
}

function draw() {
  
  if(background2.x<0){
    background2.x = background2.width/2;
  }
  
  player2.collide(ground);
  
  if(ground.x>0){
     ground.x=ground.width/2;
   } 
  
  if(foodGroup.isTouching(player2)){
     score = score+2;
     
     }
  
  if(keyDown("space")){
    player2.velocityY=-6;
    }
  
  player2.velocityY = player2.velocityY+0.8;
  
  switch(score){
    case 10 : player2.scale = 0.16;
    break;
    case 20 : player2.scale = 0.17;
    break;
    case 30 : player2.scale = 0.18;
    break;
    case 40 : player2.scale = 0.19;
    break;
    default : break;
  }
  
  if(obstacleGroup.isTouching(player2)){
    player2.scale=0.1;
     }
  
  food();
  Obstacles();
  drawSprites();
  
  text("score : " + score,300,50);
  
}
function food(){
  if(frameCount%80===0){
    banana2 = createSprite(400,280,10,10);
    banana2.visible = true;
    banana2.addImage(banana1);
    banana2.scale = 0.05;
    banana2.velocityX=-4;
    banana2.lifetime=100;
    banana2.y=random(120,200);
    
    foodGroup.add(banana2);
  }  
  }
 function Obstacles(){
  if(World.frameCount%300===0){
    obstacle2 = createSprite(410,360,10,10);
    obstacle2.addImage(obstacle1);
    obstacle2.scale = 0.2;
    obstacle2.visible = false;
  
    obstacle2.visible=true;
    obstacle2.velocityX=ground.velocityX;
    
   obstacleGroup.add(obstacle2); 
    
    
  }
} 
  
  
  
  
  
  
