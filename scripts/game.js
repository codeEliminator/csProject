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
            clearInterval(blinkId);
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
    hpbox=document.getElementsByClassName('healthBox')[0]	
        if(hpbox.style.display=='block'){
            hpbox.style.display='none'
    }
        else{
            hpbox.style.display='block'  
        } 
    }
  let blinkId = setInterval(blink,2000);
    