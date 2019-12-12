//odvandyk
//20724023
//Prototype 1 


let canvas = document.getElementById("PeachCanvas");
let ctx = canvas.getContext("2d");

//declare variables 

let splashScreenOn = true;
let gameOn = false;
let pit1Colour = "black";
let pit2Colour = "black";
let pit3Colour = "black";
let pit4Colour = "black";
let pit5Colour = "black";
let pit6Colour = "black";

let Turn = true;
let turnpass = false; 
let cpuTurn = false; 

let pit1X = 200;
let pit1Y = 200;

let pit2X = 200;
let pit2Y = 200;

let pit3X = 200;
let pit3Y = 200;

let pit4X = 200;
let pit4Y = 200;

let pit5X = 200;
let pit5Y = 200;

let pit6X = 200;
let pit6Y = 200;

let pitWidth = 15;
let pitHeight = 15;

let blackCount = 0;
let whiteCount = 0;

let beanCount = 10;
let playerBeans = 0; 
let cpuBeans = 0; 


//ctx.fillRect(0, 0, canvas.width, canvas.height); 



document.getElementById("PlayButton").addEventListener("click", StartGame);
document.getElementById("ShakeBowl").addEventListener("click", shakeBowl);
document.getElementById("Restart").addEventListener("click", RestartGame);
document.getElementById("PassTurn").addEventListener("click", PassTurn);

//get images
let mat = new Image();
//mat.addEventListener("load", displaySplashScreen);
mat.src = 'mat.jpg'; 

let bowl = new Image();
bowl.src = 'bowl.png';

let pitB = new Image();
pitB.src = 'blackpit.png';

let pitW = new Image();
pitW.src = 'whitepit.png';

let title = new Image();
title.addEventListener("load", displaySplashScreen); 
title.src = 'title.png';

let result = ""; 



//start the game
function StartGame() {

    console.log("in StartGame");
    myTimer = setInterval(gameLoop, 16);
    gameOn = true;
    
    
}

