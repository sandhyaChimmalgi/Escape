function keyReleased(){
    playerYPosition = player.y;
    player.velocityY= 0;
    player.velocityX = 0;
    flag = 0;
    player.shapeColor = "grey";
  }
  function keyPressed(){
  
    if(keyCode === LEFT_ARROW){
      flag = 1;
      player.velocityY= -10;
      player.velocityX = -10;
      player.shapeColor = "red";
      score++;
    }
    if(keyCode === RIGHT_ARROW){
      flag = 1;
      player.velocityY= -10;
      player.velocityX = 10;
      player.shapeColor = "red";
      score++;
    }
    
    if(keyCode === DOWN_ARROW){
      player.velocityY= 10;
    }
    if(keyCode === 32){
      gameState = "play";
    }
  }
  
  
  
    
  
  function playerMovement(){
    if(player.y < playerYPosition - 50){
      goingDown = 1;
      goingUp = 0;  
      }  
    else if(player.y > playerYPosition + 50){
      goingUp = 1;
      goingDown = 0;
     }
      if(goingUp == 1) player.y -= 5;
      if(goingDown == 1 ) player.y += 5;
    }
  
  
  function spawnBooks(){
  if(frameCount % 40 === 0){
    var x = floor(random(0,width));
    y = y - 100;
    var book = createSprite(x,y,200,10);
    var book1 = createSprite(x,y+10,200,10);
    book1.visible = false;
    book1Group.add(book1);
    bookGroup.push(book);
    }
  }
  
  function spawnWood(){
    
    if(frameCount % 120 === 0){
      var x = floor(random(0,width));
      y = y - 100;
      var wood1= createSprite(x,y,200,10);
      var wood2 = createSprite(x,y+10,200,10);
      wood1.shapeColor = "green";
      wood1Group.push(wood1);
      wood2Group.add(wood2);
      wood2.visible = false;
     }
  }
  function spawnMonsters(){
    
    if(frameCount % 30 === 0){
      var x = floor(random(0,width));
      y = y - 100;
      var monster= createSprite(x,y,50,50);
      
      monster.shapeColor = "yellow";
      monsterGroup.add(monster);
    }
  }