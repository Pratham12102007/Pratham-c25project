
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin1,dustbin2,groundObject,paperObj
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,50);
	dustbin1=new dustbin(1200,650);
	paperObj=new paper(800,450)
	paperObj.depth=paperObj.depth-10
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbin1.display();
  
 paperObj.display();
}

function keyPressed(){

		if(keyCode==UP_ARROW){
			Matter.Body.applyForce(paperObj.body, paperObj.body.postion,{x:80 ,y:-100})
		}
	}
