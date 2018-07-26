function turnBlue() {
    document.getElementById("mood-box").style.backgroundColor = "blue";
}

document.getElementById("mood-box").addEventListener('mouseover', turnBlue);

function turnWhite() {
    document.getElementById("mood-box").style.backgroundColor = "white";
}

document.getElementById("mood-box").addEventListener('mouseout', turnWhite);

function turnRed() {
    document.getElementById("mood-box").style.backgroundColor = "red";
}

document.getElementById("mood-box").addEventListener("mousedown", turnRed);

function turnYellow() {
    document.getElementById("mood-box").style.backgroundColor = "yellow";
}

document.getElementById("mood-box").addEventListener("mouseup", turnYellow);

function turnGreen() {
    document.getElementById("mood-box").style.backgroundColor = "green";
}

document.getElementById("mood-box").addEventListener("dblclick", turnGreen);

function turnOrange() {
    document.getElementById("mood-box").style.backgroundColor = "orange";
}

window.addEventListener("wheel", turnOrange);
