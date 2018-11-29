
var currentNum = Math.floor((Math.random() * 100) + 20);
var crystalValueOption1 = Math.floor((Math.random() * 12) + 1);
var crystalValueOption2 = Math.floor((Math.random() * 12) + 1);
var crystalValueOption3 = Math.floor((Math.random() * 12) + 1);
var crystalValueOption4 = Math.floor((Math.random() * 12) + 1);
var loses = 0;
var wins = 0;

function endGame() {



}

numberOptions = [crystalValueOption1, crystalValueOption2, crystalValueOption3, crystalValueOption4];

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


    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    totalScore += crystalValue;

    var scoreSpan = $("#newScore").text(totalScore);
    $("#newScore").append(scoreSpan);

    if (totalScore === currentNum) {
        alert("You Win!!");
        wins++;
        var winSpan = $("#wins").text(wins);
        $("#wins").append(winSpan);
    } else if (totalScore >= currentNum) {
        alert("You Lose!!");
        loses++;
        var loseSpan = $("#loses").text(loses);
        $("#loses").append(loseSpan);
    }



});


