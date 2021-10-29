let colorPressed = "";
let rightColor = "";
let score = 0;
let count = 0;
let alreadyPressed = 0;
let highScore = 0;
let gameOverStatus = 0;
let simonSays = 0;
var randIndex = 0;
var clock;


colorList=["rojo","verde","azul","amarillo","negro"];
highScoreArray=[];
simonSaysProbability=[1,1,1,1,1,0];

function countdown(){
    count = 4;
    clock = setInterval(function() {
        count--;
        document.getElementById("timer").innerHTML = count;

        if(count === 0) {
            if(simonSays === 1){
                gameover();
            }else if(simonSays === 0){
                setTimeout(generateColor, 1000);
                count = 4;
                score++;
                document.getElementById('score').innerHTML = "Puntaje: " + score;
            }
        }
    }, 1000);
}
   
function randomizeColor() {
    if (colorList.length === 0) {
        colorList = ["rojo", "verde", "azul", "amarillo", "negro"];
    }
    randIndex = parseInt(Math.random() * colorList.length);
    rightColor = colorList.splice(randIndex, 1);
    console.log(rightColor);
    console.log(simonSays);
}


function generateColor(){
    alreadyPressed = 0;
    //rightColor =  colorList[Math.floor(Math.random()*colorList.length)];
    simonSays =  simonSaysProbability[Math.floor(Math.random()*simonSaysProbability.length)];
    randomizeColor();
    if(simonSays === 1) {
        document.getElementById("command").innerHTML = "Simon dice: presiona " + rightColor;
    }else if(simonSays === 0){
        document.getElementById("command").innerHTML = "Presiona " + rightColor;
    }
}


function start(){
    if(document.getElementById("startEnd").innerHTML !== "Reiniciar"){
        gameOverStatus = 0;
        generateDelay = setTimeout(generateColor,1000);
        countdown();
        score = 0;
        alreadyPressed = 0;
        document.getElementById("score").innerHTML = "Puntaje: " + score;
        document.getElementById("startEnd").innerHTML = "Reiniciar";
        document.getElementById("highScore").innerHTML = null;
        document.getElementById("redButton").removeAttribute("disabled");
        document.getElementById("greenButton").removeAttribute("disabled");
        document.getElementById("blueButton").removeAttribute("disabled");
        document.getElementById("blackButton").removeAttribute("disabled");
        document.getElementById("yellowButton").removeAttribute("disabled");

    }else if(document.getElementById("startEnd").innerHTML === "Reiniciar"){
        gameOverStatus = 1;
        count = 0;
        score = 0;
        alreadyPressed = 0;
        document.getElementById("score").innerHTML = "Puntaje: " + score;
        document.getElementById("timer").innerHTML = "...";
        document.getElementById("startEnd").innerHTML = "Iniciar Juego";
        document.getElementById("command").innerHTML = "Simon dice... Listo para iniciar!";
        clearInterval(clock);
        document.getElementById("redButton").setAttribute("disabled","disabled");
        document.getElementById("greenButton").setAttribute("disabled","disabled");
        document.getElementById("blueButton").setAttribute("disabled","disabled");
        document.getElementById("yellowButton").setAttribute("disabled","disabled");
        document.getElementById("blackButton").setAttribute("disabled","disabled");

    }
}

function gameover(){
    clearInterval(clock);
    gameOverStatus = 1;
    highScoreArray.push(score);
    highScore = Math.max.apply(null, highScoreArray);
    score = 0;
    alreadyPressed = 0;
    document.getElementById("highScore").innerHTML = "Puntaje máximo: " + highScore;
    document.getElementById("timer").innerHTML = "...";
    document.getElementById("command").innerHTML = "Simon dice: Esfuérzate un poco más!";
    document.getElementById("startEnd").innerHTML = "Iniciar";
    document.getElementById("redButton").setAttribute("disabled","disabled");
    document.getElementById("greenButton").setAttribute("disabled","disabled");
    document.getElementById("blueButton").setAttribute("disabled","disabled");
    document.getElementById("yellowButton").setAttribute("disabled","disabled");
    document.getElementById("blackButton").setAttribute("disabled","disabled");

}


function checkColor(){
    if(colorPressed == rightColor && simonSays === 1){
        if(alreadyPressed === 0 && gameOverStatus === 0) {
            alreadyPressed = 1;
            setTimeout(generateColor, 645);
            count = 4;
            score++;
            document.getElementById("score").innerHTML = "Puntaje: " + score;
        }else if(alreadyPressed === 1 || gameOverStatus === 1){
            alreadyPressed = 1;
        }
    }if (colorPressed == rightColor && simonSays === 0){
        gameover();
    }if (colorPressed != rightColor && simonSays === 1){
        gameover();
    }
}

   function pressRed(){
    colorPressed="rojo";
    checkColor();
}

function pressGreen(){
    colorPressed="verde";
    checkColor();
}

function pressBlue(){
    colorPressed="azul";
    checkColor();
}

function pressYellow(){
    colorPressed="amarillo";
    checkColor();
}

function pressBlack(){
    colorPressed="negro";
    checkColor();
} ;
