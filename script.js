let text = document.getElementById ("text");
let button1 = document.getElementById("button1");

let clicks = 0;

button1.addEventListener("click", annoy);

function annoy() {
    
    clicks++;
    if(clicks == 1){
        text.innerHTML = "Hey! STOP IT";
}
else if(clicks == 10){
    text.innerHTML = "I WANT YOU TO STOP DUDE";
}
else if(clicks == 15){
    text.innerHTML = "I WILL HUNT YOUUUU DOWNNNNNN";
}
else if(clicks == 20){
    text.innerHTML = "YOU ASKED FOR IT"
}
else if(clicks == 25){
    text.innerHTML = "I'M COMIN"
}
else if(clicks == 30){
    text.innerHTML = "GRRH"
}
else if(clicks == 35){
    text.innerHTML = "YOUR LUCKY THAT IM 20 HOURS AWAY FROM YOU"
}

}