const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies; 
  
 function setup() {
  createCanvas(500,500);
  engine = Engine.create();
  world = engine.world;
  ground  = new Box(250,435,390,10);
  ground1  = new Box(450,390,10,70);
  ground2  = new Box(50,390,10,70); 
    
  box1 = new Box(400,390,0.5,70);
  box2 = new Box(350,390,0.5,70);
  box3 = new Box(300,390,0.5,70);
  box4 = new Box(250,390,0.5,70);
  box5 = new Box(200,390,0.5,70);
  box6 = new Box(150,390,0.5,70);
  box7 = new Box(100,390,0.5,70);
  ball1 = Ball(80,200,20);
  ball2 = Ball(80,230,20);
  ball3 = Ball(80,260,20);
  ball4 = Ball(80,290,20);
  plinko1  = new Box(100,235,30,30);
  plinko2 = new Box(150,235,30,30);
  plinko3 = new Box(200, 235,30,30);
  plinko4 = new Box(250,235,30,30);

  plinko5 = new Box(300,235,30,30);
  plinko6 = new Box(350,235,30,30);
  plinko7 = new Box(400, 235,30,30);
  plinko8 =  new Box(450,235,30,30);
  plinko9 =  new Box(50,235,30,30);
  plinko10 =  new Box(50,170,30,30);
  plinko11  = new Box(100,170,30,30);
  plinko22 = new Box(150,170,30,30);
  plinko33 = new Box(200, 170,30,30);
  plinko44 = new Box(250,170,30,30);

  plinko55 = new Box(300,170,30,30);
  plinko66 = new Box(350,170,30,30);
  plinko77 = new Box(400, 170,30,30);
  plinko88 =  new Box(450,170,30,30);
  plinko99 =  new Box(50,170,30,30);
  plinko100 =  new Box(50,105,30,30);
  plinko111  = new Box(100,105,30,30);
  plinko222 = new Box(150,105,30,30);
  plinko333 = new Box(200, 105,30,30);
  plinko444 = new Box(250,105,30,30);

  plinko555 = new Box(300,105,30,30);
  plinko666 = new Box(350,105,30,30);
  plinko777 = new Box(400, 105,30,30);
  plinko888 =  new Box(450,105,30,30);
  
}

function draw() {
  background(40,78,99); 
  Engine.update(engine);
  strokeWeight(4);
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko10.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko11.display();
  plinko22.display(); 
  plinko33.display();
  plinko44.display();
  plinko100.display();
  plinko55.display();
  plinko66.display();
  plinko77.display();
  plinko88.display();
  plinko99.display();
  plinko111.display();
  plinko222.display(); 
  plinko333.display();
  plinko444.display(); 
  plinko555.display();
  plinko666.display();
  plinko777.display();
  plinko888.display();  
  ground.display();
  ground1.display();
ground2.display();
box1.display();
box1.display();
box1.display();
box1.display();
box1.display();
box1.display();
box1.display();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
  drawSprites();
}