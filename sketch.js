var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var sideRect1,sideRect2,bottomRect;
var world, engine;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload(){
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup(){
	createCanvas(800, 700);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.World;

	packageBody = Bodies.circle(width/2,200,5,{isStatic:true});
	World.add(world,packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world,ground);

	sideRect1 = new landingZone(width/2 - 110,650,20,100);
	sideRect2 = new landingZone(width/2 + 110,650,20,100);
	bottomRect = new landingZone(width/2,690,200,20);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  sideRect1.display();
  sideRect2.display();
  bottomRect.display();

  drawSprites();
}

function keyPressed() {
 	if (keyCode === DOWN_ARROW) {
    	Matter.Body.setStatic(packageBody,false);
  	}
}