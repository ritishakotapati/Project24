var ground,box1,box2,box3;
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

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//Create the Bodies Here.
	box1=createSprite(570,660,200,20)
	box1.shapeColor="green"

    box2=createSprite(660,620,20,100)
	box2.shapeColor="green"

	box3=createSprite(470,620,20,100)
	box3.shapeColor="green"

	Engine.run(engine);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 keypressed()
}

function keypressed(){
if (keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})

}


}

