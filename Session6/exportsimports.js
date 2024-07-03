//name exports
//In-line individually:
// export const name = "Jesse";
// export const age = 40;


//All at once at the bottom:
// const name = "Jesse";
// const age = 40;
// export {name, age};


// //default export
const message = () => {
const name = "Jesse";
const age = 40;
return name + ' is ' + age + 'years old.';
};

export default message;

