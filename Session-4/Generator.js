function* generate() {
    console.log('invoked 1st time');
    yield 1;
    console.log('invoked 2nd time');
    yield 2;
}
let gen = generate();
console.log(gen)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

//looping
for (const g of gen) {
    console.log(g);
}

//return method
function* returnm() {
    yield 1;
    yield 2;
    yield 3;
  }
  const g = returnm();
  g.next();        
  g.return('foo'); 
  g.next();       
  
  //throw method
  function* genthrow() {
    while (true) {
      try {
        yield 42;
      } catch (e) {
        console.log('Error caught!');
      }
    }
  }
  const b = genthrow();
  b.next();
  b.throw(new Error('Something went wrong'));

  