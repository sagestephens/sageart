var i=0;
var txt= 'Im collecting the best learning platforms for you!';
var speed = 50;

if(i<Text.apply.length){
  document.getElementById("typeWriter").innerHTML += txt.charAt(i);
  i++;
  setTimeout(display,speed);
}

var messages=["Im collecting the best learning platforms for you!","","Be still, and know that I am God! I will be exalted among the nations, I will be exalted in the earth!","Beauty for ashes"];
var rank=0;

// Code for Chrome, Safari and Opera
document.getElementById("myTypewriter").addEventListener("webkitAnimationEnd", changeTxt);

// Standard syntax
document.getElementById("myTypewriter").addEventListener("animationend", changeTxt);

function changeTxt(e){
  _h1 = this.getElementsByTagName("h1")[0];
  _h1.style.webkitAnimation = 'none'; // set element animation to none
   setTimeout(function() { // you surely want a delay before the next message appears
      _h1.innerHTML=messages[rank];
      var speed =2.8*messages[rank].length/20; // adjust the speed (3.5 is the original speed, 20 is the original string length
      _h1.style.webkitAnimation = 'typing '+speed+'s steps(40, end), blink-caret .75s step-end infinite'; //  switch to the original set of animation      
      (rank===messages.length-1)?rank=0:rank++; // if you have displayed the last message from the array, go back to the first one, else go to next message
    }, 1000);
}


