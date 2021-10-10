"!use strict"
let HpTextTside = document.getElementsByClassName("Hp-text-tSide")[0];
let lifeBar = document.getElementsByClassName("lifeLine")[0];
let enemy = document.getElementsByClassName("enemy")[0];
let ak47 = document.getElementsByClassName("ak47")[0];
let bullets = document.querySelector('.bullets');


function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

let tSide = {
    health: 100,
    damage: 27,
    createPercent: 0,
    isAlive: true,
    shoot(){
        if(this.isAlive == true){
            ak47.style.transform = "scale(1.6)";
            sleep(50).then(() => {
                ak47.style.transform = "scale(1.8)";
            });
        }else{
            alert("You are dead");
        }
        
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
            this.isAlive = false;
            HpTextTside.textContent = 0;
            lifeBar.style.display = "none";
            alert("you are dead");
        }
    },
    bulletsRectriction(event) {
      bullets.textContent = Number(bullets.textContent) - 1;
      if (Number(bullets.textContent) === 0 || Number(bullets.textContent) < 0) {
        bullets.textContent = '30';
      }
    },
    reloadWeapon(event) {
      if (event.code === 'KeyR'){
        bullets.textContent = '30';
      }
    },
}
let shoot = tSide.shoot.bind(tSide);
let tSideGiveDamage = tSide.giveDamage.bind(tSide);
let tSideGetDamage = tSide.hpBar.bind(tSide);
document.body.addEventListener("click", tSide.bulletsRectriction);
document.body.addEventListener('keypress', tSide.reloadWeapon)
document.body.addEventListener("click", shoot);
enemy.addEventListener("click", tSideGiveDamage);