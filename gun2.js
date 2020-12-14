class Gun2{


    constructor(x,y){


       this.sprite=createSprite(x,y,100,20)


        this.image=loadImage("images/machine enemy.png") 


        this.gun2Bullets=[] 


    }



    display(){


       

       
    
            this.sprite.y=brick2.y-20
            this.sprite.x=brick2.x
        
        
            this.sprite.addImage(this.image)
            this.sprite.lifetime=900
           
        
            this.sprite.scale=1/2
        
    
            this.sprite.velocityX=-10
        
              
            
            this.sprite.setCollider("rectangle",0,0,300,80)
          
            drawSprites()
        
    }



    /*fire(){


        setInterval(()=>{
        
        
            gunBullets2=createSprite(gun2.x-20,gun2.y-30,10,5)
            gunBullets2.velocityX=-30
            gunBullets2.lifetime=130
        
        
            gunBullets2.addImage(enemyMachineGunBulletsImage)
            gunBullets2.scale=1/3
            console.log("inside set interval of spawn guns 2")
        

            gunBulletsGroup.add(gunBullets2)
            this.gun2Bullets.push(gunBullets2)

        
           },2000)


    }*/



    destroyGun(){

        

        if(this.sprite.isTouching(bulletsgroup)){

        console.log("destroy gun")

        this.sprite.destroy()


        }


    }


}


    