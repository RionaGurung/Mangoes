const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, tree;

var stone, boy;

var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;

var sling;

var gameState = "onSling";

function setup() {

  createCanvas(1260,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(640, height - 60, 1280, 10);

  tree = new Tree(950, 300, 500, 500);

  boy = new Boy(350, 460, 200, 250);

  stone = new Stone(280, 400,60,60);

  mango1 = new Mango(800,290, 50, 50);
  mango2 = new Mango(850, 200, 50, 50);
  mango3 = new Mango(950, 120, 50, 50);
  mango4 = new Mango(950, 220, 50, 50);
  mango5 = new Mango(1030, 150, 50, 50);
  mango6 = new Mango(1050, 280, 50, 50);
  mango7 = new Mango(1090, 200, 50, 50);
  mango8 = new Mango(1160, 300, 50, 50);

  sling = new Sling(stone.body, {x : 280, y : 400});
 
}

function draw() {

  background("black");  

  Engine.update(engine);

  ground.display();

  tree.display();

  boy.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  sling.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  
}

function mouseDragged(){

  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){

  sling.fly();
  gameState = "launched";
}

function detectCollision(lmango, lstone){

  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position
  
  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

  if(distance <= lmango.r + lstone.r){

    Matter.Body.setStatic(lmango.body, false);

  }

}

function keyPressed(){

  if(keyCode === 32){

    Matter.Body.setPosition(stone.body,{x : 280, y : 400});

    sling.attach(stone.body);
  }
}
