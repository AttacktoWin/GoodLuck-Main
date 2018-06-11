// INVADER BLOCK BASIC
"use strict";

// Declare Global Variables

let GREY = 80;
let RED = "#bb2a27";
let GREEN = "#8cc542";
let BLUE = "#28a9e0";
let ORANGE = "#faaf3b";
let BROWN = "#aa6c39";

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(1920, 1080);

    // Initialize Global Variables
	
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background(GREEN);
	
	// Logic
    fill(BLUE);
    rect(0, 0, width/2, height);
    fill(RED);
    rect(width/2, 0, width/2, height);

    textAlign(CENTER);
    textSize(40);
    fill(255);
    text("Level Builder", width/4, height/2);
    text("Play", (width/4) * 3, height/2);
    textSize(60);
    text("GOOD LUCK", width/2 - 12, height/4 - 150);
}

function mousePressed() {
    if (mouseX > 0 && mouseX < width/2) {
        if (mouseY > 0 && mouseY < height) {
            window.location = "https://build.attackto.win";
        }
    }
    if (mouseX > width/2 && mouseX < width) {
        if (mouseY > 0 && mouseY < height) {
            window.location = "https://play.attackto.win";
        }
    }
}