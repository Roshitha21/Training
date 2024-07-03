var hello = {
name : "ABC",
printFunc: function(){
    document.write(this.name);}
    }
        
hello.printFunc();

//binding is lost
var bindfunc = {
name : "ABC",
printFunc: function(){
    document.write(this.name);}
    }
    
var printFunc2= bindfunc.printFunc;
printFunc2();

//modified
var bindfunc = {
name : "ABC",
printFunc: function(){
    document.write(this.name);}
    }
    
var printFunc2= geeks.bindfunc.bind(bindfunc);
printFunc2();
