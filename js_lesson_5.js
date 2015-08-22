
//Exercise 7

//Fibonacci

var fib = function(n){
    if (n === 1){
        return 0;
    } else if (n === 2){
        return 1;
    } else {
        return fib(n-1) + fib(n-2);
    }
}

// fib(1);
// fib(2);
// fib(3);
// fib(4);
// fib(5);
// fib(6);
// fib(7);


//Exercise 6

var this_that = function(fizz, buzz){
    var num = 1; 
    while (num <= 100) {
        if (num%3 === 0 && num%5 === 0){
            console.log(fizz + buzz);
        } else if (num%3 === 0){
            console.log(fizz);
        } else if (num%5 === 0){
            console.log(buzz);
        } else{
            console.log(num);
        }
        num++;
    }
}

// this_that("buh", "bye");

//Exercise 5

var factorial_of_n = function(number){
    if (number===1){
        return 1;
    } else {
        return factorial_of_n(number-1)*number;
    }
}

// factorial_of_n(1);
// factorial_of_n(2);
// factorial_of_n(3);
// factorial_of_n(5);

var count_by_n = function(count_by, count_up_to){
    var begin = 1;
    console.log(begin);
    while (begin + count_by < count_up_to){
        console.log(begin + count_by);
        begin ++;
    }
}

// count_by_n(2,10);