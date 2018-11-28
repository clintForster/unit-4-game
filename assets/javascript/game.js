
var currentNum = Math.floor((Math.random() * 100) + 20);
var crystal1 = Math.floor((Math.random() * 100) + 12);
var crystal2 = Math.floor((Math.random() * 100) + 12);
var crystal3 = Math.floor((Math.random() * 100) + 12);
var loses = 0;
var wins = 0;


$("#number-to-guess").text(currentNum);

var totalScore = 0;

var numberOptions = [10, 5, 3, 7];

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

    alert("New Score: " + totalScore);

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

// var increment = numberOptions[Math.round(Math.random())];

// $(".crystal-image").on("click", function() {
    
//     totalScore += 10;
    
//     alert("New score: " + totalScore);
    
//     if (totalScore === currentNum) {
        
//         alert("You Win!!");
        
//     } else if (totalScore >= currentNum) {
        
//         alert("You Lose!!");
        
//     }
    
// });

