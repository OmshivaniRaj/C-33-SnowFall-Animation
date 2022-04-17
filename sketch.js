const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine , world ;
var snow =[];
 var bgImg;

function preload(){
bgImg = loadImage("snow2.jpg");
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  
 createCanvas(800,620);
  if(frameCount % 50 === 0){
    for(var i=0; i<300; i++){
      snow.push(new createSnow(random(0,800),random(0,800)));
    }
  }
 
  
 
}

function draw() {
  background(bgImg);  

  Engine.update(engine);

 for(var i=0; i<200; i++){
   snow[i].showDrop();
   snow[i].updateY();
 }
  
  drawSprites();
}

