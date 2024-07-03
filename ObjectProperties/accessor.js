//getter
const student = {
    firstName: 'Roshitha',
    get getName() {
        return this.firstName;
    }
};

console.log(student.getName); 
// trying to access as a method
//console.log(student.getName()); // error

//setter
const student1 = {
    firstName: 'Monica',
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(student1.firstName); 
student1.changeName = 'Sarah';
console.log(student1.firstName);