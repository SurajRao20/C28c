
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree_img, boy_img;

function preload()
{   tree_img = loadImage('tree.png');
	boy_img = loadImage('boy.png');
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(600,690,1200,30);
  stone = new Stone(200,400,2)

  mango1 = new Mango(900, 100);
	mango2 = new Mango(940, 140);
	mango3 = new Mango(744, 150);
	mango4 = new Mango(670, 245);
	mango5 = new Mango(800, 265);
  mango6 = new Mango(917, 285);
  mango7 = new Mango(1000, 200);
	mango8 = new Mango(990, 340);
	mango9 = new Mango(844, 150);
	mango10 = new Mango(670, 345);
	mango11 = new Mango(900, 285);
  mango12 = new Mango(957, 285);
  
	stone = new Stone(200,400,2)
	sling = new Chain({x: 242, y: 590}, stone.body);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(137, 220, 0);
  
  drawSprites();

  sling.display();
  image(tree_img,500,10,700,700);
  image(boy_img, 200,535,200,200);

  ground.display();
  stone.display();
  sling.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();


  detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);
  detectCollision(stone, mango11);
  detectCollision(stone, mango12);
 
}

function detectCollision(stoneObject, mangoObject){
  var stonePos = stoneObject.body.position;
  var mangoPos = mangoObject.body.position;
 
  var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);
  console.log(distance);
 
  if(distance <= stoneObject.radius + mangoObject.radius){
    Matter.Body.setStatic(mangoObject.body, false);
  }
 }
 
 function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX , y:mouseY})

}

function mouseReleased(){
  sling.fly()
}
 
 function keyPressed(){
  if(keyCode == 32){
    launcher.attach(stone.body);
  }
}



