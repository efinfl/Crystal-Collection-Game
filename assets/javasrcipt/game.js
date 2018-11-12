$(document).ready(function () {


    // Global Variables
    // Ids = variables

    var useSum = 0;

    // var crystal_1;
    var crystal_1;
    var crystal_2;
    var crystal_3;
    var crystal_4;

    // console.log(crystal_1)

    // Data Types
    var winValue = 0;
    var lossesValue = 0;

    // Reset
    function reset() {
        winValue = "";
        lossesValue = "";
    }
    console.log("is this working")

    // Single Functions
    // Computer chooses rand Num
    randomForComputer = Math.floor(Math.random() * 102) + 18;
    console.log("computerChoic: " + randomForComputer);

    // computerChoice gets displayed
    $("#computerChoice").html(randomForComputer);

    // 2. crystals get a random number
    // crystalRandom = Math.floor(Math.random() * 12) + 1;
    // console.log("crystalRandom " + crystalRandom)

   
    var crystal_1Val = Math.floor(Math.random() * 12) + 1;
    var crystal_2Val = Math.floor(Math.random() * 12) + 1;
    var crystal_3Val = Math.floor(Math.random() * 12) + 1;
    var crystal_4Val = Math.floor(Math.random() * 12) + 1;
    
    $("crystal_1").click(console.log($("crystal_1Val").val(crystal_1Val)));
    
    


    // Multi use Functions
    // 3. Sum crystals values when clicked
    // 4. Compare values to Rand Num Comp
    // 5. If Match User Wins append to DOM You Win, reset
    // 6. If No Match User loses , add loss, reset
    // 7. reset function

});
