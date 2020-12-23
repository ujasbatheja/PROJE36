var gameState = 0;
var dog, dogImage;
var food, foodImage;
var database, position;
var foodStock, lastFed;

function preload(){     
  dogImage = loadImage("images/dogimg1.png");
  foodImag = loadImage("images/Milk.png");
}

function setup() {
  createCanvas(500,500);
  dog = createSprite(250,250,5,5);
  dog.scale = 0.3;
  database = firebase.database();
  //create food object
  // create two buttons foe adding stock and feeding dog
}


function draw() {  
  background(46,139,87);
  
   dog.addImage("dogImage",dogImage);
   //get the food stock using food object
   //display the food or bottle
   //reffer to the dataBase and show the feed time
  drawSprites();
}
