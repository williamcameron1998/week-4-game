$(function () {
    var crystal1 = 10
    var crystal2 = 20
    var crystal3 = 5
    var crystal4 = 1
    var counter = 0
    var goal = Math.floor(Math.random() * 100) + 50;
    console.log(goal);
   var wins= 0;
   var losses= 0;
    $("#goal").text(goal)
    $("#player_wins").text(wins)
    $("player-losses").text(losses)
$("crystal1").on("click", function(){
    counter= counter + crystal1;
    if (counter == goal){
        alert("you win!")
    } else if { 
     (counter > goal)
        alert("try again")
    }
}
    
});


