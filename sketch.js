const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;

var roof;

var rope1, rope2, rope3, rope4, rope5;

function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.

  Engine.run(engine);
  bob1 = new Bob(100, 400, 25);
  bob2 = new Bob(150, 400, 25);
  bob3 = new Bob(200, 400, 25);
  bob4 = new Bob(250, 400, 25);
  bob5 = new Bob(300, 400, 25);

  roof = new Roof(400, 200, 800, 25);

  rope1 = new Rope(bob1.body, roof.body, -bob1.radius * 2, 0);
  rope2 = new Rope(bob2.body, roof.body, -bob2.radius * 2 + 50, 0);
  rope3 = new Rope(bob3.body, roof.body, -bob3.radius * 2 + 100, 0);
  rope4 = new Rope(bob4.body, roof.body, -bob4.radius * 2 + 150, 0);
  rope5 = new Rope(bob5.body, roof.body, -bob5.radius * 2 + 200, 0);
  //rope = new Rope(bob1, roof);
}

function draw() {
  rectMode(CENTER);
  background(255);

  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}
