
// Create canvas variable
var canvas=new fabric.Canvas("myCanvas");

//Set initial positions for ball and hole images.
var ballX=0;
var ballY=0;
var holeX=400;
var holeY=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
     fabric.Image.fromURL("golf-h.png",function(Img){
		holeimg=Img;
		holeimg.scaleToWidth(50);
		holeimg.scaleToHeight(50);
		holeimg.set({
			top:holeY,
			left:holeX
		});
        canvas.add(holeimg);
	 });
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png",function(Img){
		ballimg=Img;
		ballimg.scaleToWidth(50);
		ballimg.scaleToHeight(50);
		ballimg.set({
          top:ballY,
		  left:ballX
		});
       canvas.add(ballimg);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ballX==holeX) && (ballY==holeY)){
		canvas.remove(ballimg);
		document.getElementById("hd3").innerHTML="you have hit the goal";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		if(ballY > 0){
          ballY=ballY-block_image_height;
		  console.log("block image height ="+block_image_height);
		  console.log("when up arrow key is pressed X="+ballX+"y= "+ballY);
		  canvas.remove(ballimg);
		  new_image();

		}
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(ballY < 450){
			ballY=ballY+block_image_height;
			console.log("block image height ="+block_image_height);
			console.log("when up arrow key is pressed X="+ballX+"Y= "+ballY);
			canvas.remove(ballimg);
			new_image();
			
		  }
	}

	function left()
	{
		if(ballX >5)
		{
			// Write a code to move ball left side.
			ballX=ballX-block_image_width;
			console.log("block image width =" +block_image_width);
			console.log("when left arrow key is pressed X="+ballX+"Y="+ballY);
			canvas.remove(ballimg);
			new_image();
		}
	}

	function right()
	{
		if(ballX <=1050)
		{
			// Write a code to move ball right side.
		
				ballX=ballX+block_image_width;
				console.log("block image width ="+block_image_width);
				console.log("when up right key is pressed X="+ballX+"y= "+ballY);
				canvas.remove(ballimg);
				new_image();
				
			
		}
	}
	
}

