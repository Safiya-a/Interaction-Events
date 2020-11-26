"use strict";

var vp_width = window.innerWidth/2; //create and assign a variable variable to hold the screen size
var vp_height = window.innerHeight/2;

var x = vp_width/2; //create and assign a variable to hold an position that is half of the viewport
var y = vp_height/2;

var colour = "ff0000";


function set_vp() {
	vp_width = window.innerWidth/2;
	vp_height = window.innerHeight/2;

	x = vp_width/2; //update the ball's initial position
	y = vp_height/2;

	resizeCanvas(vp_width, vp_height); //call the P5 resize canvas function; is this abstraction?
}

function up(){
    console.log("the up button was pressed!");
    y = y - 5;
}

function down(){
    console.log("the down button was pressed!");
    y = y + 5;
}

function left(){
    console.log("the left button was pressed!");
    x = x - 5;
}

function right(){
    console.log("the right button was pressed!");
    x = x + 5;
}


function preload() {
	//p5 defined function
}

function setup() {
	//this p5 defined function runs automatically once the preload function is done
	
	var viewport = createCanvas(vp_width, vp_height);
    viewport.parent("viewport_container"); //move the canvas so it’s inside the target div

    frameRate(50);
}

function paint_background() {
	//this function fills the canvas background with the specific colour
	background("#abb5b9");
}

function paint_player() {
	fill("#" + colour); //set a fill colour using the variable
	circle(x, y, 20); //draw a circle and x, y with a diameter of 20

}

function draw() {
	 //this p5 defined function runs every refresh cycle
	 paint_background();
	 paint_player();
}


//create events for the number buttons
var buttons = document.getElementsByTagName('button');
for(let i = 0; i < buttons.length; i++) { //loop through each specific instance of number buttons
	buttons[i].addEventListener('click', function() {
        
        switch(this.id) {
            case "up": up(); break;
            case "down": down(); break;
            case "left": left(); break;
            case "right": right(); break;
        }

	})
}

window.addEventListener('resize', set_vp);
