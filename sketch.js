// creating global variables

var bgImg,invisibleGround;
var playerRightRunning,player;

var gun2Array=[]

var playerLeftRunning;
var playerStandingLeft;
var playerStandingRight;


var bombImage,bombExplodingImage;
var brickImage,coinImage;


var bg2Img,bg3Img,bg4Img;
var backGroundSound,bombExplodingSound;


var bulletFiringSound,healingSound;
var jamingMachineSound,jumpingSound;


var trapSound;
var drone,hangingTrap;
var enemyMachineGun;
var playButton,rock;
var playButtonImage;


var trap1,trap2;
var scientificEnemyGun,scientificTrap;
var smallGround;


var invisibleBrick,brickGroup;
var invisibleBrick;


const Engine=Matter.Engine
const World=Matter.World
const Body=Matter.Body
const Bodies=Matter.Bodies


var engine,world;
var bulletDirection="right"


var groundGroup,invisibleGroundGroup;
var ground;
var gun;


var scieFieGun;
var brick;


var scieFieGunBullets;
var scieFieGunBulletsImage,enemyMachineGunBulletsImage;
var playerBulletImage;

var gameState=0
//var level1,level2,level3;
//var level4,level5;
var level1Image,level2Image;
var level3Image,level4Image;

var level5Image;
var gunBullets2,brick2;
var brickBody,playerBody;

var buttonClickingSound;
var trap,trap1,trap2,trap3;

var colliderGroup;
var gun4,gunBullets4;
var brick4,scieFieGun2;

var ScieFiegunBullets2,ground2;
var brick3;

var invisibleBrick3,invisibleBrick3up;
var invisibleBrickGroup,invisibleBrickupGroup;
var trap1Group;
var brickGroup2;

var traps2Group,traps3Group;
var gun2Group,bomb2Group
var bullets,bulletsgroup;

var gunBulletsGroup;
var invisibleBrick2Group;

var level1,level2,level3;
var level4,level5;
var gunsArray=[]
// function preload to load images

function preload (){

buttonClickingSound=loadSound("sounds/buttonClicking.mp3")

level1Image=loadImage("images/level 1.png")

level2Image=loadImage("images/level 2.png")

level3Image=loadImage("images/level 3.png")

level4Image=loadImage("images/level 4.png")

level5Image=loadImage("images/level 5.png")

 playerBulletImage=loadImage("images/playerBullet.png")

 enemyMachineGunBulletsImage=loadImage("images/MachineGunBullets image.png")

 scieFieGunBulletsImage=loadImage("images/scieFieGunBulletsimage.png")

 drone=loadImage("images/drone.png")

 hangingTrap=loadImage("images/hangingTrap.png")

 enemyMachineGun=loadImage("images/machine enemy.png")

 playButtonImage=loadImage("images/playsurvivel.png")

 rock=loadImage("images/rock.png")

 trap1=loadImage("images/trap1.png")

 trap2=loadImage("images/trap2.png")

 scientificEnemyGun=loadImage("images/scie fie enemy.png")

 scientificTrap=loadImage("images/scie-fi.png")

 smallGround=loadImage("images/small ground.png")

 trap2=loadImage("images/trap2.png")

 bombImage=loadImage("images/bomb.png")

 bombExplodingImage=loadImage("images/bombExploding.png")

 brickImage=loadImage("images/brick.png")

 coinImage=loadImage("images/coin.png")

 bgImg=loadImage("images/ground.jpg")

 playerRightRunning=loadAnimation("images/player1.png","images/player2.png","images/player3.png","images/player4.png","images/player5.png","images/player6.png")

 playerStandingLeft=loadAnimation("images/leftPlayer1.png")

 playerStandingRight=loadAnimation("images/player1.png")

 playerLeftRunning=loadAnimation("images/leftPlayer1.png","images/leftPlayer2.png","images/leftPlayer3.png","images/leftPlayer4.png","images/leftPlayer5.png","images/leftPlayer6.png")

 bulletFiringSound=loadSound("sounds/bulletFiring.mp3")

 healingSound=loadSound("sounds/healing.mp3")

 jamingMachineSound=loadSound("sounds/jamingMachine.mp3")

 jumpingSound=loadSound("sounds/jumpingSound.mp3")

 trapSound=loadSound("sounds/trap.mp3")

 backGroundSound=loadSound("sounds/backGround.mp3")

 bombExplodingSound=loadSound("sounds/bombExplosion.mp3")

 bg2Img=loadImage("images/ground2.jpg")

 bg3Img=loadImage("images/ground3.jpg")

 bg4Img=loadImage("images/ground4.png")


}

