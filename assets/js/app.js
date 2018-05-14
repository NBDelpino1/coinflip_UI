var heads = 0;
var tails = 0;
var flips = heads + tails;

// Onclick handler in HTML triggers function
// Hide static coin, Get random result, set image to heads if < .5, tails if otherwise, increment count then display count
function coinToss (){

        document.getElementById("static-coin").style.display = 'none';

    if(Math.random() > .5){
        document.getElementById("coin").src = "assets/images/heads.png" //place heads coin image path here
        heads ++;
        flips ++;
        document.getElementById("heads").innerHTML = heads;
        document.getElementById("total-flips").innerHTML = flips;
    }
    else {
        document.getElementById("coin").src ="assets/images/tails.png" //place tails coin image path here
        tails ++;
        flips ++;
        document.getElementById("tails").innerHTML = tails;
        document.getElementById("total-flips").innerHTML = flips;
    }
}

