// String extension
let fname='Roshitha'
console.log(fname.startsWith('Ros'))
console.log(fname.startsWith('Ro',0))

console.log(fname.endsWith('tha'));
console.log(fname.endsWith('Roshi',5))

console.log(fname.includes('Roshi'))
console.log(fname.includes('Roshi',4))

console.log(fname.repeat(3));

//Number 
console.log(Number.isFinite(Infinity))
console.log(Number.isFinite(-Infinity))
console.log(Number.isFinite(NaN))
console.log(Number.isFinite(123))
console.log(Number.isFinite('123')) 
console.log(isFinite('123'))

console.log(Number.isNaN('123'))
console.log(Number.isNaN(NaN))
console.log(Number.isNaN(0/0))

//if the value is not converted into number then it gives Nan
console.log(Number.parseFloat('10.3meters'));
console.log(Number.parseFloat('abc10.3xyz'));


//math
console.log(Math.sign(-Infinity)) 
console.log(Math.sign(0)) 
console.log(Math.sign(Infinity))
console.log(Math.sign(10))
console.log(Math.sign('N')) 

console.log(Math.trunc(-3.5)) 
console.log(Math.trunc(-3.6)) 
console.log(Math.trunc(3.5)) 
console.log(Math.trunc(3.6)) 

//Arrays

//entries
let cgpa_list = [7.5,8.5,6.5,9.5]
   let iter = cgpa_list.entries()
   for(let cgpa of iter){
      console.log(cgpa[1])
   }

//find
const products = [{name:'Books',quantity:10},
{name:'Pen',quantity:20},
{name:"Books",quantity:30}
]
console.log( products.find(p=>p.name==="Books"))

//fill
let nosArr = [10,20,30,40]
console.log(nosArr.fill(0,1,3))// value ,start,end
console.log(nosArr.fill(0,1)) // [10,0,0,0]
console.log(nosArr.fill(0))

//array.of
console.log(Array.of(10))
console.log(Array.of(10,20,30))
console.log(Array(3))

//Objects
let emp1 = {ename:'Prijin'}
let emp2 = {ename:'Prijin'}
console.log(Object.is(emp1.ename,emp2.ename))
