let gameseq = [];
let userSeq = [];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "purple", "greeen"];
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 150);
}

function userFlshFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 150);
}
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  // console.log(randIdx, " ", randColor, " ", randBtn);
  gameseq.push(randColor);
  console.log(gameseq);

  gameFlash(randBtn);
}

function checkAns(indx) {
  // console.log("curr leve/Sl: ", level);

  // let indx = level - 1;
  if (gameseq[indx] === userSeq[indx]) {
    if (userSeq.length == gameseq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    if (started == true) {
      h2.innerHTML = `Game Over!!, Your score was <b>${level}</b>. <br>Press any key to restart`;
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(() => {
        document.querySelector("body").style.backgroundColor = "white";
      }, 150);
      // started = false;
      // level = 0;
      reset();
    }
  }
}

let allBtnns = document.querySelectorAll(".btn");
function btnPress() {
  let btn = this;
  if (started == true) {
    userFlshFlash(btn);
  }
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  // console.log(userSeq);
  checkAns(userSeq.length - 1);
}
for (btn of allBtnns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  userSeq = [];
  gameseq = [];
  level = 0;
}
