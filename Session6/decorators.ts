//class decorator
@sealed  
class Person {  
    msg: string;  
    constructor(message: string) {  
        this.msg = message;  
    }  
    show() {  
        return "Hello, " + this.msg;  
    }  
}  
//Method Decorators
class Item {  
    itemArr: Array;  
    constructor() {  
        this.itemArr = [];  
        }  
    @log  
    Add(item: string): void {  
       this.itemArr.push(item);  
       }  
    GetAll(): Array {  
       return this.itemArr;  
       }  
}  
//Accessor Decorators
class Employee {  
    private _salary: number;  
    private _name: string;  
  
    @configurable(false)  
    get salary() { return 'Rs. ${this._salary}'; }  
    set salary(salary: any) { this._salary = +salary; }  
  
    @configurable(true)  
    get name() { return 'Sir/Madam, ${this._name}'; }  
    set name(name: string) { this._name = name; }  
}  
//Property Decorators
class Company {  
    @ReadOnly   
    name: string = "JavaTpoint.com";  
   }  
   let comp = new Company();  
   comp.name = 'SSSIT.com'; // Here, we can't change company name.  
   console.log(comp.name); // 'JavaTpoint.com'  

//Parameter Decorators
class Person {  
    msg: string;  
    constructor(message: string) {  
        this.msg = message;  
    }  
    @validate  
    show(@required name: string) {  
        return "Hello " + name + ", " + this.msg;  
    }  
}  