
guard pattern

var secret = admin && "the secret password"

var test = some.var || "default value"


why functions 

- do not repeat yourself
- structure large programs
- you can associated names with subprograms

- isolate subprograms from each other

- modularity: mix and match parts
- abstraction, hiding information

functional programming

var function_name = function(x, y) {
  
}

they always return something

functions can have side effect. 

console.log() -> doesn't have a defined return statement. side effect of printing something.


Fun to completion expectation of JS:

Whether you realized it or not, you've always been able to assume something fairly fundamental about your functions: once the function starts running, it will always run to completion before any other JS code can run.

JS is always single-threaded (only one command/function executing at any given time)

make ugly asynchronous code look pretty 
