let lastPaintTime = 0;
let increamenthead = { x: 0, y: 0 };
let board = document.querySelectorAll(".Board");
let food = { x: 6, y: 9 };
let snakeArr = [{ x: 20, y: 23 }];

function main(ctime) {
  window.requestAnimationFrame(main);
  if ((ctime - lastPaintTime) / 1000 < 1 / 2) {
    return;
  }
  lastPaintTime = ctime;
  gameEngine();
}

function gameEngine() {
  //updatin gsnake array and food
  //display snake
  board.innerHTML = "";
  snakeArr.forEach((e, index) => {
    let snakeElement = document.createElement("div");

    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    snakeElement.classList.add("head");
    board[0].appendChild(snakeElement);
  });

  // dissplay food eleement
  let foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.x;
  foodElement.style.gridColumnStart = food.y;
  foodElement.classList.add("food");
  board[0].appendChild(foodElement);

  //moving the snake
  for (let i = snakeArr.length - 1; i >= 0; i--) {
    snakeArr[i + 1] = { ...snakeArr[i] };
  }

  snakeArr[0].x += increamenthead.x;
  snakeArr[0].y += increamenthead.y;
}

//Main logic starts here
window.requestAnimationFrame(main);
// which key is pressed
window.addEventListener("keydown", (e) => {
  increamenthead = { x: 0, y: 0 };
  switch (e.key) {
    case "ArrowUp":
      console.log("arrowup");
      increamenthead.x = 0;
      increamenthead.y = -1;
      break;

    case "ArrowDown":
      console.log("arrowdown");
      increamenthead.x = 0;
      increamenthead.y = 1;
      break;
    case "ArrowLeft":
      console.log("arrowleft");
      increamenthead.x = -1;
      increamenthead.y = 0;
      break;
    case "ArrowRight":
      console.log("arrowright");
      increamenthead.x = 1;
      increamenthead.y = 0;
      break;
  }
});
