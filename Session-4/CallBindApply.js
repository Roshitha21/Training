obj={
    firstName:'Roshitha',
    lastName:'Sarabu',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
console.log(obj.fullName())

obj2={
    firstName:'John',
    lastName:'Doe',
    // fullName: function () {
    //     return this.firstName + " " + this.lastName;
    // }
}
console.log(obj.fullName.call(obj2))
//passing arguments
call1={
    firstName:'Roshitha',
    lastName:'Sarabu',
    fullName: function (city) {
        return this.firstName + " " + this.lastName +" lives in the " +city;
    }
}
console.log(call1.fullName("Hyderabad"))

call2={
    firstName:'John',
    lastName:'Doe',
}
console.log(call1.fullName.call(call2,"LosAngels"))


//Apply
console.log(obj.fullName.apply(obj2))
console.log(call1.fullName.call(call2,["Atlantia"]))

//bind
let x=call1.fullName.bind(call2,"North")
console.log(x())