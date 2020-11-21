import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(25, 11, 13);
let myRectangle = new Rectangle(12, 9, 20, 20);

let shapes: Shape[] = [];
shapes.push(myCircle);
shapes.push(myRectangle);

for (let shape of shapes) {
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
    console.log();
}