var randomNumber1= Math.floor(Math.random()*6)+1; //generates random no btw 1 and 6
var randomdiceimage = "dice" + randomNumber1 + ".png"; //genarates the image file of the die 
var randomimagesrc = "images/" + randomdiceimage; // stores the path of the image file generated
var image1 = document.querySelectorAll("img")[0]; //selects the first element in the image document
image1.setAttribute("src",randomimagesrc); //sets the src with the image attribute with the generated randomimagesrc


var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomimagesrc2 = "images/dice" + randomNumber2 + ".png" ;
document.querySelectorAll("img")[1].setAttribute("src", randomimagesrc2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML= "🚩 Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML= "Draw!";
}

// math.floor used to round it off the number to nearest integer
// math.random genarates random no btw 0 and 1 i.e floating num
