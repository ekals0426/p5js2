function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("skyblue");
  face(width / 2, height / 2);
}

function face(x, y) {
  push();
  translate(x, y);

  fill("#8B4513");
  stroke("black");
  strokeWeight(1);
  
  beginShape();
  vertex(-100, -100);
  bezierVertex(-150, 50, -150, 200, -120, 300);
  bezierVertex(-100, 320, -80, 320, -50, 300);
  bezierVertex(-80, 200, -80, 50, -50, -100);
  endShape(CLOSE);

  // 오른쪽 머리카락
  beginShape();
  vertex(100, -100);
  bezierVertex(150, 50, 150, 200, 120, 300);
  bezierVertex(100, 320, 80, 320, 50, 300); 
  bezierVertex(80, 200, 80, 50, 50, -100); 
  endShape(CLOSE);
  
  // 귀 
  fill("peachpuff");
  noStroke();
  ellipse(-150, 0, 30, 60);
  ellipse(150, 0, 30, 60);

  // 얼굴
  fill("peachpuff");
  stroke("black");
  strokeWeight(1);
  ellipse(0, 0, 300, 300);
  
  // 볼
  fill(255, 192, 203, 150); 
  noStroke();
  ellipse(-65, 60, 70, 40); 
  ellipse(65, 60, 70, 40);  

  // 목
  fill("peachpuff");
  noStroke(); 
  rectMode(CENTER);
  rect(0, 165, 80, 70); 

  stroke("black");
  strokeWeight(1);
  line(-40, 130, -40, 200); 
  line(40, 130, 40, 200); 

  // 옷
  fill("black");
  stroke("black");
  strokeWeight(1);
  beginShape();
  vertex(-200, 200); 
  bezierVertex(-150, 150, 150, 150, 200, 200); 
  vertex(200, 400); 
  vertex(-200, 400); 
  endShape(CLOSE);
  
  // 흰자
  fill("white");
  ellipse(-60, 0, 100, 100);
  ellipse(60, 0, 100, 100);

  // 검은자
  fill("black");
  ellipse(-60, 0, 60, 60);
  ellipse(60, 0, 60, 60);

  // 입
  fill("pink")
  ellipse(0, 80, 40, 30);

  // 코
  noFill();
  stroke("black");
  strokeWeight(5);
  line(0, 45, -15, 35);
  line(0, 45, 15, 35);

  // 눈썹
  fill("black");
  strokeWeight(1);
  rectMode(CENTER);
  rect(-60, -70, 50, 10, 5);
  rect(60, -70, 50, 10, 5);

  // 야구 모자
  fill("black"); 
  stroke("black");
  strokeWeight(1);
  
  // 모자 본체
  arc(0, -50, 280, 200, PI, TWO_PI, OPEN); 
  
  // 모자 위에 'kt' 텍스트
  fill("red");
  noStroke();
  textSize(60);
  textAlign(CENTER, CENTER);
  text("K  T", 0, -100);
  
  fill("black");
  noStroke();
  ellipse(-100, -140, 70, 70);
  ellipse(100, -140, 70, 70);

  pop();
}