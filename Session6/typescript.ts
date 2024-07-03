// tsc .\typescript.ts 
// node .\typescript.js

//explicit
let firstName: string = "Dylan"; 
console.log(typeof firstName);

//implicit
let Name = "Dylan";
console.log(typeof Name);


//Encapsulation
class Person {
    name: string = ''
    age: number = 0
 }
 class Motor {
   make: string = ''
   model: string = ''
   color: string = ''
 }
 const person1 = new Person()
 const motor1 = new Motor()
 // warning Property 'age' does not exist on type 'Motor'
 motor1.age() 

 //Abstraction
 class Person {
    public name: string = ''
    public age: string = ''
 
    public greetings(){
      return name + ' ' + age
    } 
 }

 //Inheritance
 class Animal
{
    age: number
    breed: string
    constructor(age: number, breed: string)
    { 
        this.age = age
        this.breed = breed
    }
    makeSound_(sound: string): void
    {
        console.log(sound)
        console.log(sound)
        console.log(sound)
    }
}
//Polymorphism
class Person {
    public name: string = ''
    public role: string = '' 
 }
 
 class basketballPlayer extends Person {
      public setName(name: string){
        this.name = name
        this.role = 'BasketBall Player'
     }
     public getName(){
        return `User name: ${this.name} Role: ${this.role}`
     }
 }
 
 class golfPlayer extends Person {
     public setName(name: string){
        this.name = name
        this.role = 'Golf Player'
     }
     public getName(){
        return `User name: ${this.name} Role: ${this.role}`
     }
 }
 
 const person1 = new basketballPlayer()
 const person2 = new golfPlayer()
 person1.setName('Kevin Odongo')
 person2.setName('Kevin Odongo')
 console.log(person1.getName())
 console.log(person2.getName())