// function preload ending here

// function setup starting


function setup() {


     createCanvas(windowWidth,windowHeight);


      engine = Engine.create();
      world = engine.world;


      invisibleGround=createSprite(width/2,height-70 , width*100, 50);
      invisibleGround.visible=false


      player=createSprite(width/2-50,height-280,10,10)

      playerBody=Bodies.rectangle(player.x,player.y,player.width,player.height)
      World.add(world,playerBody)

      player.addAnimation("running3",playerStandingRight)
      player.addAnimation("running1",playerRightRunning)
      player.addAnimation("running2",playerLeftRunning)
      player.addAnimation("running4",playerStandingLeft)
      

       brickGroup=createGroup()
       groundGroup=createGroup()
       invisibleBrickGroup=createGroup()

       playButton=createSprite(800,100)
       playButton.addImage(playButtonImage)
     
       rulles=createSprite(500,400,100,50)
       

       colliderGroup=createGroup()

       invisibleBrickGroup=createGroup()
       invisibleBrickupGroup=createGroup()
       trap1Group=createGroup()

       brickGroup2=createGroup()

        traps2Group=createGroup()
        gun2Group=createGroup()
        bomb2Group=createGroup()
        traps3Group=createGroup()

        bulletsgroup=createGroup()

       gunBulletsGroup=createGroup()
       invisibleBrick2Group=createGroup()

       level1=createSprite(990,400)
       level2=createSprite(800,340)
       level3=createSprite(800,440)
       level4=createSprite(800,540)
     level5=createSprite(800,640)


     level1.addImage(level1Image)
       level2.addImage(level2Image)
       level3.addImage(level3Image)
       level4.addImage(level4Image)
       level5.addImage(level5Image)


       level1.visible=false
      level2.visible=false
      level3.visible=false
      level4.visible=false
      level5.visible=false
        

}


// function setup ending

//function draw starting


