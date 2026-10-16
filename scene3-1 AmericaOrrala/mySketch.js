/******************
Code by Vamoss
Original code link:
https://www.openprocessing.org/sketch/624879

Author links:
http://vamoss.com.br
http://twitter.com/vamoss
http://github.com/vamoss
******************/

var circles = []
var total = 100
var img;

/*const capturer = new CCapture( { 
	framerate: 5,
	format: 'webm',
	name: "movie",
	quality: 100,
	verbose: true
 } );*/
//var capturer = new CCapture({ format: 'webm' });
//var p5Canvas;
// Motor de captura CCapture.js
let capturer = new CCapture({ format: 'webm', framerate: 30 });
let p5Canvas;

function preload() {
	img = loadImage('orrala.png');
}

function setup() {
	p5Canvas = createCanvas(1920, 1080);
	frameRate(30);
	imageMode(CENTER);
	background(0);

	for (var i = 0; i < total; i++) {
		circles[i] = {};
		circles[i].prevPos = { x: width / 2, y: height / 2 }
		circles[i].pos = { x: width / 2, y: height / 2 }
		circles[i].dir = random() > 0.5 ? 1 : -1
		circles[i].radius = random(3, 10)
		circles[i].angle = 0
	}
}

function draw() {

	for (var i = 0; i < total; i++) {
		var circle = circles[i]
		circle.angle += 1 / circle.radius * circle.dir

		circle.pos.x += cos(circle.angle) * circle.radius
		circle.pos.y += sin(circle.angle) * circle.radius
		if (brightness(img.get(round(circle.pos.x), round(circle.pos.y))) > 70 || circle.pos.x < 0 || circle.pos.x > width || circle.pos.y < 0 || circle.pos.y > height) {
			circle.dir *= -1
			circle.radius = random(3, 10)
			circle.angle += PI
		}
		stroke(img.get(circle.pos.x, circle.pos.y))
		line(circle.prevPos.x, circle.prevPos.y, circle.pos.x, circle.pos.y)

		circle.prevPos.x = circle.pos.x
		circle.prevPos.y = circle.pos.y
	}
	/*
		if (frameCount === 1) capturer.start();
		capturer.capture(p5Canvas.canvas);
		if (frameCount === 4000) {
			noLoop();
			capturer.stop();
			capturer.save();
	
		}
	*/

}