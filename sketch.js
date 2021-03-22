
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone,iron,ground,hammer;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8;



function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone= new Stone(100,250,100,50);
	iron=new Iron(350,300,100,100);
	ground=new Ground(425,690,2000,20);
	hammer=new Hammer(400,450);
	rubber=new Rubber(300,400,50);

	//creating multiple sand pariticles
	sand1=new sand(505,450,10);
	sand2=new sand(510,450,10);
	sand3=new sand(515,450,10);
	sand4=new sand(520,450,10);
	sand5=new sand(525,450,10);
	sand6=new sand(515,445,10);
	sand7=new sand(520,445,10);
	sand8=new sand(525,445,10);
	
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  //background color
  background("blue");

//display for the sprites
  stone.display();
  iron.display();
  ground.display();
  hammer.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();

  
  drawSprites();
 
}



