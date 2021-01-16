var dogSit
var dogEat
var dogSprite
var database
var foodCount
var milk
function preload()
{
dogSit = loadImage("images/dogImg.png")
dogEat = loadImage("images/dogImg1.png")
milk = loadImage("images/Milk.png")
}

function setup() {
  createCanvas(800, 800);
  database = firebase.database()
  dogSprite = createSprite(400,400,20,20)
  dogSprite.addImage(dogSit)
  dogSprite.scale = 0.5
  var foodValue = database.ref('Food/Count')
  foodValue.on("value",read,error)
}


function draw() {  
background("black")
text("Remaining Food : "+ foodCount,100,400)

  drawSprites();
  Milk();
if (keyDown(UP_ARROW)){
  update();
  dogSprite.addImage(dogEat)
}
if (keyWentUp(UP_ARROW)){
  dogSprite.addImage(dogSit)
}
}
function read(data)
{
 foodCount = data.val() 
 console.log(foodCount)
}
function error()
{
  console.log("weeeeee")
}
function update()
{
  database.ref('Food').set({
    'Count': foodCount -1
  })
}
function Milk()
{
  var i , x = 10
  for (i = 1; i <= foodCount; i = i+1){
 image (milk,x,50,10,10)
 x = x+10
  }  
  }