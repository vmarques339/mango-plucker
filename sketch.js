
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	stoneObj=loadImage("sprites/stone.png");
	mangoObj=loadImage("sprites/mango.png");
	treeObj=loadImage("sprites/tree.png");
	boyObj=LoadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);

	mangoObj1=new mango(700,100);
	mangoObj2=new mango(600,100);
	mangoObj3=new mango(550,150);
	mangoObj4=new mango(750,75);
	mangoObj5=new mango(700,200);
	mangoObj6=new mango(700,250);
	mangoObj7=new mango(700,50);

	stoneObj=new stone()

	boyObj=new Boy()

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();

  mangoObj1.display();
    mangoObj2.display();
    mangoObj3.display();
    mangoObj4.display();
    mangoObj5.display();
   mangoObj6.display();
	mangoObj7.display();
	
    stoneObj.display();
    boyObj.display();

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    boy.fly();
}

function keyPressed(){
    if(keyCode === 32){
        boyObj.attach(stone.body);
    }
}

