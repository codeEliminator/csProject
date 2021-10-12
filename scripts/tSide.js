"!use strict"
let HpTextTside = document.getElementsByClassName("Hp-text-tSide")[0];
let lifeBar = document.getElementsByClassName("lifeLine")[0];
let enemy = document.getElementsByClassName("enemy")[0];
let ak47 = document.getElementsByClassName("ak47")[0];
let bullets = document.querySelector('.bullets');
const hpBoxAdd = document.getElementsByClassName('healthBox')[0];

let aboutInfo = document.querySelector('.about__info');
let userLogin = document.createElement('div');
userLogin.style.backgroundColor = 'white';
userLogin.style.fontSize = '20px';
userLogin.textContent = localStorage.getItem('User_Name');
aboutInfo.append(userLogin);

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

let tSide = {
    health: 100,
    damage: 12,
    addLife: 5,
    isAlive: true,
    shoot(){
        if(this.isAlive){
            ak47.style.transform = "scale(1.6)";
            sleep(50).then(() => {
                ak47.style.transform = "scale(1.8)";
            });
        }
        else
            alert("You are dead");
        
        
    },
    giveDamage(){
        if(this.isAlive)
            enemyCtSideLoseHp(this.damage);
        else
            alert("You are dead");
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
            document.body.removeEventListener('click', this.bulletsRectriction);          
            enemy.removeEventListener("click", this.giveDamage);
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
    addLifeBox() {
        this.health += this.addLife;
        this.updateHealth()
    }
   
}
let shoot = tSide.shoot.bind(tSide);
let addLife = tSide.addLifeBox.bind(tSide);
let tSideGiveDamage = tSide.giveDamage.bind(tSide);
let tSideGetDamage = tSide.hpBar.bind(tSide);
document.body.addEventListener("click", tSide.bulletsRectriction);
document.body.addEventListener('keydown', tSide.reloadWeapon);
document.body.addEventListener("click", shoot);
enemy.addEventListener("click", tSideGiveDamage);
hpBoxAdd.addEventListener('click', addLife);