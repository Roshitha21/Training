let text = "Is this all there is?";
let pattern = /is/g; 
let result = text.match(pattern);
result

//case insenseitive
let text = "Visit W3Schools";
let pattern = /w3schools/i;
let result = text.match(pattern);

//multiline search for "is" at the beginning of each line in a string ^-start and $end
let text = `Is this all 
there
is`
let pattern = /^is/m;
let result = text.match(pattern);

//GROUPS
let text = "Is this all there is?";
let pattern = /[a-h]/g;
let result = text.match(pattern);


//^-not any of the characters
let text = "Do you know if this is all there is?";
let pattern = /[^is]/gi; 
let result = text.match(pattern);

//alternatives
let text = "re, green, red, green, gren, gr, blue, yellow";
let pattern = /(red|green)/g;
let result = text.match(pattern);

/