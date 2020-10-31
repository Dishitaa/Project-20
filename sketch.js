var car,wall,speed,weight,deformation;

function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90);
  weight = random(400,1500);
  
  car = createSprite(100, 200, 50, 50);
  wall = createSprite(1400,200,60,height/2);

  //car.shapeColor = color(255);
  wall.shapeColor=color(80,80,80);

  car.velocityX = speed;
}

function draw() {
  background("white");  

if(wall.x-car.x <= (car.width+wall.width)/2){
    car.velocityX=0;
    deformation = 0.5 * weight * speed * speed/22509;
  
    if(deformation>180){
        car.shapeColor = "red";
    }

    else if(deformation<180 && deformation>100){
        car.shapeColor = "yellow";
    }

    else if(deformation<100){
        car.shapeColor = "green";
    }
  }


  drawSprites();
}