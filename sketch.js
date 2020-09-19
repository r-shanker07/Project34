//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogIMG, dogIMG2

function preload()
{
  //load images here
  dogIMG = loadImage("images/dogIMG.png")
  dogIMG2 = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()

  dog = createSprite(250,250,40,40)
  dog.addImage(dogIMG)
  
  foodStock=database.ref('food')
    foodStock.on("value", readStock)
}


function draw() {  
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogIMG2)
  }
  drawSprites();
  
  textSize(20)
  fill("white")
  stroke()
  //add styles here

}

function readStock(data){
  foodS=data.val()
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



