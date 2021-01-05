
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(200, 200, 10);
	ground = new Ground(400, 10, 800, 5);
	dustbin = new DustBin(600, 50, 100, 50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  dustbin.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){

		Matter.body.applyForce(paper.body, paper.body.position, {x:85, y:-85})
	}
}

