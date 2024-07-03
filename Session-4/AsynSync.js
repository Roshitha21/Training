//Synchro
console.log('One');
console.log('Two');
console.log('Three');


//functions

const func2=()=>{
    console.log("Func2 started");
}
const func1=()=>{
    console.log("Func1 started");
    func2();
    console.log("Func1 ended");
}

func1();


//Asynchro
console.log('1');
setTimeout(() => console.log('2'), 2000);
console.log('3');

//functions

const fun2=()=>{
    setTimeout( ()=>{
        console.log("Fun2 started");
    },2000);
   
}
const fun1=()=>{
    console.log("Fun1 started");
    fun2();
    console.log("Fun1 ended");
}

fun1()

