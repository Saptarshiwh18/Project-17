
var monkey , monkey_running;
var bananaImage, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0,survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,500);
monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  
FoodGroup = createGroup();
  ObstacleGroup = createGroup();
  
}


function draw() {

  background("white");
  
  spawnfood();
  spawnobstacles();
  
  
 monkey.collide(ground);
  
  if(keyDown("space") ){
    monkey.velocityY =-10; 
  }
  
 monkey.velocityY=monkey.velocityY+0.8; 
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(monkey.isTouching(FoodGroup)){
   monkey.scale=0.3;
  }
  if(monkey.isTouching(ObstacleGroup)){
   monkey.scale=0.1;
  }
  
  survivalTime = Math.ceil(frameCount/frameRate());
  console.log(frameRate);

  
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time :"+survivalTime,400,50);
  
 drawSprites(); 
}
function spawnfood() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(500,400,40,10);
    banana.y = Math.round(random(200,315));
    banana.addImage("banana",bananaImage);
    banana.scale = 0.2;
    banana.velocityX = -10;
    FoodGroup.add(banana);
    
  }
}
function spawnobstacles() {
  //write code here to spawn the clouds
  if (frameCount % 30 === 0) {
    var obstacle = createSprite(500,315,40,10);
    obstacle.y = 328;
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -10;
    obstacle.lifetime =-300;
    FoodGroup.add(obstacle);
  }
}





