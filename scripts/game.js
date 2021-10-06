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
        this.checkAlive();
    },
    checkAlive(){
        if(!tSide.isAlive){
            console.log("jbgfdsiyfay");
            clearInterval(timer);
        }  
    }
}
let showDamage = game.showDamage.bind(game);
let timer = setInterval(showDamage, 5000);