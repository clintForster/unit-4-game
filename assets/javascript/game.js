var randy = 0;

function random() {
    randy = Math.floor((Math.random() * 12) + 1);
    return randy;
}

var currentNum = Math.floor((Math.random() * 100) + 20);
var crystalValueOption1 = random();
var crystalValueOption2 = random();
var crystalValueOption3 = random();
var crystalValueOption4 = random();
var loses = 0;
var wins = 0;

numberOptions = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)];

$("#number-to-guess").text(currentNum);


var totalScore = 0;

for (var i = 0; i < numberOptions.length; i++) {
    
    var imageCrystal = $("<img>");
    
    imageCrystal.addClass("crystal-image");
    
    imageCrystal.attr("src", "https://images-na.ssl-images-amazon.com/images/I/51snWRfynML._SL500_.jpg")
    
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    
    $("#crystals").append(imageCrystal);
    
}


$(".crystal-image").on("click", function() {
    
    isReady = false;
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    
    totalScore += crystalValue;
    
    var scoreSpan = $("#newScore").text(totalScore);
    $("#newScore").append(scoreSpan);
    
    if (totalScore >= currentNum) {
        isReady = true;
    }
    
    if (isReady = true && totalScore === currentNum) {
        currentNum = Math.floor((Math.random() * 100) + 20);
        crystalValueOption1 = random();
        crystalValueOption2 = random();
        crystalValueOption3 = random();
        crystalValueOption4 = random();
        alert("You Win!!");
        wins++;
        var winSpan = $("#wins").text(wins);
        $("#wins").append(winSpan);
        totalScore = 0;
        $("#number-to-guess").text(currentNum);
        scoreSpan = $("#newScore").text(totalScore);
        $("#newScore").append(scoreSpan);
        
    } else if (isReady = true && totalScore >= currentNum) {
        currentNum = Math.floor((Math.random() * 100) + 20);
        crystalValueOption1 = random();
        crystalValueOption2 = random();
        crystalValueOption3 = random();
        crystalValueOption4 = random();
        alert("You Lose!!");
        loses++;
        var loseSpan = $("#loses").text(loses);
        $("#loses").append(loseSpan);
        totalScore = 0;
        $("#number-to-guess").text(currentNum);
        scoreSpan = $("#newScore").text(totalScore);
        $("#newScore").append(scoreSpan);
        
    }
    
});