function draw() {

      background(255,255,255); 

      player.visible=false
      rulles.visible=false

      

      console.log(gameState)

       //gameState 0 starting for giving some functions to the gameState 0




       if(gameState===0){


        playButton.visible=true
        rulles.visible=true


       if(mousePressedOver(rulles)){
         gameState="rules"
       }

       if(mousePressedOver(playButton)){


       console.log("you are in line no. 236")


       gameState="selectLevel"
       playButton.visible=false


       buttonClickingSound.play()


      }



      }

    // gameState 0 ending

    //gameState select level starting for selecting levels

if(gameState==="rules"){

  playButton.visible=false
  textSize(40)
  text(" 1) In this game there will be some obstacles will be coming like brick and guns",100,100)
  text(" 2) There will be some traps will be coming to defeat you",100,200)
  text(" 3) You have to destroy the guns and reach to the end line of the game to win the level",100,300)

}


if(gameState==="selectLevel"){
 
  level1.visible=true
  level2.visible=true
  level3.visible=true
  level4.visible=true
  level5.visible=true
      

        playButton.visible=false



        if(mousePressedOver(level1)){


          gameState="play1"
          buttonClickingSound.play()
         

   
        }


        if(mousePressedOver(level2)){


          gameState="play2"
          buttonClickingSound.play()
   

        }


        if(mousePressedOver(level3)){


          gameState="play3"
          buttonClickingSound.play()


        }


        if(mousePressedOver(level4)){


          gameState="play4"
          buttonClickingSound.play()
   

        }


        if(mousePressedOver(level5)){


          gameState="play5"
          buttonClickingSound.play()
   

        }


 }


//gameState select level ending

// gameState play1 starting for level 1




if(gameState==="play1"){
 

        player.visible=true

        level1.visible=false
      level2.visible=false
      level3.visible=false
      level4.visible=false
      level5.visible=false

      // var life=3
      
        image(bgImg,0,0,width*2,height) 
        image(bg2Img,3600,0,width*2,height)

      //  text("LIFE = "+life,1000,200)

        var invisibleWall=createSprite(-10,500,20,height*2)


        invisibleWall.visible=false
        player.collide(invisibleWall)
        
       
        camera.x=player.x

        player.collide(invisibleGround)



        if(keyWentUp("left")){


          player.changeAnimation("running4",playerStandingLeft)
        

          }
        
        

          if(keyDown("left")){
        

            player.x-=18
        

            player.changeAnimation("running2",playerLeftRunning)
            bulletDirection="left"
        

          }
        
        
          if(keyWentUp("right")){
        

           player.changeAnimation("running3",playerStandingRight)
        

           }
        
        
           if(keyDown("right")){
        

            player.x+=18
        

            player.changeAnimation("running1",playerRightRunning)
            bulletDirection="right"
        

            }
        
        
            if(keyWentDown("space")){
        

            player.velocityY-=30
            jumpingSound.play()
        

            }
        
        
          if(keyWentDown("enter")){
          
          bullets=createSprite(player.x+70,player.y-20,10,10)
         
          bulletFiringSound.play()

          bulletsgroup.add(bullets)
        

          if(bulletDirection==="right"){
        
          bullets.velocityX=80
        
          bullets.addImage(playerBulletImage)

          bullets.lifetime=130
         
         
        
        }

        
        else if(bulletDirection==="left"){
        

          bullets.velocityX=-80
        
          bullets.addImage(playerBulletImage)
          bullets.x=player.x-70

          bullets.lifetime=130
        

        }
        
        
        else{
        

          bullets.x=player.x-70

          bullets.velocityX=-80

          bullets.addImage(playerBulletImage)
        

        }


       }


      player.velocityY+=3


spawnBricks2()
spawnGuns2()
spawnTraps()
spawnTraps2()
spawnBombs2()



if(player.isTouching(invisibleBrick2Group)){
  player.velocityY=5
}



if(player.isTouching(brickGroup2)){
  player.velocityY=0
player.velocityX=-10



if(keyWentDown("space")){
  player.velocityY=-30
}



}



else if(player.isTouching(traps2Group)){
  life-=1
}




else{


  player.velocityX=0


}


    
drawSprites()

     


}


// gameState play1 ending




if(gameState==="play2"){



  player.visible=true


  image(bgImg,0,0,width*2,height) 
  image(bg2Img,3600,0,width*2,height) 
  image(bg3Img,7200,0,width*2,height)


  camera.x=player.x


  player.collide(invisibleGround)



  if(keyWentUp("left")){


    player.changeAnimation("running4",playerStandingLeft)


    }



    if(keyDown("left")){


      player.x-=18


      player.changeAnimation("running2",playerLeftRunning)
      bulletDirection="left"


    }


    if(keyWentUp("right")){


    player.changeAnimation("running3",playerStandingRight)



    }



    if(keyDown("right")){


        player.x+=18


        player.changeAnimation("running1",playerRightRunning)
        bulletDirection="right"


      }



    if(keyWentDown("space")){


          player.velocityY=-30
          jumpingSound.play()


    }



    if(keyWentDown("enter")){
      

      var bullets=createSprite(player.x+70,player.y-20,10,10)
    
      bulletFiringSound.play()

      if(bulletDirection==="right"){

      bullets.velocityX=80

      bullets.addImage(playerBulletImage)
    

    }

    else if(bulletDirection==="left"){


      bullets.velocityX=-80

      bullets.addImage(playerBulletImage)
    
      bullets.x=player.x-80


    }


    else{


      bullets.x=player.x-70
      bullets.velocityX=-80
      bullets.addImage(playerBulletImage)


    }


    }


    
    player.velocityY+=3

   

    spawnBricks3()
    spawnGuns3()
    spawnTraps()
    spawnBombs3()

if(player.isTouching(brickGroup)){
  player.velocityY=0
player.velocityX=brick3.velocityX

if(keyWentDown("space")){
  player.velocityY=-30
}


}

else{
  player.velocityX=0
}




    drawSprites();

    player.debug=true

}





if(gameState==="play3"){


  player.visible=true


  image(bgImg,0,0,width*2,height) 
  image(bg2Img,3600,0,width*2,height) 
  image(bg3Img,7200,0,width*2,height)
  image(bg4Img,10400,0,width*2,height)


  camera.x=player.x


  player.collide(invisibleGround)



  if(keyWentUp("left")){


    player.changeAnimation("running4",playerStandingLeft)


    }



    if(keyDown("left")){


      player.x-=18


      player.changeAnimation("running2",playerLeftRunning)
      bulletDirection="left"


    }



    if(keyWentUp("right")){


    player.changeAnimation("running3",playerStandingRight)


    }



    if(keyDown("right")){


        player.x+=18


        player.changeAnimation("running1",playerRightRunning)
        bulletDirection="right"


      }



    if(keyWentDown("space")){

      

          player.velocityY-=30
          jumpingSound.play()


    }


    if(keyWentDown("enter")){
      

      var bullets=createSprite(player.x+70,player.y-20,10,10)
    
      bulletFiringSound.play()

      if(bulletDirection==="right"){

      bullets.velocityX=80

      bullets.addImage(playerBulletImage)
    


    }

    else if(bulletDirection==="left"){



      bullets.velocityX=-80

      bullets.addImage(playerBulletImage)
    
      bullets.x=player.x-80



    }



    else{


      bullets.x=player.x-70
      bullets.velocityX=-80
      bullets.addImage(playerBulletImage)


    }


    }

    
    player.velocityY+=3

    

   // spawnSciFieGun2()

 spawnBricks4()
 spawnGuns4()
 spawnGround2()
 spawnGuns4gun()


 drawSprites();



}







if(gameState==="play4"){


  player.visible=true


  image(bgImg,0,0,width*2,height) 
  image(bg2Img,3600,0,width*2,height) 
  image(bg3Img,7200,0,width*2,height)
  image(bg4Img,10400,0,width*2,height)


  
  camera.x=player.x


  player.collide(invisibleGround)


  if(keyWentUp("left")){


    player.changeAnimation("running4",playerStandingLeft)


    }



    if(keyDown("left")){


      player.x-=18


      player.changeAnimation("running2",playerLeftRunning)
      bulletDirection="left"


    }



    
    if(keyWentUp("right")){


    player.changeAnimation("running3",playerStandingRight)


    }


    if(keyDown("right")){


        player.x+=18


        player.changeAnimation("running1",playerRightRunning)
        bulletDirection="right"


      }



    if(keyWentDown("space")){


          player.velocityY-=30
          jumpingSound.play()


    }



    if(keyWentDown("enter")){
      
    
      var bullets=createSprite(player.x+70,player.y-20,10,10)
    
      bulletFiringSound.play()

      if(bulletDirection==="right"){

      bullets.velocityX=80

      bullets.addImage(playerBulletImage)
    

    }


    else if(bulletDirection==="left"){


      bullets.velocityX=-80

      bullets.addImage(playerBulletImage)
    
      bullets.x=player.x-80


    }


    else{


      bullets.x=player.x-70
      bullets.velocityX=-80
      bullets.addImage(playerBulletImage)


    }


    }
    

    player.velocityY+=3


    drawSprites();



}



// gameState play5 starting for level 5





if(gameState==="play5"){


  player.visible=true
 


      image(bgImg,0,0,width*2,height) 
      image(bg2Img,3600,0,width*2,height) 
      image(bg3Img,7200,0,width*2,height)
      image(bg4Img,10400,0,width*2,height)


      camera.x=player.x


      player.collide(invisibleGround)



      if(keyWentUp("left")){


      player.changeAnimation("running4",playerStandingLeft)


      }



      if(keyDown("left")){


        player.x-=18


        player.changeAnimation("running2",playerLeftRunning)
        bulletDirection="left"


      }



      if(keyWentUp("right")){


      player.changeAnimation("running3",playerStandingRight)


      }



      if(keyDown("right")){


          player.x+=18


          player.changeAnimation("running1",playerRightRunning)
          bulletDirection="right"


        }



      if(keyWentDown("space")){


            player.velocityY-=30
            jumpingSound.play()


      }



      if(keyWentDown("enter")){
      
        
        var bullets=createSprite(player.x+70,player.y-20,10,10)
      
        bulletFiringSound.play()

        if(bulletDirection==="right"){

        bullets.velocityX=80

        bullets.addImage(playerBulletImage)
      


      }

      else if(bulletDirection==="left"){


        bullets.velocityX=-80

        bullets.addImage(playerBulletImage)
      

      }



      else{


        bullets.x=player.x-70
        bullets.velocityX=-80
        bullets.addImage(playerBulletImage)


      }


      }
  


   player.velocityY+=3


    spawnBricks()
    spawnGround()

    spawnGuns()
    spawnSciFieGun()



    drawSprites();

    
 }




playerBody.position.x=player.x
playerBody.position.y=player.y

//rect(playerBody.position.x,playerBody.position.y,100,100)
  

drawSprites()

      
}

