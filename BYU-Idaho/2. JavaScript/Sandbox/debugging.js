// const PI = 3.14;
// const radius = 3;
// let area = 0;
// area = radius * radius * PI;
// console.log('Area 1:', area);

// let radius2 = 4;
// area = radius2 * radius2 * PI;
// console.log('Area 2:', area);

const PI = 3.14;
let area = 0;
function circleArea(radius) {
    const area = radius * radius * PI;
    return area;
}
area = circleArea(3);
console.log(area);

area = circleArea(4);
console.log(area);