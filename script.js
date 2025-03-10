const text = document.getElementById ("text");
const button1 = document.getElementById("button1");
const container = document.getElementById("container");
let eh30 = new Audio('assets/eh30.mp3')
let sidelined = new Audio('assets/sidelined.mp3')
let MUSTARD = new Audio('assets/mustard.mp3')
let android = new Audio('assets/android.mp3')
let no = new Audio('assets/NO.mp3')

let clicks = 0;

button1.addEventListener("click", annoy);

function annoy() {
    
    clicks++;
    if(clicks == 1){
        text.innerHTML = "Hey! STOP IT";
        sidelined.play("sidelined.mp3");
}
else if(clicks == 10){
    text.innerHTML = "I WANT YOU TO STOP DUDE";
    button1.classList.add("angry");
    MUSTARD.play("mustard.mp3");
}
else if(clicks == 15){
    text.innerHTML = "I WILL HUNT YOUUUU DOWNNNNNN";
    yay.play("eh30mp3");
}
else if(clicks == 20){
    text.innerHTML = "YOU ASKED FOR IT"
    const button2 = document.createElement("button");
    button2.innerHTML = "PRESS ME :)";
    button2.classList.add("button1");
    button2.classList.add("button2");
    container.appendChild(button2);
}
else if(clicks == 25){
    text.innerHTML = "I'M COMIN"
    button1.classList.add("button1")
}
else if(clicks == 30){
    text.innerHTML = "NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"
    button1.classList.remove("angry")
    no.play("NO.mp3");

}
else if(clicks == 35){
    text.innerHTML = "YOUR LUCKY THAT IM 20 HOURS AWAY FROM YOU"
    button2.classList.add("spin")
}
else if(clicks == 40){
    text.innerHTML = "Uhh"
}
else if(clicks == 45){
    text.innerHTML = "I'll let you go"
}
else if(clicks == 50){
    text.innerHTML = "SIKE"
}
else if(clicks == 55){
    text.innerHTML = "Im HERE"
}
else if(clicks == 65){
    text.innerHTML = "Get to 100 clicks to win and you won't get captured"
    button1.classList.add ("up-and-down")
}
else if(clicks == 100){
text.innerHTML = "You Win Congrats"
android.play("android.mp3");
}
}