// function draw ending

// function spawn bricks for creating small bricks


function spawnBricks() {



  if (frameCount % 300 === 0) {



        brick = createSprite(14000,120,100,40);
        brick.y = Math.round(random(200,500));
        brick.addImage(brickImage);


        brick.velocityX = -10;
        brick.lifetime = 1500;
        brickGroup.add(brick)
       // invisibleBrick.visible=false
        


       }



}



// function spawn bricks ending

// function spawn ground starting for creating small grounds



function spawnGround() {



  if (frameCount % 300 === 0) {


        ground = createSprite(7000,120,100,30);
        ground.y= Math.round(random(200,500));
        ground.addImage(smallGround);


        ground.velocityX = -10;
        ground.lifetime = 700;
        groundGroup.add(ground)

       // invisibleBrick2.visible=false
       


       }



}



// function spawn ground ending

// function spawn guns starting for creating enemy gun


function spawnGuns(){



  if(frameCount%600===0){


    gun=createSprite(7000,110,100,20)
    gun.y=ground.y-20
    gun.x=ground.x


    gun.addImage(enemyMachineGun)
    gun.lifetime=700
    gun.velocityX=-10


    gun.scale=1/2


   setInterval(()=>{


    gunBullets=createSprite(gun.x-20,gun.y-30,10,5)
    gunBullets.velocityX=-30
    gunBullets.setlifetime=100


    gunBullets.addImage(enemyMachineGunBulletsImage)
    gunBullets.scale=1/3



   },2000)



  }



}



