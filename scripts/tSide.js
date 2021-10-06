"!use strict"
let HpTextTside = document.getElementsByClassName("Hp-text-tSide")[0];
let lifeBar = document.getElementsByClassName("lifeLine")[0];
let enemy = document.getElementsByClassName("enemy")[0];
let ak47 = document.getElementsByClassName("ak47")[0];
let ammo = document.getElementsByClassName("counter__ammo")[0]


function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

let tSide = {
    health: 100,
    damage: 27,
    createPercent: 0,
    bullets: 30,
    pivPav(){
        ak47.style.transform = "scale(1.6)";
        sleep(50).then(() => {
            ak47.style.transform = "scale(1.8)";
        });
        weaponBulletRestriction = () => {
          ammo.textContent = this.bullets;
          console.log('sdfsd');
        };
    },
    giveDamage(){
        enemyCtSideLoseHp(this.damage);
    },
    getDamage(damage){
        this.health -= damage;
    },
    updateHealth(){
        HpTextTside.textContent = this.health;
        lifeBar.style.width = this.health + "px";
    },
    hpBar(damage){
        this.getDamage(damage);
        this.updateHealth();
        this.checkHealth();
    },
    checkHealth(){
        if(this.health <= 0){
            HpTextTside.textContent = 0;
            lifeBar.style.display = "none";
            alert("you are dead");
        }
    },
    weaponBulletRestriction(){
      
    },
    weaponReload(){

    }
}

let tSideGiveDamage = tSide.giveDamage.bind(tSide);
let test = tSide.pivPav.bind(tSide);
document.body.addEventListener("click", tSide.pivPav);
enemy.addEventListener("click", tSideGiveDamage);