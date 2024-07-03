//executor function :resolve and reject
//promise produce
const pobj1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let rollNo=[1,2,3,4,5];
        resolve(rollNo);
        reject('Error');
    },2000);
});
//promise consume
pobj1.then((rollNo)=>{
    console.log(rollNo);
}).catch((error)=>{
    console.log(error);
});


// ---------------------------------------
//promise object
const getBio=(indexdata)=>{
    return new Promise((resolve,reject)=>{
        setTimeout((indexdata)=>{
           let bio={
            fname:"john",
            age:24
           }
           resolve(`My roll is ${indexdata}. Name ${bio.fname}.Age ${bio.age}` )
        },2000,indexdata);
    });
}

//promise consume
pobj1.then((rollNo)=>{
    console.log(rollNo);
    getBio(rollNo[6]).then((x)=>{
        console.log(x);
    })
}).catch((error)=>{
    console.log(error);
});