// function spawn guns ending

// function spawn sciFieGun for creating enemy powerfull gun



function spawnSciFieGun (){



if (frameCount%600===0){


scieFieGun=createSprite(14000,120,10,5)
scieFieGun.x=brick.x
scieFieGun.y=brick.y-20


scieFieGun.addImage(scientificEnemyGun)
scieFieGun.lifetime=1300
scieFieGun.velocityX=-10


scieFieGun.scale=1/3



setInterval(()=>{


  scieFieGunBullets=createSprite(scieFieGun.x-20,scieFieGun.y-20,10,20)
  scieFieGunBullets.velocityX=-30
  scieFieGunBullets.lifetime=200


  scieFieGunBullets.addImage(scieFieGunBulletsImage)
  scieFieGunBullets.scale=1/4



},2000)



}



}



// function spawn scieFieGun ending

// function spawn bricks2 starting


function spawnBricks2() {



  if (frameCount % 200 === 0) {



        brick2 = createSprite(9000,120,100,40);
        brick2.y = Math.round(random(200,500));
        brick2.addImage(brickImage);
        brick2.velocityX = -10;

        
        invisibleBrick2=createSprite(9000,140,brick2.width+60,40)
        invisibleBrick2.x=brick2.x
        invisibleBrick2.y=brick2.y+30
       invisibleBrick2Group.add(invisibleBrick2)
       invisibleBrick2.velocityX=-10
       invisibleBrick2.visible=false

        brick2.lifetime = 900;
        colliderGroup.add(brick2)

        brickGroup2.add(brick2)


       /* brickBody=Bodies.rectangle(brick2.x,brick2.y,brick2.width,brick2.height)
        World.add(world,brickBody)

        brickBody.position.x=brick2.x
        brickBody.position.y=brick2.y

        rect(brickBody.position.x,brickBody.position.y,100,100)*/



       }



}

function spawnTraps2 (){



  if (frameCount%600===0){


    trap=createSprite(brick2.x,brick2.y-60)
    trap.velocityX=-10
    trap.addImage(trap2)
    traps2Group.add(trap) 

    trap.scale=1/3


  }



}



function spawnBombs2 (){



  if (frameCount%450===0){


    bomb=createSprite(9000,height-120)
    bomb.velocityX=-10
    bomb.addImage(bombImage)
    bomb2Group.add(bomb)

    if(player.isTouching(bomb)){

bomb.changeAnimation(bombExplodingImage)
bomb.visible=false

    }
    
  }



}


// function spawn bricks2 ending

// function spawn guns 2 starting




function spawnGuns2(){



  if(frameCount%400===0){
    gun2=new Gun2(9000,120)
    gun2.x=brick2.x
    gun2.y=brick2.y-30
    gun2.display()

if(gun2.sprite.isTouching(bulletsgroup)){

   gun2.sprite.destroyGun()
    
}
    /*  setInterval(()=>{


        gunBullets2=createSprite(gun2.x-20,gun2.y-30,10,5)
        gunBullets2.velocityX=-30
        gunBullets2.lifetime=130
    
    
        gunBullets2.addImage(enemyMachineGunBulletsImage)
        gunBullets2.scale=1/3
        console.log("inside set interval of spawn guns 2")
    
    gunBulletsGroup.add(gunBullets2)
    
       },2000)

    }*/

  }
  



}



