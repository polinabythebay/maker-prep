
//Exercise 6

var multiplies_by = function(number){
    var num = number;
    return function(another_num){
        return num * another_num;
    }
}

var times5 = multiplies_by(5);
// times5(4);

var times10 = multiplies_by(10);
// times10(32);

var returns_a_func = function(){
    var word = 'I can see inside';
    return function(){
        console.log("boop!"+ word);
    }
}

var word = "I can see outside";

var new_booper = returns_a_func();

// new_booper();

var returns_num_func = function(){
    var number = 5;
    return function(){
        console.log("number is", number);
    };
};

var number = 4;
// var fn = returns_num_func();
// fn();

var func_runner = function(func){
    var number = 3;
    func();
}

// func_runner(fn);





//Exercise 5

var number = 1;

var adds_10 = function(){
    console.log(number + 10);
}


var leaky_adds_10 = function(){
    number +=10;
    console.log(number);
}

// adds_10();

// console.log(number);

// leaky_adds_10();

// console.log(number);




//Exercise 4

var secret_keeper = function(str1, str2){
    
    var secret = "secret";
    console.log(str1, secret, str2);
}

//secret_keeper("hello", "world");

var word = 'original';
var phrase = " is the word";
var new_word = 'changed';

var word_changer = function (new_word){
    var word = new_word;
    console.log(word + phrase);
};

var leaky_word_changer = function(new_word){
    word = new_word;
    console.log(word + phrase);
};

// word_changer("cool");
// leaky_word_changer("cool");

// console.log(word + phrase);
// console.log(new_word + phrase);

// word_changer(new_word);

// console.log(word + phrase);
// console.log(new_word + phrase);

// leaky_word_changer(new_word);

// console.log(word + phrase);
// console.log(new_word + phrase);

//modify stuff in the inner function







//Exercise 3

var add_five = function(){
    return function(param){
        return 5 + param;
    };
};

var add_fiver = add_five();

// console.log(add_fiver(6));


//Exercise 2

var answer_collector = function (arr){
    result = [];
    for (var i = 0; i < arr.length; i++){
        result.push(arr[i]());
    }
    return result;
}

var fn1 = function(){
    return "This should be the first value";
}

var result = answer_collector([fn1, function(){return "This is the second value"}]);

// console.log(result);

//Exercise 1

var answer_logger = function(fn){
    console.log(fn());
}

// answer_logger(function(){
//     return "I should be returned";
// });

// var function_runner = function(fn){
//     fn();
// }

// var say_hi = function(){
//     // console.log("hi");
// }

// // function_runner(say_hi);

// // function_runner;

// function_runner(function(){
//     // console.log("Hi");
// });

// var beeper_function_factory = function(){
//     return function(){
//         console.log("Beep!");
//     }
// }

// // var beeper = beeper_function_factory();

// // beeper();

// function not_function_factory(){
//     var local_variable = "hello local scope";
//     return function(){
//         console.log(local_variable);
//     };
// }

// logger = not_function_factory();
// // logger();