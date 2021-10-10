"!use strict"

const randInt = (min = 1, max = 20) => Math.floor(Math.random() * (max - min)) + min;

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


let game = {
    giveDamage(){
        tSideGetDamage(randInt());
    },
    damageView(){
        DamageGiven.style.display = "block";
        sleep(200).then(() => {
            DamageGiven.style.display = "none";
        })
    },
    showDamage(){
        this.giveDamage();
        this.damageView();
        this.checkAliveT();
        this.checkAliveCt();
    },
    checkAliveT(){
        if(!tSide.isAlive){
            clearInterval(timer);
            
        }
    },
    checkAliveCt(){
        if(!enemyCtSide.isAlive){
            clearInterval(timer);
            
        }
    }
}
let showDamage = game.showDamage.bind(game);
let timer = setInterval(showDamage, 5000);


blink = function () {
    image=document.getElementsByClassName('healthBox')[0]	
        if(image.style.display=='block'){
            image.style.display='none'
    }
        else{
            image.style.display='block'  
        } 
    }
  let blinkId = setInterval(blink,2000);
            clearInterval(blinkId);
   

    