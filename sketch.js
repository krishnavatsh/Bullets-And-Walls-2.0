var bullet, wall, thickness;
var speed, weight;


function setup() {
  createCanvas(1365,625);

  thickness=random(22,83);

  bullet = createSprite(50, 312, 50, 10);
  wall = createSprite (1200, 312, thickness, 100);

  speed=random(223,321);
  weight=random(30,52);

  bullet.velocityX = speed;
  
  
}

function draw() {

  background("pink");  

  if (wall.x-bullet.x < (bullet.width+wall.width)/2) {
  bullet.velocityX=0;
 
  
} 

if(hasCollided(bullet, wall)) 
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  if (damage>10)
  {
    wall.shapeColor="red";
  }
  if (damage<10)
  {
    wall.shapeColor="green";
  }

}


  drawSprites();
}


function hasCollided (lbullet,lwall) {
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true
  }
    return false;
}