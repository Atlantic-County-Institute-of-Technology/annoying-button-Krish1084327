const text = document.getElementById ("text");
const button1 = document.getElementById("button1");
const container = document.getElementById("container");

let clicks = 0;

button1.addEventListener("click", annoy);

function annoy() {
    
    clicks++;
    if(clicks == 1){
        text.innerHTML = "Hey! STOP IT";
}
else if(clicks == 10){
    text.innerHTML = "I WANT YOU TO STOP DUDE";
    button1.classList.add("angry");
}
else if(clicks == 15){
    text.innerHTML = "I WILL HUNT YOUUUU DOWNNNNNN";
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
    text.innerHTML = "GRRH"
    button1.classList.remove("angry")
}
else if(clicks == 35){
    text.innerHTML = "YOUR LUCKY THAT IM 20 HOURS AWAY FROM YOU"
}
else if(clicks == 40){
    text.innerHTML = "Uhh"
}
else if(clicks == 45){
    text.innerHTML = "I'll let you go"
}
}