var canvas = new fabric.Canvas("myCanvas");

ball_x=0;
ball_y=0;
hole_y=0;
hole_x=0;

hole_obj = "";
ball_obj = "";
block_image_object = "";

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h1.png"), function(Img){
    hole_obj = Img;
	hole_obj.scaleToWidth(50);
	hole_obj.scaleToHeight(50);
	hole_obj.set({
		top:hole_y,
		left:hole_x
	});
   canvas.add(hole_obj);
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img)
	ball_obj = Img;
	ball_obj.scaleToWidth(50);
	ball_obj.scaleToHeight(50);
	ball_obj.set({
		top:ball_y,
		left:ball_x
	});
	canvas.add(ball_obj);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ball_obj = hole_obj
	{
		alert("You Won")
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
		if (ball_y >= 0  )
		{
			ball_y -= block_img_height;
			console.log("Up arrow pressed,x axis  =  " + ball_x + "y axis = " + ball_y + "block image height = " + block_img_height);
			canvas.remove(ball_obj);
			player_update();
		} 
	}

	function down()
	{
		if (ball_x <= 500  )
		{
			ball_x += block_img_height;
			console.log("Up arrow pressed,x axis  =  " + ball_x + "y axis = " + ball_y + "block image height = " + block_img_height);
			canvas.remove(ball_obj);
			player_update();
		} 
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x -= block_img_width;
			console.log("Left arrow pressed,x axis  =  " + player_y + "x axis = " + player_x + "block image width = " + block_img_width);
			canvas.remove(ball_obj);
			player_update();
		}
	}

	function right()
	{
		if(ball_x <= 1100)
		{
			ball_x += block_img_width;
			console.log("Left arrow pressed,x axis  =  " + player_y + "x axis = " + player_x + "block image width = " + block_img_width);
			canvas.remove(ball_obj);
			player_update();
		}
	}
	
}

