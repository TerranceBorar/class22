const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world, ball,ground; 
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world
  var option ={
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,50,20,option)
  World.add(world,ground)
  var balloption={
    restitution:5
  }
  ball=Bodies.circle(200,100,20,balloption)
  World.add(world,ball)

}

function draw() {
  background(0); 
  Engine.update(engine)
  rectMode(CENTER) 
  rect(ground.position.x,ground.position.y,350,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
}