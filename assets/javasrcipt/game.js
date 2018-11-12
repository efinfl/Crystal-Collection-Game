$(document).ready(function () {


    // Global Variables
    // Ids = variables
    var computerChoice = 0;
    var useSum = 0;
    // console.log("computer Choice " + computerChoice)

    var crystal_1 = "";
    var crystal_2 = "";
    var crystal_3 = "";
    var crystal_4 = "";


    // Data Types
    var winValue = 0;
    var lossesValue = 0;

    // Reset
    function reset() {
        winValue = "";
        lossesValue = ""
    }
    console.log("is this working")

    // Single Functions
    // 1. Computer chooses rand Num

    randomForComputer = Math.floor(Math.random() * 18) + 102;
    console.log("computerChoic: " + randomForComputer);
    
    // 2. cristals get a random number
    crystalValue = Math.floor(Math.random() * 12);
    console.log("crystalValue: " + crystalValue);

    // Multi use Functions
    // 3. Sum crystals values when clicked
    // 4. Compare values to Rand Num Comp
    // 5. If Match User Wins append to DOM You Win, reset
    // 6. If No Match User loses , add loss, reset
    // 7. reset function

});