function spawnTraps3 (){



  if (frameCount%300===0){
  

    trap1=createSprite(12000,height-130)
    trap1.velocityX=-14
    trap1.addImage(trap1)
  
  
  }



}



function spawnBombs3 (){



  if (frameCount%400===0){


    bomb=createSprite(12000,height-130)
    bomb.velocityX=-14
    bomb.addImage(bombImage)
    

  }



}


// function spawn guns 2 ending



function spawnBricks3() {



  if (frameCount % 200 === 0) {



        brick3 = createSprite(11000,120,100,40);
       
      

        brick3.y = Math.round(random(200,600));
        brick3.addImage(brickImage);


        brick3.velocityX = -10;
        brick3.lifetime = 900;
        brickGroup.add(brick3)

       
        brick3.debug=true

       /* brickBody=Bodies.rectangle(brick3.x,brick3.y,brick3.width,brick3.height)
        World.add(world,brickBody)


        brickBody.position.x=brick3.x
        brickBody.position.y=brick3.y


        rect(brickBody.position.x,brickBody.position.y,100,100)*/



       }



}





function spawnGuns3(){


  if(frameCount%400===0){



    gun3=createSprite(11000,110,100,20)
    gun3.y=brick3.y
    gun3.x=brick3.x



    gun3.addImage(enemyMachineGun)
    gun3.lifetime=900
    gun3.velocityX=-10


    gun3.scale=1/2


   setInterval(()=>{


    gunBullets3=createSprite(gun3.x-20,gun3.y-30,10,5)
    gunBullets3.velocityX=-30
    gunBullets3.lifetime=130



    gunBullets3.addImage(enemyMachineGunBulletsImage)
    gunBullets3.scale=1/3
    console.log("inside set interval of spawn guns 2")



   },1000)



  }



}




function spawnTraps (){



  if (frameCount%300===0){


    trap3=createSprite(12000,height-130)
    trap3.velocityX=-10
    trap3.addImage(trap1)

    traps3Group.add(trap3)

  }



}




function spawnBricks4() {



  if (frameCount % 300 === 0) {


        brick4 = createSprite(15000,120,100,40);
        brick4.y = Math.round(random(200,600));
        brick4.addImage(brickImage);


        brick4.velocityX = -10;
        brick4.lifetime = 900;
        brickGroup.add(brick4)


       /* brickBody=Bodies.rectangle(brick3.x,brick3.y,brick3.width,brick3.height)
        World.add(world,brickBody)

        brickBody.position.x=brick3.x
        brickBody.position.y=brick3.y

        rect(brickBody.position.x,brickBody.position.y,100,100)*/


       }



}




function spawnGround2 (){



  if(frameCount%300===0){


    ground2=createSprite(15000,120)
    ground2.y=Math.round(random(120,600))
    ground2.velocityX=-10


    ground2.addImage(smallGround)
    ground2.lifetime=800
    groundGroup.add(ground2)


  }



}




function spawnGuns4gun(){



  if(frameCount%600===0){


    var gun4=createSprite(15000,110,100,20)
    gun4.y=ground2.y
    gun4.x=ground2.x


    gun4.addImage(enemyMachineGun)
    gun4.lifetime=900
    gun4.velocityX=-10


    gun4.scale=1/2


   setInterval(()=>{



    gunBullets4=createSprite(gun4.x-20,gun4.y-30,10,5)
    gunBullets4.velocityX=-30
    gunBullets4.lifetime=130


    gunBullets4.addImage(enemyMachineGunBulletsImage)
    gunBullets4.scale=1/3
    console.log("inside set interval of spawn guns 2")



   },1000)



  }



}




function spawnGuns4(){



  if(frameCount%600===0){


    gun4=createSprite(15000,110,100,20)
    gun4.y=brick4.y
    gun4.x=brick4.x


    gun4.addImage(enemyMachineGun)
    gun4.lifetime=900
    gun4.velocityX=-10


    gun4.scale=1/2


   setInterval(()=>{



    gunBullets4=createSprite(gun4.x-20,gun4.y-30,10,5)
    gunBullets4.velocityX=-30
    gunBullets4.lifetime=130



    gunBullets4.addImage(enemyMachineGunBulletsImage)
    gunBullets4.scale=1/3
    console.log("inside set interval of spawn guns 2")



   },1000)



  }



}





