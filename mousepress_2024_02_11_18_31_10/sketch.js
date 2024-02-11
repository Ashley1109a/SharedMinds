let x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220); 
  
  
  for (let x = 0; x < width; x+=50)
  {
    //fill(random(255),random(255),random(255));
    for (let y = 0;y < height; y+=30) {
      
      if (mouseIsPressed && dist(x,y, mouseX, mouseY)<10){
        fill(255,0,0);
      } else{
        fill(255,255,255);
      }
      
      ellipse(x,y,50,30);
    }
  }  
  
  
  
  
}