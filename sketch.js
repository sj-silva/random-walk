let walker;

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.red = random(255);
    this.green = random(255);
    this.blue = random(255);
  }

  display() {
    const colorSpeed = 10;
    const pointWeight = 3;

    this.red += random(-colorSpeed, colorSpeed);
    this.green += random(-colorSpeed, colorSpeed);
    this.blue += random(-colorSpeed, colorSpeed);

    this.red = constrain(this.red, 0, 255);
    this.green = constrain(this.green, 0, 255);
    this.blue = constrain(this.blue, 0, 255);

    stroke(this.red, this.green, this.blue);
    strokeWeight(pointWeight);
    point(this.x, this.y);
  }
  move() {
    const stepSpeed = 20;
    for (let i = 0; i < stepSpeed; i++) {
      const directionNumber = floor(random(4));
      switch (directionNumber) {
        case 0:
          this.x++;
          break;
        case 1:
          this.x--;
          break;
        case 2:
          this.y++;
          break;
        case 3:
          this.y--;
          break;
      }
      this.x = constrain(this.x, 0, width);
      this.y = constrain(this.y, 0, height);
    }
  }
}

function setup() {
  createCanvas(400, 400);
  background(25);

  walker = new Walker();
}

function draw() {
  walker.move();
  walker.display();
}
