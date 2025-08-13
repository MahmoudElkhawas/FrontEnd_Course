const ball = document.getElementById("ball");
const paddle = document.getElementById("paddle");
const gamescore = document.getElementById("score")

let ballx =200;
let bally = 0;
let paddleX = 160;

document.addEventListener('keydown'  , (event) => {
    if(event.key === 'ArrowLeft' && paddleX > 0 ){
        paddleX -= 20
    }else if(event.key === 'ArrowRight' && paddleX <320){
        paddleX += 20;
    }
    paddle.style.left = paddleX + "px";
});

function gameloop() {

    bally += 5;
    ball.style.left = ballY + "px"
    ball.style.left = ballX + "px"

    if(bally => 490 && ballX >= paddleX && ballX) {
        score++;
        gamescore.textContent = `score: ${score}` ;

        resetBall();
    }
    if(ballY > 500)
        alert("Game Over");
        clearInterval(loop);

}
function resetball(){
    ballX = Math.floor(Math.random() * 380);
    ballY = 0;
}

const loop = setInterval(gameloop, 50);