var array1 = [10, 20, 30, 40, 50];
var array2 = [60, 70, 80, 90, 100];
var array3 = [...array1, ...array2];
console.log(array3);


var array1 = [10, 20, 30, 40, 50];
var array2 = [...array1, 60];
console.log(array2);


const obj = {
    firstname: "John",
    lastname: "Peter",
};
const obj2 = { ...obj };
console.log(obj2);


//rest
function myBio(firstName, lastName, ...otherInfo) { 
    return otherInfo;
}
console.log(myBio("John", "Peter", "Hello", "Web Developer", "MAle"));
//

function fun(...input){
	let sum = 0;
	for(let i of input){
		sum+=i;
	}
	return sum;
}
console.log(fun(1,2)); 
console.log(fun(1,2,3)); 
console.log(fun(1,2,3,4,5)); 				
