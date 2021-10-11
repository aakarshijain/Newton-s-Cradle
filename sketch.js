
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse
const MouseConstraint = Matter.MouseConstraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

	
	engine = Engine.create();
	world = engine.world;

	canvasmouse = Mouse.create(canvas.elt)
	var options = {
		mouse: canvasmouse
	}

	mConstraint = MouseConstraint.create(engine,options)
	World.add(world,mConstraint)

	//Create the Bodies Here.
	bar = new Roof(400,50,360,20)
	bob1 = new Bob(280,500,30);
	bob2 = new Bob(340,500,30);
	bob3 = new Bob(400,500,30);
	bob4 = new Bob(460,500,30);
	bob5 = new Bob(520,500,30);
	rope1 = new Rope(bar.body,bob1.body,-120,0)
	rope2 = new Rope(bar.body,bob2.body,-60,0)
	rope3 = new Rope(bar.body,bob3.body,-0,0)
	rope4 = new Rope(bar.body,bob4.body,60,0)
	rope5 = new Rope(bar.body,bob5.body,120,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bar.display();
  bob1.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();
  
  drawSprites();

  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:0})
	}
}



