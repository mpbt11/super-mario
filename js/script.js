const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const gameOver = document.createElement("img");
const styleGameOver = document.querySelector(".game-over");
const score = document.querySelector("#score");

let intervalScore = null;
let playScore = 0;

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./images/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    gameOver.src = "./images/game-over-text.png";
    gameOver.classList.add("game-over");
    document.getElementById("main").appendChild(gameOver);

    gameOver.style.display = "block";
    gameOver.style.marginLeft = "auto";
    gameOver.style.marginRight = "auto";

    clearInterval(loop);
    clearInterval(intervalScore);
  }
}, 10);

const scoreCounter = () => {
  playScore++;
  score.innerHTML = `Score <b>${playScore}</b>`;
  speed(playScore);
};

intervalScore = setInterval(scoreCounter, 200);

document.addEventListener("keydown", jump);

const speed = (playScore) => {

  if (playScore > 300 && playScore < 500) pipe.style.animation = "pipe-animation 1.7s infinite linear";

  if (playScore > 500) pipe.style.animation = "pipe-animation 1.5s infinite linear";

};