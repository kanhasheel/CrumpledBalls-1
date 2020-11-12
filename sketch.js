
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 650, 800, 10);
	paper = new Paper(110, 600, 10);

	dustbin1 = createSprite(625,650,250,10);
	dustbin2 = createSprite(750,625,10, 60);
	dustbin3 = createSprite(505,625,10, 60);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed() {
		if (keyCode === UP_ARROW) {
	   
		 Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-8.8});  
		 }
	   }