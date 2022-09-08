function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(400);
    fill(400)

    square(0,20,10)
    square(windowWidth/8,30,40)
    square(2*windowWidth/8,40,50)

    fill(0)
    square(3*windowWidth/8,50,60)

    fill(400)
    square(4*windowWidth/8,60,70)

    fill('rgba(0,255,0, 0.25)')
    square(5*windowWidth/8,70,80)

    fill(400)
    square(6*windowWidth/8,80,90)
    square(7*windowWidth/8,90,100)

fill(0)
    rect((windowWidth-windowWidth/12),300,windowWidth/7,windowHeight/2);

    fill(400)
rect((windowWidth/100),300,windowWidth,windowHeight/10)
rect((windowWidth/100),450,windowWidth,windowHeight/10)
rect((windowWidth/100),600,windowWidth,windowHeight/10)

fill('rgba(0,255,0, 0.25)')
square(5,35,20)

line(0, 1000, 1000, 0)
line(5*windowWidth/70,20,windowHeight,windowHeight/40)
line(2*windowHeight/70,80,windowWidth,windowWidth)
line(windowHeight/70,20,windowWidth,windowWidth)

circle(200,200,50)
circle(400,200,50)
circle(600,500,65)

  }
