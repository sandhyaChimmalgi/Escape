
var bookGroup,wood1Group,book1Group,wood2Group;
var player;
var goingUp;
var goingDown;
var playerYPosition;
var flag = 0;
var y = 0;
var gameState = "serve";
var score = 0;
var restart;


function setup() {
  var canvas =  createCanvas(1200,400);
  player = createSprite(width/2,height-100,20,50);
  restart = createSprite(0,0,50,50);
  restart.visible = false;

  bookGroup = [];
  wood1Group = [];
  book1Group = new Group();
  wood2Group = new Group();
  monsterGroup = new Group();

  playerYPosition = player.y;
  camera.position.x = height/2;
  camera.position.y = 0;
  camera.position.x = width/2;
  player.velocityY = -5;
  
  goingDown = 0;
  goingUp = 1;
}

function draw() {
  background(0);  

  if(gameState === "serve"){
    textSize(15);
    fill("yellow");
    text("Press the space to start the game...",camera.position.x-100,camera.position.y);
    text("Use arrow keys to navigate the player...",camera.position.x-100,camera.position.y+50);
    player.velocityY = 0;
    player.visible = false;
  }
  
  if(gameState === "play"){
    player.visible = true;
    textSize(15);
    text("Score : "+score , camera.position.x+400,camera.position.y-150);

    playerMovement();

    if(flag === 1) camera.position.y = player.y;
    else if(flag === 0) camera.position.y = playerYPosition;
    
    player.collide(wood2Group);
    player.collide(book1Group);

    for(var i = 0;i<wood1Group.length; i++){
      if(player.isTouching(wood1Group[i])){
        if(wood1Group[i].shapeColor === "green") score = score+100;
        wood1Group[i].shapeColor = "red";
       }

       if(wood1Group[i].y>player.y+400){
         wood1Group[i].destroy();
       }
       }
  
    if(player.isTouching(monsterGroup)){
      gameState = "over";
    }
    spawnBooks();
    spawnWood();
    spawnMonsters();
}
  
else if(gameState === "over"){
  textSize(40);
  stroke("Red");
  fill("red");
  text("Game Over", camera.position.x-100,camera.position.y);
  player.visible = false;

  // for(var i =0;i<bookGroup.length;i++){
  //   bookGroup[i].destroy();
  // }
  bookGroup = [];

  // for(var i =0;i<wood1Group.length;i++){
  //   wood1Group[i].destroy();
  // }
  wood1Group = [];

  monsterGroup.destroyEach();
  
  console.log("gameOver");
  restart.x = camera.position.x-100;
  restart.y = camera.position.y+50;
  restart.visible = true;
  console.log("gameOver");

  if(mousePressedOver(restart)){
    gameState = "serve";
    restart.visible = false;
    player.visible = true;
    score = 0;
    player.x = width/2;
    player.y = camera.position.y;

  }

}
  
  
  drawSprites();
  
}


