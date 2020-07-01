var  Engine = Matter.Engine;
Bodies = Matter.Bodies;
 World = Matter.World;
Events = Matter.Events;
var ground;
var particles = [];
var plinkos = [];
var divisons = []
var divisonheight = 300;
var gameState = "end";
var particle;
var score = 0
var count = 0;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);
  ground = new Ground(600,height,1200 ,20);
  for(var k = 0; k <=width;k = k+80){
    divisons.push(new Divisons(k,height-divisonheight/2,10,divisonheight))
  }
  for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }
    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }
    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}

function draw() {
  background("black");  
  ground.display();
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    }
  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
  for (var k = 0; k < divisons.length; k++) {
    
    divisons[k].display();
  }
  
  drawSprites();
}
function mousePressed(){
  if(gameState==="end"){
    count++
    particle = new Particle(mouseX,10,10,10,10);
     
  }
 
}
if (particle=null){
  particle.display();
  if(particle.body.position.y>760){
    if(particle.body.position.x<300){
      score=score+500;
      particle=null;
    }
  }
  if(count===5){
    text("GAME OVER",200,400);
  }
    }