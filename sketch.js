var mov_rect;
var fix_rect;
var ball1, ball2, ball3, ball4;
function setup() {
  createCanvas(800,400);
  mov_rect = createSprite(400, 200, 50, 50);
  mov_rect.shapeColor = "red";
  fix_rect = createSprite(200, 200, 50, 50);
  fix_rect.shapeColor = "red";
  ball1 = createSprite(300, 300, 50, 50);
  ball1.shapeColor = "blue";
  ball2 = createSprite(100, 300, 50, 50);
  ball2.shapeColor = "green";
  ball3 = createSprite(700, 100, 50, 50);
  ball3.shapeColor = "aqua";
  ball4 = createSprite(700, 400, 50, 50);
  ball4.shapeColor = "orange";
  ball1.velocityX=-5;
  ball2.velocityX=5;
  ball3.velocityY=6;
  ball4.velocityY=-6;
}

function draw() {
  background(0);  
  mov_rect.x = mouseX;
  mov_rect.y = mouseY;
  isTouching(mov_rect, fix_rect);
  bounce(ball1, ball2);
  bounce(ball3, ball4);
  

  drawSprites();
}