//game looping controller
function gameLoop() {
    if (splashScreenOn) {
        displaySplashScreen();
    }

    if (gameOn == true) {
        gameUpdate();
        Draw();

    } 

    if(splashScreenOn == false && gameOn == false){
        Draw();
    }
}
//draw elements
function Draw() {
    ctx.fillStyle = "#606060";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(mat, 0, 0, canvas.width, canvas.height);

    ctx.drawImage(bowl, canvas.width / 2 - 150, canvas.height / 2 - 150, 300, 300); 

    if (pit1Colour == "black") {
        ctx.drawImage(pitB, pit1X, pit1Y, pitWidth, pitHeight);
    } else if (pit1Colour == "white") {
        ctx.drawImage(pitW, pit1X, pit1Y, pitWidth, pitHeight); 
    }

    if (pit2Colour == "black") {
        ctx.drawImage(pitB, pit2X, pit2Y, pitWidth, pitHeight);
    } else if (pit2Colour == "white") {
        ctx.drawImage(pitW, pit2X, pit2Y, pitWidth, pitHeight);
    }

    if (pit3Colour == "black") {
        ctx.drawImage(pitB, pit3X, pit3Y, pitWidth, pitHeight);
    } else if (pit3Colour == "white") {
        ctx.drawImage(pitW, pit3X, pit3Y, pitWidth, pitHeight);
    }

    if (pit4Colour == "black") {
        ctx.drawImage(pitB, pit4X, pit4Y, pitWidth, pitHeight);
    } else if (pit4Colour == "white") {
        ctx.drawImage(pitW, pit4X, pit4Y, pitWidth, pitHeight);
    }

    if (pit5Colour == "black") {
        ctx.drawImage(pitB, pit5X, pit5Y, pitWidth, pitHeight);
    } else if (pit5Colour == "white") {
        ctx.drawImage(pitW, pit5X, pit5Y, pitWidth, pitHeight);
    }


    if (pit6Colour == "black") {
        ctx.drawImage(pitB, pit6X, pit6Y, pitWidth, pitHeight);
    } else if (pit6Colour == "white") {
        ctx.drawImage(pitW, pit6X, pit6Y, pitWidth, pitHeight);
    }
 


    ctx.fillStyle = "white"; 
    ctx.font = "20px Berlin Sans"; 
    ctx.fillText("The Peach Game", 10, 20);
    ctx.fillText("Result:" + result, 270, 20);
    ctx.fillText("Number of white:" + whiteCount, 10, 40);
    ctx.fillText("Number of black:" + blackCount, 10, 60);
    ctx.fillText("Total Beans:" + beanCount, 10, 80);
    ctx.fillText("Players Beans:" + playerBeans, 10, 380);
    ctx.fillText("Computer's Beans:" + cpuBeans, 220, 380);
    if (Turn == true) {
        ctx.fillText("Players Turn", 150, 333);
    } else {
        ctx.fillText("Cpu's Turn", 150, 333);
    }
}
// splash screen
function displaySplashScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(title, canvas.width / 2 - 150, canvas.height / 2 - 150);
  //  ctx.drawImage(mat, 0, 0);

    
   
}
//updater
function gameUpdate() {

    console.log(Turn); 
    if (Turn == false && turnpass == true) {
        cpuShakeBowl(); 
    }
    
    if (beanCount <= 0) {
        if (playerBeans > cpuBeans) {
            result = "You Win";
            beanCount = 0; 
        } else {
            result = "You Lose";
            beanCount = 0; 
          }
    }

}
//shakebowl function
function shakeBowl() {
    whiteCount = 0;
    blackCount = 0;

    if (Turn == true) {
        if (Math.random() > 0.5) {
            pit1Colour = "black";
            blackCount = blackCount + 1;

        } else {
            pit1Colour = "white";
            whiteCount = whiteCount + 1;

        }
        pit1X = Math.floor((Math.random() * 100) + 150);
        pit1Y = Math.floor((Math.random() * 100) + 150);

        if (Math.random() > 0.5) {
            pit2Colour = "black";

            blackCount = blackCount + 1;
        } else {
            pit2Colour = "white";
            whiteCount = whiteCount + 1;
        }
        pit2X = Math.floor((Math.random() * 100) + 150);
        pit2Y = Math.floor((Math.random() * 100) + 150);

        if (Math.random() > 0.5) {
            pit3Colour = "black";
            blackCount = blackCount + 1;
        } else {
            pit3Colour = "white";
            whiteCount = whiteCount + 1;
        }
        pit3X = Math.floor((Math.random() * 100) + 150);
        pit3Y = Math.floor((Math.random() * 100) + 150);

        if (Math.random() > 0.5) {
            pit4Colour = "black";
            blackCount = blackCount + 1;
        } else {
            pit4Colour = "white";
            whiteCount = whiteCount + 1;
        }
        pit4X = Math.floor((Math.random() * 100) + 150);
        pit4Y = Math.floor((Math.random() * 100) + 150);

        if (Math.random() > 0.5) {
            pit5Colour = "black";
            blackCount = blackCount + 1;
        } else {
            pit5Colour = "white";
            whiteCount = whiteCount + 1;
        }
        pit5X = Math.floor((Math.random() * 100) + 150);
        pit5Y = Math.floor((Math.random() * 100) + 150);

        if (Math.random() > 0.5) {
            pit6Colour = "black";
            blackCount = blackCount + 1;
        } else {
            pit6Colour = "white";
            whiteCount = whiteCount + 1;
        }
        pit6X = Math.floor((Math.random() * 100) + 150);
        pit6Y = Math.floor((Math.random() * 100) + 150);

        console.log("black count is" + "" + blackCount);
        console.log("white count is" + "" + whiteCount);


        if (whiteCount == 5) {
            playerBeans += 1;
            beanCount -= 1;
        } else if (whiteCount == 6) {
            playerBeans += 5;
            beanCount -= 5;
        }

        if (blackCount == 5) {
            playerBeans += 1;
            beanCount -= 1;
        } else if (blackCount == 6) {
            playerBeans += 5;
            beanCount -= 5;
        } 
        Turn = false; 
    }
}
//shakebowl for computer
function cpuShakeBowl() {
    whiteCount = 0;
    blackCount = 0;
    
        if (Math.random() > 0.5) {
            pit1Colour = "black";
            blackCount = blackCount + 1;

        } else {
            pit1Colour = "white";
            whiteCount = whiteCount + 1;

        }
        pit1X = Math.floor((Math.random() * 100) + 150);
        pit1Y = Math.floor((Math.random() * 100) + 150);

        if (Math.random() > 0.5) {
            pit2Colour = "black";

            blackCount = blackCount + 1;
        } else {
            pit2Colour = "white";
            whiteCount = whiteCount + 1;
        }
        pit2X = Math.floor((Math.random() * 100) + 150);
        pit2Y = Math.floor((Math.random() * 100) + 150);

        if (Math.random() > 0.5) {
            pit3Colour = "black";
            blackCount = blackCount + 1;
        } else {
            pit3Colour = "white";
            whiteCount = whiteCount + 1;
        }
        pit3X = Math.floor((Math.random() * 100) + 150);
        pit3Y = Math.floor((Math.random() * 100) + 150);

        if (Math.random() > 0.5) {
            pit4Colour = "black";
            blackCount = blackCount + 1;
        } else {
            pit4Colour = "white";
            whiteCount = whiteCount + 1;
        }
        pit4X = Math.floor((Math.random() * 100) + 150);
        pit4Y = Math.floor((Math.random() * 100) + 150);

        if (Math.random() > 0.5) {
            pit5Colour = "black";
            blackCount = blackCount + 1;
        } else {
            pit5Colour = "white";
            whiteCount = whiteCount + 1;
        }
        pit5X = Math.floor((Math.random() * 100) + 150);
        pit5Y = Math.floor((Math.random() * 100) + 150);

        if (Math.random() > 0.5) {
            pit6Colour = "black";
            blackCount = blackCount + 1;
        } else {
            pit6Colour = "white";
            whiteCount = whiteCount + 1;
        }
        pit6X = Math.floor((Math.random() * 100) + 150);
        pit6Y = Math.floor((Math.random() * 100) + 150);

        console.log("black count is" + "" + blackCount);
        console.log("white count is" + "" + whiteCount);


        if (whiteCount == 5) {
            cpuBeans += 1;
            beanCount -= 1;
        } else if (whiteCount == 6) {
            cpuBeans += 5;
            beanCount -= 5;
        } 

        if (blackCount == 5) {
            cpuBeans += 1;
            beanCount -= 1;
        } else if (blackCount == 6) {
            cpuBeans += 5;
            beanCount -= 5;
        } 
        Turn = true;
        turnpass = false; 
 }
//pass your turn
function PassTurn() {
    turnpass = true; 
}
//restart the game
function RestartGame() {
    whiteCount = 0;
    blackCount = 0;
    beanCount = 100;
    playerBeans = 0;
    cpuBeans = 0;
    result = ""; 
    Turn = true;
    gameOn = true; 
    
}
