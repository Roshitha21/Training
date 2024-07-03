//basic
let d= (function(a){
    return a + a;
})(10);
console.log(d)

//using arrow func
let c= ((a,b) => {
    return a + b;
})(10,20);
console.log(c)

//
function myFunc()
{
    console.log("Hello");
    (function() { 
        console.log("Hi there"); 
    })();
    console.log("Bye");
}
console.log(myFunc());


//IIFE working
const calculator = (function () {
    function add(a, b) {
        return a + b;
    }

    function multiply(a, b) {
        return a * b;
    }
    return {
        add: add,
        multiply: multiply
    }
})();
console.log(calculator.add(10,12))