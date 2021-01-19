const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//Create variables here
var engine, world;
var dog1;
var happyDog;
var database;
var foodS;
var foodStock;
var ground1;
function preload()
{
  //load images here
 
}

function setup() {
  createCanvas(500, 500);
  engine = Engine.create();
  world = engine.world;

  dog1 = new Dog(100,100);
  ground1 = new Ground(250,480,500,20);
}


function draw() {  
   background(46, 139, 87);
   Engine.update(engine);
   dog1.display();
   ground1.display();
  //add styles here

}



