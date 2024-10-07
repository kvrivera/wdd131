const pi = 3.14;
let area = 0;
// radius will be defined by the parameter input in the circleArea function

function circleArea(radius) {
    const area = radius * radius * pi;
    return area;
}

area = circleArea(3);
console.log("Area1: ", area);

area = circleArea(4);
console.log("Area2: ", area)
