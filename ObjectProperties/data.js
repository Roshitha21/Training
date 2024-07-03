
        //'use strict';
        const user1={name:'john'};
        console.log(user1.name)
        var descriptor=Object.getOwnPropertyDescriptor(user1,'name');
        console.log(descriptor);
       
        
        user1.name='doe';
        console.log(user1.name)
        //Non writable
        const user3={name:'raj'};
        console.log(user3.name);
        Object.defineProperty(user3,'name',{writable:false});
        var descriptor=Object.getOwnPropertyDescriptor(user3,'name');
        console.log(descriptor);
        user3.name='sonu';//gives error if we use in strict mode,otherwise it wont show error but alse wont change val
        console.log(user3.name);




        
        //Non enumerable
        const user4={name:'sira',class:10};
        for(let key in user4){
            console.log(key);
        }
        Object.defineProperty(user4,'name',{enumerable:false})
        for(let key in user4){
            console.log(key);
        }

        //Non configurable
        const user5={name:'sriram',class:10};
        delete user5.class;
        console.log(Object.keys(user5));
        Object.defineProperty(user5,'name',{configurable:false})
        delete user5.name;
        console.log(Object.entries(user5));


        //defineproperties-allow to define many properties(in descriptors)
        const user6={name:'siri',class:7};
        Object.defineProperties(user6,{name:{writable:false},class:{value:9}})
        let descriptors=Object.getOwnPropertyDescriptors(user6,'name','class');
        console.log(descriptors);
        
    