"!use strict"

let HpCtside = document.getElementsByClassName("Hp-enemy")[0];

let enemyCtSide = {
    health: 100,
    isAlive: true,
    getDamage(damage){
        this.health -= damage;
    },
    updateHealth(){
        HpCtside.style.width = this.health + "px";
    },
    hpBar(damage){
        this.getDamage(damage);
        this.updateHealth();
        this.checkAlive();
    },
    checkAlive(){
        if(this.health <= 0){
            this.isAlive = false;
            HpCtside.style.display = "none";
        }
    }
}
let enemyCtSideLoseHp = enemyCtSide.hpBar.bind(enemyCtSide);

{}

