//global variables
	var canvas;
	var context;
	var particles;
	var timer;
	var colors = ["red", "pink", "blue", "green", "yellow", "purple"];
	
	function makeParticles() {
		//create an array of particles for our animation
		particles = [];
		for(var i = 0; i < 30; i++)
		{
			particles.push(new Particle());
		}
	}
	
	function degreesToRadians(degrees) {
		//converts from degrees to radians and returns
		return (degrees * Math.PI)/180;
	}
	
	function Particle()
	{
		//the constructor for a single particle, with random starting x+y, velocity, color, and radius
		//this.x = Math.random()*canvas.width;
		//this.y = Math.random()*canvas.height;
		this.type = Math.floor(Math.random()*7);
		if(this.type == 0) //circles
		{	
		this.x = canvas.width/2;
		this.y = canvas.height/2;
		this.vx = Math.random()*10-5;
		this.vy = Math.random()*10-5;
		var colors = ["red"];
		this.color = colors[Math.floor(Math.random()*colors.length)];
		this.radius = 30;	
		this.shape = 0;
		}
		else if(this.type == 1) //drops
		{	
		this.x = canvas.width/2;
		this.y = canvas.height/2;
		this.vx = Math.random()*10-3;
		this.vy = Math.random()*10-3;
		var colors = ["olive"];
		this.color = colors[Math.floor(Math.random()*colors.length)];
		this.shape = 1;
		}
		else if(this.type == 2) //clouds
		{
		this.x = canvas.width/2;
		this.y = canvas.height/2;
		this.vx = Math.random()*10-1;
		this.vy = Math.random()*10-1;
		var colors = ["cyan"];
		this.color = colors[Math.floor(Math.random()*colors.length)];
		this.size = 30;
		this.shape = 2;
		}
		else if(this.type == 3) //hexagons
		{
		this.x = canvas.width/2;
		this.y = canvas.height/2;
		this.vx = Math.random()*10-7;
		this.vy = Math.random()*10-7;
		var colors = ["brown"];
		this.color = colors[Math.floor(Math.random()*colors.length)];
		this.size = 20;
		this.shape = 3;
		}
		else if(this.type == 4) //stars
		{
		this.x = canvas.width/2;
		this.y = canvas.height/2;
		this.vx = Math.random()*10-9;
		this.vy = Math.random()*10-9;
		var colors = ["magenta"];
		this.color = colors[Math.floor(Math.random()*colors.length)];
		this.size = 20;
		this.shape = 4;
		}
		else if(this.type == 5) //half-moon
		{
		this.x = canvas.width/2;
		this.y = canvas.height/2;
		this.vx = Math.random()*10-4;
		this.vy = Math.random()*10-4;
		var colors = ["pink"];
		this.color = colors[Math.floor(Math.random()*colors.length)];
		this.size = 20;
		this.shape = 5;
		}
		else if(this.type == 6) //hooks
		{
		this.x = canvas.width/2;
		this.y = canvas.height/2;
		this.vx = Math.random()*10-5;
		this.vy = Math.random()*10-5;
		var colors = ["yellow"];
		this.color = colors[Math.floor(Math.random()*colors.length)];
		this.size = 20;
		this.shape = 6;
		}
		
	}
	
	function drawParticle(particle)
	{
		if(particle.shape == 0){ 
			//Draws Circles
			context.beginPath();
			context.arc(particle.x, particle.y, particle.radius, 0, degreesToRadians(360), true);
			context.strokeStyle = particle.color;
			context.stroke();
		}else if(particle.shape == 1){ 
			//Draws Drops
			context.beginPath();
			context.lineJoin = 'miter';
			context.moveTo(particle.x, particle.y);
			context.arc(particle.x, particle.y+68, 34.5, 5.75, 3.66, false);
			context.quadraticCurveTo(particle.x-3.5, particle.y+15, particle.x, particle.y);
			context.closePath();
			context.lineWidth = 2;
			context.fillStyle = particle.color;
			context.fill();
		}else if(particle.shape == 2){ 
			//Draws Clouds
			context.beginPath();
			context.moveTo(particle.x + 170, particle.y + 80);
			context.bezierCurveTo(particle.x + 130, particle.y + 100, particle.x  + 130, particle.y + 150, particle.x  + 230, particle.y + 150);
			context.bezierCurveTo(particle.x + 250, particle.y + 180, particle.x  + 320, particle.y + 180, particle.x  + 340, particle.y + 150);
			context.bezierCurveTo(particle.x + 420, particle.y + 150, particle.x  + 420, particle.y + 120, particle.x  + 390, particle.y + 100);
			context.bezierCurveTo(particle.x + 430, particle.y + 40, particle.x  + 370, particle.y + 30, particle.x  + 340, particle.y + 50);
			context.bezierCurveTo(particle.x + 320, particle.y + 5, particle.x  + 250, particle.y + 20, particle.x + 250, particle.y + 50);
			context.bezierCurveTo(particle.x  + 200, particle.y + 5, particle.x  + 150, particle.y + 20, particle.x + 170, particle.y + 80);
			context.closePath();

			//completes Cloud shape
			context.closePath();
			context.lineWidth = 5;
			context.strokeStyle = particle.color;
			context.stroke();
		}else if(particle.shape == 3){ 
			//Draws Hexagons
			var numberOfSides = 6;
			context.beginPath();
			context.moveTo (particle.x +  particle.size * Math.cos(0), particle.y +  particle.size *  Math.sin(0));          
			for (var i = 1; i <= numberOfSides;i += 1) {
				context.lineTo (particle.x + particle.size * Math.cos(i * 2 * Math.PI / numberOfSides), 
				particle.y + particle.size * Math.sin(i * 2 * Math.PI / numberOfSides));
			}
			context.strokeStyle = particle.color;
			context.stroke();
			context.lineWidth = 1;
			context.stroke();
		}else if(particle.shape == 4){ 
			//Draws Stars
			context.beginPath(); 
			context.moveTo(particle.x + 50, particle.y + 50);
			context.lineTo(particle.x + 120, particle.y + 150);
			context.lineTo(particle.x + 0, particle.y + 180); 
			context.lineTo(particle.x + 120, particle.y + 210);
			context.lineTo(particle.x + 50, particle.y + 310);  
			context.lineTo(particle.x + 160, particle.y + 250);
			context.lineTo(particle.x + 190, particle.y + 370);
			context.lineTo(particle.x + 220, particle.y + 250);
			context.lineTo(particle.x + 330, particle.y + 310);
			context.lineTo(particle.x + 260, particle.y + 210);
			context.lineTo(particle.x + 380, particle.y + 180);
			context.closePath();
			context.stroke();
		}else if(particle.shape == 5){
			//Draws Half-moon
			context.beginPath();
			context.arc(particle.x, particle.y + 54, 40, 7, 5, false);
			context.quadraticCurveTo(particle.x - 5, particle.y + 20, particle.x, particle.y);
			context.fillStyle = particle.color;
			context.fill();
		}else if(particle.shape == 6){
			//Draws Hooks
			context.beginPath();
			context.moveTo(particle.x, particle.y);
			context.bezierCurveTo(particle.x - 30, particle.y + 15, particle.x - 30, particle.y + 55, particle.x + 55, particle.y + 55);
			context.bezierCurveTo(particle.x + 60, particle.y + 85, particle.x + 15, particle.y + 90, particle.x + 14, particle.y + 60);
			context.bezierCurveTo(particle.x + 22, particle.y + 60, particle.x + 21, particle.y + 35, particle.x + 19, particle.y + 15);
			context.bezierCurveTo(particle.x + 24, particle.y - 35, particle.x + 18, particle.y + 45, particle.x + 15, particle.y - 30);
			context.bezierCurveTo(particle.x + 13, particle.y - 70, particle.x + 77, particle.y = 50, particle.x + 60, particle.y - 30);
			context.bezierCurveTo(particle.x + 25, particle.y - 65, particle.x - 20, particle.y - 45, particle.x, particle.y);
			context.closePath();
			context.lineWidth = 5;
			context.fillStyle = particle.color;
			context.fill();
		}
	}
	
	function animateParticle(particle){
		if(particle.type == 0){
			particle.radius -= 1;
		if (particle.radius < 0)
			particle.radius = 0;
		}			
	}
	
	function moveParticles() {
		//partially clear the screen to fade previous circles, and draw a new particle at each new coordinate
		context.globalCompositeOperation = "source-over";
		context.fillStyle = "rgba(0, 0, 0, 0.3)";
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.globalCompositeOperation = "lighter";
		for(var i = 0; i < particles.length; i++)
		{
			var p = particles[i];
			
			drawParticle(p);
			p.x += p.vx;
			p.y += p.vy;
			if(p.x < -50) p.x = canvas.width+50;
			if(p.y < -50) p.y = canvas.height+50;
			if(p.x > canvas.width+50) p.x = -50;
			if(p.y > canvas.height+50) p.y = -50;
			animateParticle(p);
		}
	}
	
	function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
		fillBackgroundColor();
		for (var i=0; i<circles.length; i++) {
			//drawCircle(circles[i]);
		 }
	}
	
	function fillBackgroundColor() {
		context.fillStyle = 'black';
		context.fillRect(0, 0, canvas.width, canvas.height);
	}
	
	window.onload = function() {
		canvas = document.getElementById('canvas');
		context = canvas.getContext('2d');
		context = canvas.getContext('2d');
			context.font = "30px Comic Sans";
			context.textAlign = 'center';
				var i, n = 0, 
				components = [0, 0, 0], 
				operations = [1, 2, 3];
				
			function draw(){
			context.clearRect(0, 0, 0, 0);
			context.fillStyle = "White";
			context.textBaseline = 'top'
			  
			// Rotating text
			context.save();
			context.translate(750, 500);
			context.rotate(0.01*n++);
			context.textBaseline = 'center';
			context.fillText('Are you ready to play DOG DAYS?! Click start below!', 0, 0);
			context.restore();
			  
			for(i = 0; i < 3; i++) {
				components[i] += operations[i];
				if ((components[i] >= 256) || (components[i] <= 0)) operations[i] *= -1;
			}  
				/*if (n < 1000)*/ setTimeout(draw, 10);
			}
				draw();
				
		makeParticles();
		timer = setInterval(moveParticles, 35);
		
	}
