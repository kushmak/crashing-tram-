const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;
var coach1,coach2,coach3,coach4,coach5,coach6,coach7,coach8,coach9,coach10,coach11,coach12

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
coach1=new Coach(50,150,100,50)
coach2=new Coach(100,150,100,50)
coach3=new Coach(150,150,100,50)
coach4=new Coach(200,150,100,50)
coach5=new Coach(250,150,100,50)
coach6=new Coach(300,150,100,50)
coach7=new Coach(350,150,100,50)
coach8=new Coach(400,150,100,50)
coach9=new Coach(450,150,100,50)
coach10=new Coach(500,150,100,50)
chain1=new TramLine(coach1.body,coach2.body)
chain2=new TramLine(coach2.body,coach3.body)
chain3=new TramLine(coach3.body,coach4.body)
chain4=new TramLine(coach4.body,coach5.body)
chain5=new TramLine(coach5.body,coach6.body)
chain6=new TramLine(coach6.body,coach7.body)
chain7=new TramLine(coach7.body,coach8.body)
chain8=new TramLine(coach8.body,coach9.body)
chain9=new TramLine(coach9.body,coach10.body)
rock1=new Rock(1000,290,100,100)
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
coach1.show();
coach2.show();
coach3.show();
coach4.show();
coach5.show();
coach6.show();
coach7.show();
coach8.show();
coach9.show();
coach10.show();
chain1.show();
chain2.show();
chain3.show();
chain4.show();
chain5.show();
chain6.show();
chain7.show();
chain8.show();
chain9.show();
rock1.show();
var collision = Matter.SAT.collides(coach10.body,rock1.body); if(collision.collided) { flag=1; } if(flag ===1){ textSize(30); stroke(3); fill('blue'); text("CRASH",500,200); crashSound.play(); }

  }
function keyPressed(){
if(keyCode === RIGHT_ARROW)
{ Matter.Body.applyForce(coach6.body,
  {x:coach10.body.position.x,y:coach10.body.position.y}, 
  {x:0.5,y:0}); 
}
if(keyCode === LEFT_ARROW)
{ Matter.Body.applyForce(coach6.body,
  {x:coach10.body.position.x,y:coach10.body.position.y}, 
  {x:-0.5,y:0}); 
}}
