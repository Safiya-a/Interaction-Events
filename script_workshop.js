/*
	script_workshop_04

	Let’s continue adding some interaction to our app.
	
	Complete the following tasks, take your time to ensure you avoid as many errors as possible; 
	don’t forget to check for errors or issues frequently using the developer tools. 
	
	As mentioned in an earlier session - don’t try to complete all the tasks in a single update; 
	complete and check each task one at a time - this approach will help make it easier to identify 
	and undo any introduced or unexpected issues or behaviours bit by bit.  Worse case scenario, if 
	you find you're overrun with errors or unexpected behaviours and have spent a reasonable amount
	of time review and trying to debug them - just download a new copy and try again :)

	Don't forget, in order to start or use the next workshop you will need to update the "index.html"
	document so that the <script> block in the <body> points to the correct version.


	Ready to continue? Great, let's restart 
	-------------------------------------------------------
	Task 1:
    
    Create a new button - the button's "id" should be "green"; when the user clicks it - the handler should
    execute a function called "set_green" - the function should be defined as:
    function set_green() {
        colour = "00ff00";
    }

    The result should be that the circle becomes 'green'


	-------------------------------------------------------
	Task 2:
    
    Create a new button - the button's "id" should be "red"; when the user clicks it - the handler should
    execute a function called "set_red" - the result should be that the circle becomes 'red'


    -------------------------------------------------------
	Task 3:
    
    Create a new button - the button's "id" should be "blue"; when the user clicks it - the handler should
    execute a function called "set_blue" - the result should be that the circle becomes 'blue'


    -------------------------------------------------------
	Task 4:
    
    You should now have all the experience and insight needed to create an entirely new interaction - create two new 
    buttons called "bigger" and "smaller"; when the user clicks bigger the circle size should increase and when the user
    clicks smaller the size should decrease.


*/

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