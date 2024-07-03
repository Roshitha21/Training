//for of
const str = "Hello World";
for(element of str) {
  console.log(element);
}

const arr=[1,2,3,4,5]
for(element of arr) {
    console.log(element);
}

//for in
var a={
    name:'roshitha',
    loc:'hyd'
}
for(key in a){
    console.log(key,a[key]);
}
//for each
var number = [1, 2, 6, 8, 12, 14];
number.forEach(function(element, index) {
  console.log('index: ' + index + ' number: ' + element)
})

//map
var number = [1, 2, 6, 8, 12, 14];
var square = number.map(function(element) {
  return element*element;
})
console.log(square);

//filter
var number = [1, 2, 6, 8, 12, 14];
var result = number.filter(function(element) {
  return element>5;
})
console.log(result);

//reduce
var number = [1, 2, 6, 8, 12, 14];
var sum = number.reduce(function(total, element){
    return total + element;
})
console.log(sum);