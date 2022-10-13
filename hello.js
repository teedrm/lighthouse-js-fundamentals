// const sayHello  = function () {
//     console.log("Hello, world");
//   }
  
//   sayHello();

//We can call sayHello() as many times as we want to, and while we don't have to write the whole console.log expression every time, it's still not a very useful function. So let's see if we can improve it.

// const sayHello  = function (name) {
//     console.log("Hello, " + name);
//   }

// sayHello("Caliban");
// sayHello("Miranda");
// sayHello("Ferdinand");

//console.log:
const sayHelloToConsole  = function (name) {
    console.log("Hello, " + name);
  }
  sayHelloToConsole('John'); 

  //return:

  const returnSayHello  = function (name) {
    return "Hello, " + name;
  }
  const greeting = returnSayHello('John');

  //A console.log statement will result in some content being displayed in the console. A return statement will not output anything to the console. However, when a function returns a value, we can still console.log it later:

  