
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;
var tree;
var boy;
var mango,mango2,mango3,mango4,mango5,mango6;
var SlingShot;
var stone;

var gameStae = "onSling";

function preload()
{
	tree = loadImage("tree.png");

	boy = loadImage("boy.png");

	mango = loadImage("mango.png");
	mango2 = loadImage("mango.png");
	mango3 = loadImage("mango.png");
	mango4 = loadImage("mango.png");
	mango5 = loadImage("mango.png");
	mango6 = loadImage("mango.png");

     stone = loadImage("stone.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20);
	slingshot = new SlingShot(boy.body,{x:200, y:50});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  image(tree,400,400,100,100);
  image(boy,200,200,50,50);

  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  stone.display();


  
  drawSprites();

 
}

function mouseDragged(){
    if(gameState === "onSling"){
    Matter.Body.setPosition(boy.body, {x: mouseX , y: mouseY});
	}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched"
}


