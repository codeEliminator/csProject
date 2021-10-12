"use strict"

let lvl = document.getElementsByClassName("lvl")[0];
let lvlScore = Number(localStorage.getItem("lvl"));
lvl.textContent += lvlScore;
const randInt = (min = 1, max = 30) => Math.floor(Math.random() * (max - min)) + min;



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
        this.checkAliveT();
        this.checkAliveCt();
        this.giveDamage();
        this.damageView();
    },
    checkAliveT(){
        if(!tSide.isAlive){
            clearInterval(timer); 
            hpBox.style.display = 'none';
            clearTimeout(timerIdBLinkOff,timerIdBLinkOn);
        }
    },
    checkAliveCt(){
        if(!enemyCtSide.isAlive){
            lvlScore += 1;
            localStorage.setItem("lvl",lvlScore);
            clearInterval(timer);
        }
    }
}

let showDamage = game.showDamage.bind(game);
let timer = setInterval(showDamage, 5000);

let hpBox = document.getElementsByClassName('healthBox')[0] 

let timerIdBLinkOn = setTimeout(function blinkHpBoxOn () {
  hpBox.style.display = 'block';
  timerIdBLinkOn = setTimeout(blinkHpBoxOn, 5000);
}, 1000);

let timerIdBLinkOff = setTimeout(function blinkHpBoxOff () {
  hpBox.style.display = 'none';
  timerIdBLinkOff = setTimeout(blinkHpBoxOff, 5000);
}, 2000);
