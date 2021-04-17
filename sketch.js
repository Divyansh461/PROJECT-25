
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var box1;





function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

  Engine.run(engine);
	
  paper = new Paper(100,52);
  ground = new Ground(width/2,525,width,20,{isStatic : true});
  box1 = new Box(800,390,200,250);
  
  
  box2  = new Ground(896,395,5,206);
  box3 = new Ground(704,395,5,206);
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  

  drawSprites();

  
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
	
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:79,y:-81});
	
	}
}
