"!use strict"

let HpCtside = document.getElementsByClassName("Hp-enemy")[0];

let enemyCtSide = {
    health: 100,
    dmg: 10,
    getDamage(damage){
        this.health -= damage;
    },
    updateHealth(){
        HpCtside.style.width = this.health + "px";
    },
    hpBar(damage){
        this.getDamage(damage);
        this.updateHealth();
        if(this.health <= 0){
            HpCtside.style.display = "none";
        }
    },
}
let enemyCtSideLoseHp = enemyCtSide.hpBar.bind(enemyCtSide);

