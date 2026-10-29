function setup() {
  createCanvas(600,600);
}

function draw() {
  background(220);

  /* hair */
  triangle(300,80,200,100,100,200);
  triangle(300,80,100,200,75,300);
  triangle(300,80,75,300,90,400);
  triangle(300,350,86,375,75,500);
  triangle(300,350,75,500,80,600);

  triangle(80,600,300,80,520,600);

  triangle(300,80,400,100,500,200);
  triangle(300,80,500,200,525,300);
  triangle(300,80,525,300,510,400);
  triangle(300,350,512,375,525,500);
  triangle(300,350,525,500,520,600);

  rect(172,450,250,500);

  /* face shape */
  circle(300,300,400);
  triangle(125,450,100,320,250,450);
  triangle(475,450,500,320,350,450);
  triangle(125,450,250,550,250,450);
  triangle(350,450,350,550,475,450);
  square(250,450,100);

  /* nose */
  triangle(275,400,300,300,325,400);
  triangle(275,400,300,375,325,400);

  /* mouth */
  triangle(237,447,275,420,325,450);
  triangle(363,447,325,420,275,450);
  ellipse(300,450,126,15);

  /* eyes */
  ellipse(200,300,125,50);
  ellipse(400,300,125,50);
  triangle(150,260,250,245,250,270);
  triangle(350,270,350,245,450,260);

  /* extra */
  point(240,400);
  line(175,230,350,230);
  line(225,210,400,210);

  /* title */
  textSize(32);
  text('"Me" by David Daniels',50,50);
}