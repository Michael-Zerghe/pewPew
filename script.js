let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;


// TANK
let tankImg = new Image();
tankImg.src = "/assets/canon.svg";
let tankXPos = 350;
let tankYPos = 760;
let tankSpeed = 5;
tankImg.onload = () => {
    c.drawImage(tankImg,tankXPos,tankYPos);
}

//missile

let Missimg = new Image();
Missimg.src = "assets/missile.svg"
let missX = 340;
let missY = 570;
Missimg.onload = () => {
    c.drawImage(Missimg,missX,missY);
}

window.addEventListener("click",()=>{
    tankXPos += tankSpeed;
})

//position random cible

let Cibleimg = new Image();
Cibleimg.src = "/assets/cible.svg";
let randX = Math.floor(Math.random()*800);
let randY = Math.floor(Math.random()*700);

Cibleimg.onload = () => {
    c.drawImage(Cibleimg,randX,randY);
    
}
