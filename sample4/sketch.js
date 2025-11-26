function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background("skyblue");
  face(width / 2, height / 2, frameCount);
}

function face(x, y, time) {
  push();
  translate(x, y);

  let sizeFactor = (sin(time * 0.02) + 1) * 0.5 + 0.7; 

  let colorValue1 = (time * 0.5) % 360; 
  let colorValue2 = (time * 0.1) % 360; 
  
  let colorA = color(colorValue1, 90, 90);
  let colorB = color(colorValue2, 70, 70);
  
  let dynamicColor = lerpColor(colorA, colorB, (sin(time * 0.03) + 1) * 0.5); 

  let moveX = cos(time * 0.1) * 15; 
  let moveY = sin(time * 0.07) * 8;  

  // 머리
  fill("#8B4513"); 
  stroke("black");
  strokeWeight(1);

  // 왼쪽 머리카락
  beginShape();
  vertex(-100 * sizeFactor, -100 * sizeFactor);
  bezierVertex(-150 * sizeFactor, 50 * sizeFactor, -150 * sizeFactor, 200 * sizeFactor, -120 * sizeFactor, 300 * sizeFactor);
  bezierVertex(-100 * sizeFactor, 320 * sizeFactor, -80 * sizeFactor, 320 * sizeFactor, -50 * sizeFactor, 300 * sizeFactor);
  bezierVertex(-80 * sizeFactor, 200 * sizeFactor, -80 * sizeFactor, 50 * sizeFactor, -50 * sizeFactor, -100 * sizeFactor);
  endShape(CLOSE);

  // 오른쪽 머리카락
  beginShape();
  vertex(100 * sizeFactor, -100 * sizeFactor);
  bezierVertex(150 * sizeFactor, 50 * sizeFactor, 150 * sizeFactor, 200 * sizeFactor, 120 * sizeFactor, 300 * sizeFactor);
  bezierVertex(100 * sizeFactor, 320 * sizeFactor, 80 * sizeFactor, 320 * sizeFactor, 50 * sizeFactor, 300 * sizeFactor);
  bezierVertex(80 * sizeFactor, 200 * sizeFactor, 80 * sizeFactor, 50 * sizeFactor, 50 * sizeFactor, -100 * sizeFactor);
  endShape(CLOSE);

  // 귀
  fill("peachpuff");
  noStroke();
  ellipse(-150 * sizeFactor, 0 * sizeFactor, 30 * sizeFactor, 60 * sizeFactor);
  ellipse(150 * sizeFactor, 0 * sizeFactor, 30 * sizeFactor, 60 * sizeFactor);

  // 얼굴
  fill("peachpuff");
  stroke("black");
  strokeWeight(1);
  ellipse(0, 0, 300 * sizeFactor, 300 * sizeFactor);

  // 볼
  fill(255, 192, 203, 150);
  noStroke();
  let blushSize = 70 * sizeFactor;
  ellipse(-65 * sizeFactor + moveX, 60 * sizeFactor + moveY, blushSize, 40 * sizeFactor);
  ellipse(65 * sizeFactor + moveX, 60 * sizeFactor + moveY, blushSize, 40 * sizeFactor);

  // 목
  fill("peachpuff");
  noStroke();
  rectMode(CENTER);
  rect(0, 165 * sizeFactor, 80 * sizeFactor, 70 * sizeFactor);

  // 목 테두리
  stroke("black");
  strokeWeight(1);
  line(-40 * sizeFactor, 130 * sizeFactor, -40 * sizeFactor, 200 * sizeFactor);
  line(40 * sizeFactor, 130 * sizeFactor, 40 * sizeFactor, 200 * sizeFactor);

  // 옷
  fill("black");
  stroke("black");
  strokeWeight(1);
  beginShape();
  vertex(-200 * sizeFactor, 200 * sizeFactor);
  bezierVertex(-150 * sizeFactor, 150 * sizeFactor, 150 * sizeFactor, 150 * sizeFactor, 200 * sizeFactor, 200 * sizeFactor);
  vertex(200 * sizeFactor, 400 * sizeFactor);
  vertex(-200 * sizeFactor, 400 * sizeFactor);
  endShape(CLOSE);

  // 눈 흰자
  fill("white");
  ellipse(-60 * sizeFactor, 0, 100 * sizeFactor, 100 * sizeFactor);
  ellipse(60 * sizeFactor, 0, 100 * sizeFactor, 100 * sizeFactor);

  // 눈동자
  fill("black");
  let pupilMoveX = cos(time * 0.15) * 20 * sizeFactor;
  let pupilMoveY = sin(time * 0.12) * 15 * sizeFactor;
  
  let eyeSize = 60 * sizeFactor;

  ellipse(-60 * sizeFactor + pupilMoveX, pupilMoveY, eyeSize, eyeSize);
  ellipse(60 * sizeFactor + pupilMoveX, pupilMoveY, eyeSize, eyeSize);

  // 입
  fill("pink");
  
  if (floor(millis() / 1000) % 2 === 0) { 
    stroke("black");
    strokeWeight(2);
    line(-20 * sizeFactor, 80 * sizeFactor + moveY, 20 * sizeFactor, 80 * sizeFactor + moveY);
    noStroke();
  } else { 
    let mouthW = (sin(time * 0.2) + 1) * 20 * sizeFactor; 
    let mouthH = (cos(time * 0.2) + 1) * 15 * sizeFactor; 
    ellipse(0, 80 * sizeFactor + moveY, mouthW, mouthH);
  }

  // 코
  noFill();
  stroke("black");
  strokeWeight(5);
  line(0, 45 * sizeFactor, -15 * sizeFactor, 35 * sizeFactor);
  line(0, 45 * sizeFactor, 15 * sizeFactor, 35 * sizeFactor);

  // 눈썹
  fill("black");
  strokeWeight(1);
  rectMode(CENTER);
  rect(-60 * sizeFactor + moveX, -70 * sizeFactor + moveY, 50 * sizeFactor, 10 * sizeFactor, 5 * sizeFactor);
  rect(60 * sizeFactor + moveX, -70 * sizeFactor + moveY, 50 * sizeFactor, 10 * sizeFactor, 5 * sizeFactor);

  // 야구 모자
  fill("black");
  stroke("black");
  strokeWeight(1);

  // 모자 본체
  arc(0, -50 * sizeFactor, 280 * sizeFactor, 200 * sizeFactor, PI, TWO_PI, OPEN);

  // KT
  fill(dynamicColor);
  noStroke();
  
  textSize(((sin(time * 0.05) + 1) * 20 + 40) * sizeFactor); 
  textAlign(CENTER, CENTER);
  text("K   T", 0, -100 * sizeFactor);

  fill("black");
  noStroke();
  ellipse(-100 * sizeFactor, -140 * sizeFactor, 70 * sizeFactor, 70 * sizeFactor);
  ellipse(100 * sizeFactor, -140 * sizeFactor, 70 * sizeFactor, 70 * sizeFactor);

  pop();
}

// GIF 저장 함수
function keyPressed() {
  if (key === 'g' || key === 'G') {
    saveGif('my-face-animation', 10, {
      delay: 0,
      units: 'seconds',
      framerate: 60
    });
  }
}