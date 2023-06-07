const nums = [1, 2, 3];
nums.push();

class Car {
  constructor(name, color, topSpeed) {
    this.name = name;
    this.color = color;
    this.topSpeed = topSpeed;
    this.currentSpeed = 0;
  }

  drive() {
    console.log('Just drove 2 miles!');
    this.currentSpeed += 10;
    console.log(`Driving speed at ${this.currentSpeed} mph`);
  }

  brake() {
    console.log('Braking: Coming to a screeching halt!');
  }
}

const ferrari = new Car('Ferrari', 'red', 250);
console.log(ferrari.name);
console.log(ferrari.color);
console.log(ferrari.topSpeed);

ferrari.drive();
ferrari.brake();