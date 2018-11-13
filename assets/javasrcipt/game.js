$(document).ready(function () {


    // Global Variables
    // Ids = variables
    var game = {
        userSum: 0,

        // var crystal_1;
        crystal_1: 0,
        crystal_2: 0,
        crystal_3: 0,
        crystal_4: 0,

        // console.log(crystal_1)

        // // Data Types
        // winValue = 0;
        // lossesValue = 0;
    };
    
    

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


    game.crystal_1 = Math.floor(Math.random() * 12) + 1;
    game.crystal_2 = Math.floor(Math.random() * 12) + 1;
    game.crystal_3 = Math.floor(Math.random() * 12) + 1;
    game.crystal_4 = Math.floor(Math.random() * 12) + 1;

    console.log("This is Crystal 1 Value " + game.crystal_1);
    console.log("THis is Crystal 2 Value " + game.crystal_2);
    console.log("This is Crystal 3 Value " + game.crystal_3);
    console.log("This is Crystal 4 Value " + game.crystal_4);

    // Assigns value to buttons. See link for reference: https://www.w3schools.com/jquery/misc_data.asp
    // $("#crystal_1").click(console.log($("crystal_1Val").val(crystal_1Val)));
    // $("#btn1").click(function(){
    // $("div").data("greeting", "Hello World");

    function updateUserSum(x){
        $("#userSum").html(x);
    }
    
    $("#crystal_1").click(function () {
        console.log("crystal _2: " + game.crystal_2)
        game.userSum += game.crystal_1;
        updateUserSum(game.userSum);
        console.log(game.userSum);
        
    });
    $("#crystal_2").click(function () {
        console.log("crystal _2: " + game.crystal_2);
        //add the number to the sum
        game.userSum += game.crystal_2;
        console.log(game.userSum);
        //Update the page
        updateUserSum(game.userSum);
    })

    $("#crystal_3").click(function () {
        console.log("crystal _3: " + game.crystal_3)
        game.userSum += game.crystal_3;
        console.log(game.userSum);
        updateUserSum(game.userSum);
    })

    $("#crystal_4").click(function () {
        console.log("crystal _4: " + game.crystal_4)
        game.userSum += game.crystal_4;
        console.log(game.userSum);
        updateUserSum(game.userSum);
    })

   


    // Multi use Functions
    // 3. Sum crystals values when clicked
    // 4. Compare values to Rand Num Comp
    // 5. If Match User Wins append to DOM You Win, reset
    // 6. If No Match User loses , add loss, reset
    // 7. reset function

});
