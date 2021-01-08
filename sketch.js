
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  for(var k=0;k <=this.width; k=k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight))
}

for(var j=75; j<=this.width; j=j+ 50){
  plinkos.push(new plinko(j,75));
}
for(var j=15; j<=this.width-10; j=j+ 50){
  plinkos.push(new plinko(j,175));
}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  d1.display();
  Plinko.display();
  Particle.display();
  

  drawSprites();
}




