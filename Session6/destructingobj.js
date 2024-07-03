//Assigning to existing variable names
var employee = {    
    firstname: 'Jon',
    lastname: 'Snow',
    dateofbirth: '1990'
};

var { firstname, lastname, dateofbirth } = employee;
console.log( firstname, lastname, dateofbirth);

//Assigning to new variable names
var employee = {    
    firstname: 'Jon',
    lastname: 'Snow',
    dateofbirth: '1990'
};
var { firstname: fn, lastname: ln, dateofbirth: dob } = employee;
console.log( fn, ln, dob);

//Assigning to a variable with default values
var employee = {   
    firstname: 'Jon',
    lastname: 'Snow',
    dateofbirth: '1990'
};

var { firstname, lastname, country } = employee;
console.log("Without setting default values")
console.log( firstname, lastname, country);

//default
var { firstname = 'default firstname', 
      lastname = 'default lastname', 
      country = 'default country' } = employee;
console.log("\n After setting default values")
console.log( firstname, lastname, country);