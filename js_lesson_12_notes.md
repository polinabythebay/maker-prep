js functional programming language

two types of functions

side effects -- prints. causes terminal to print a string. modifies anything outside of itself.

modifying state of program

if you just return something, you're not modifying the state of the program

doesn't interact with the outside env
doesn't print anything
doesn't touch anything outside it's own realm

functions first class citizens
functions are just like any other data type. can be assigned to variables.
passed as arguments.
functions can return functions.

argument = what you pass it
parameter = what you name it

invoke the function with arguments. data you pass. 
parameter is what it's called.



what asynchronous programming

anonymous function, function without a name
  this is useful because
  asynchronous coding


executes code in a linear fashion

go get data from the server, and based on that do something else
we don't know when that's gonna happen

create function, when that data gets function, execute this function

dealing with the fact that your code needs to manage latency inherent in networks
calling stuff from the internet

javascript is functionally scoped

anything not declared in a function is globally available

A function, anonymous or otherwise, that has been passed as an argument to another function is called a callback, because at some point the function it was passed to will "call it back".

Returned functions retain access to the scope that was available to them when they were defined. This is called closure.