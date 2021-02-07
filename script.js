
let ball = document.querySelector(".ball");

let board = document.querySelector(".board");

let boardBounds = board.getBoundingClientRect(); // The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.

let leftpaddle = document.querySelector(".left");

let rightpaddle = document.querySelector(".right");

let x = true;
let y = true;


document.addEventListener("keydown", function(e)
{

    

    if (e.key=="w")
    {
      movePaddle(leftpaddle, -1*window.innerHeight*0.1);
    }
    else if (e.key=="s")
    {
        movePaddle(leftpaddle, window.innerHeight*0.1);
    }
    else if (e.key=="ArrowUp")
    {
        movePaddle(rightpaddle, -1*window.innerHeight*0.1);
    }
    else if (e.key=="ArrowDown")
    {
        movePaddle(rightpaddle, window.innerHeight*0.1);
    }
    
})


function movePaddle(cPaddle, change)
{
    let cPaddleBounds = cPaddle.getBoundingClientRect();

    if (cPaddleBounds.top+change>= boardBounds.top && cPaddleBounds.bottom +change <=boardBounds.bottom)
    {
    cPaddle.style.top = cPaddleBounds.top+change+"px";
    }
}



function moveBall()
{
    let ballcord = ball.getBoundingClientRect();
    let ballTop = ballcord.top;
    let ballLeft = ballcord.left;
    let ballBottom = ballcord.bottom;
    let ballRight = ballcord.right;


    if (ballTop<=boardBounds.top || ballBottom>=boardBounds.bottom)
    {
      y=!y;
    }

    if (ballLeft<=boardBounds.left || ballRight>=boardBounds.right)
    {
        x = !x;
    }

    ball.style.top = y==true? ballTop+10+"px" : ballTop-10 + "px";

    ball.style.left = x==true? ballLeft+10+"px" : ballLeft-10 + "px";


    requestAnimationFrame(moveBall); 
}


requestAnimationFrame(moveBall); 