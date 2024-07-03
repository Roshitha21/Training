//non-curried
function rect(l, b, h) {
    return l * b * h;
}
console.log(rect(4, 5, 6));
//curried
function rectVol(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height;
        }
    }
}
console.log(rectVol(4)(5)(6));

//partial application
const add=(x,y,z) => {
    return x+y+z 
}
var partialFunc= add.bind(this,2,3);
console.log(partialFunc(5));