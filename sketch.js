var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var box1,box2,box3;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	ground.shapeColor=color("yellow");
	box1=new Box(520,620,20,100);
	 box2=new Box(630,660,200,20);
	 box3=new Box(740,620,20,100);
	 paper=new Paper(200,600,20);
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(0);
 
  box1.display();
  box2.display();
  box3.display();
  
  paper.display();
  ground.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	ball.velocityY=-4

	}
}



