var heads = 0;
var tails = 0;
var flips = heads + tails;
var sound = document.getElementById("coinSound");

// Onclick handler located in HTML

function coinToss (){

    //toggle reset button

    document.getElementById("reset-btn").src ="assets/images/reset-out.png";;

    //toggle coin

    document.getElementById("static-coin").style.display = 'none';
    document.getElementById("coin").style.display = 'none';
    document.getElementById("flipping-coin").style.display = 'block';

    //play sound

    sound.play();

    //delay actions to coincide with audio ending

    setTimeout(function(){

        //toggle coin

        document.getElementById("flipping-coin").style.display = 'none';

        //toggle coin

        document.getElementById("coin").style.display = 'block';

        //toggle button

        document.getElementById("button").src ="assets/images/btn-out.png";

        //calculate then display result - matching coin and count

        if(Math.random() > .5){
            document.getElementById("coin").src = "assets/images/heads.png" //place heads coin image path here
            heads ++;
            flips ++;
            document.getElementById("heads").innerHTML = heads;
            document.getElementById("total-flips").innerHTML = flips;;
        }
        else {
            document.getElementById("coin").src ="assets/images/tails.png" //place tails coin image path here
            tails ++;
            flips ++;
            document.getElementById("tails").innerHTML = tails;
            document.getElementById("total-flips").innerHTML = flips;
        }
    }, 700);

    //toggle button

     document.getElementById("button").src ="assets/images/btn-in.png";

}


//restart everything

function restart(){
    document.location.href = "";
}














