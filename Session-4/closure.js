var passed=3
var addTo=function(){
    var inner=2;
    return passed+inner;
};
console.dir(addTo)



//clsoure in functions
//  function that references variables in the outer scope from its inner scope.

var addTo=function(passed){
    var add=function(inner){
        return passed+inner;
    };
    return add;
};
var addnumber=new addTo(4);
console.log(addnumber(1))