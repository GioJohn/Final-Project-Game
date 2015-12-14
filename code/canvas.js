<!doctype html>
<html>
<head>
<title>DOG DAYS</title>
<script>
	  var canvas;
	  var context;
	  var shapes = []
	  var timer;
	  var timerTwo;
	  var Shapes = ['drop','circle','cloud'];
	  function Shape(x, y, color) {
		this.x = x;
		this.y = y;
		this.size = Math.random()*20+5;
		this.dx = Math.random()*4-2;
		this.dy = Math.random()*4-2;
		this.color = color;
		this.shape = Shapes[Math.floor(Math.random()*Shapes.length)];
	  }
      function init() {
        canvas = document.getElementById('canvas');
        context = canvas.getContext("2d");
 
        window.addEventListener('resize', resizeCanvas, false);
        window.addEventListener('orientationchange', resizeCanvas, false);
        resizeCanvas();
		canvas.onclick = function(event) {
			handleClick(event.clientX, event.clientY);
		};
		timer = setInterval(resizeCanvas, 20);
		timerTwo = setInterval(newShape, 200);
      }
	  function newShape() {
		var x = Math.random() * canvas.width;
		var y = Math.random() * canvas.height;
		var colors = ["red", "white", "blue"];
		var color = colors[Math.floor(Math.random()*colors.length)];
		shapes.push(new Shape(x, y, color));
		
	  }
	  function drawCircle(circle) {
		 context.beginPath();
		 context.arc(circle.x, circle.y, circle.size, 0, degreesToRadians(360), true);
		 context.fillStyle = circle.color;
		 context.fill();
	  }
	  function drawCloud(cloud) {
		 context.beginPath();
		 context.moveTo(cloud.x + 170, cloud.y + 80);
		 context.bezierCurveTo(cloud.x + 130, cloud.y + 100, cloud.x + 130, cloud.y + 150, cloud.x + 230, cloud.y + 150);
		 context.bezierCurveTo(cloud.x + 250, cloud.y + 180, cloud.x + 320, cloud.y + 180, cloud.x + 340, cloud.y + 150);
		 context.bezierCurveTo(cloud.x + 420, cloud.y + 150, cloud.x + 420, cloud.y + 120, cloud.x + 390, cloud.y + 100);
		 context.bezierCurveTo(cloud.x + 430, cloud.y + 40, cloud.x + 370, cloud.y + 30, cloud.x + 340, cloud.y + 50);
		 context.bezierCurveTo(cloud.x + 320, cloud.y + 5, cloud.x + 250, cloud.y + 20, cloud.x + 250, cloud.y + 50);
		 context.bezierCurveTo(cloud.x + 200, cloud.y + 5, cloud.x + 150, cloud.y + 20, cloud.x + 170, cloud.y + 80);
		 context.closePath();

		  // complete custom shape
		  context.closePath();
		  context.lineWidth = 5;
		  context.strokeStyle = cloud.color;
		  context.stroke();
	  }
	  function drawDrop(drop) {
		    context.beginPath();
			context.lineJoin = 'miter';
			context.moveTo(drop.x, drop.y);
			context.arc(drop.x, drop.y+68, 34.5, 5.75, 3.66, false);
			context.quadraticCurveTo(drop.x-3.5, drop.y+15, drop.x, drop.y);
			context.closePath();
			context.lineWidth = 2;
			context.fillStyle = drop.color;
			context.fill();
	  }
	  function drawText() {
		context.fillStyle = 'green';
		context.font = '30px Comic Sans';
		context.textAlign = 'center';
		context.fillText('Are you ready to play DOG DAYS!', canvas.width/2, canvas.height/2);
	}
      function resizeCanvas() {
        canvas.width = window.innerWidth-20;
        canvas.height = window.innerHeight-20;
		fillBackgroundColor();
		for (var i=0; i<shapes.length; i++) {
			if (shapes[i].shape == 'circle') {
				drawCircle(shapes[i]);
			} else if (shapes[i].shape == 'drop') {
				drawDrop(shapes[i]);
			} else if (shapes[i].shape == 'cloud') {
				drawCloud(shapes[i]);
			}
			if (shapes[i].x + shapes[i].dx > canvas.width || shapes[i].x + shapes[i].dx < 0)
				shapes[i].dx = -shapes[i].dx;
			if (shapes[i].y + shapes[i].dy > canvas.height || shapes[i].y + shapes[i].dy < 0)
				shapes[i].dy = -shapes[i].dy;
				shapes[i].x += shapes[i].dx;
				shapes[i].y += shapes[i].dy;
		}
		drawText();		
		
      }
	  function fillBackgroundColor() {
		 //var colors = ["white", "yellow", "blue", "red"];
		 //var bgColor = colors[Math.floor(Math.random() * colors.length)];
		 context.fillStyle = 'black';
		 context.fillRect(0, 0, canvas.width, canvas.height);
	}
	function degreesToRadians(degrees) {
		//converts from degrees to radians and returns
		return (degrees * Math.PI)/180;
	}
	window.onload = init;
</script>
</head>
<body>
<canvas id='canvas' width=500 height=500></canvas>
</body>	  
