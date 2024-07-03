//class -constructor is required method
class Student {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  
const myStudent = new Student("John", 2014);
const myStudent1 = new Student("Peter", 2015);
console.log( myStudent.name + " " + myStudent.year);

//class expressions
// unnamed
let Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
console.log(Rectangle.name);  
const rec1 = new Rectangle(4, 5);
console.log( rec1.height*rec1.width);
  
// named
Rectangle = class Rectangle2 {
constructor(height, width) {
    this.height = height;
    this.width = width;
}
};
console.log(Rectangle.name);
const rec2 = new Rectangle(6, 5);
console.log( rec2.height*rec2.width);  

//class method
class Rectmethod {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    calcArea() {
      return this.height * this.width;
    }
  }
  
  const square = new Rectmethod(10, 10);
  console.log(square.calcArea());
  
