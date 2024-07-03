let text = `He's often called "Johnny"`;
console.log(text)

//interpolation
let firstName = "John";
let lastName = "Doe";
let fullname = `Welcome ${firstName}, ${lastName}!`;
console.log(fullname);

//expression substitute
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);