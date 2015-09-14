
//Exercise 10


//zipper function
//combines two arrays in alternating order


//case 1: they're both the same size

var result = [];

// console.log(result.push(arr3[0]));
// console.log(result.push(arr4[0]));
// console.log(result);


// console.log(arr4[0]);

var comb = function(arr1, arr2){
    var result = [];
    
    var limit = arr1 + arr2;
    var i = 0;
    while (i < limit){
        if (arr1 != undefined) {
            result[i] = arr1.shift();
            i++;
        }
        if (arr2 !=undefined) {
            result[i] = arr2.shift();
            i++;
        }
    }
    return result;
}



// console.log(comb(arr3, arr4));

var combine = function(arr1, arr2){
    
    var result = [];
    var limit = arr1.length + arr2.length;
    
    for (var i = 0; i < limit; i++){
        
        
        if ((i%2 === 0) && (arr1.length != 0)){
            result[i] = arr1.shift();
            console.log('first', result[i]);
            console.log(result);
            continue;
        } 
        
        if (i%2 === 0 && (arr1.length === 0) && (arr2.length != 0)){
            result[i] = arr2.shift();
            console.log('second', result[i]);
            console.log(result);
            continue;
        }
  
        if ((i%2 === 1) && (arr2.length != 0)){
            result[i] = arr2.shift();
            console.log('third', result[i]);
            console.log(result);
            continue;
        } 
        
        if ((i%2 === 1) && (arr2.length === 0) && (arr1.length != 0)){
            result[i] = arr1.shift();
            console.log('fourth', result[i]);
            console.log(result);
            continue;
        }
    }
    return result;
}

var arr3 = [1,2,3,4,5,6,7,8,9];
var arr4 = ['a','b','c','d','e'];

console.log(combine(arr3, arr4));


//applies operator


var arr = [1,2,3];

var result = arr.map(function(num){
    return num * 2;
});

// console.log(result);




//Only odds

var onlyOdds = function(arr){
    var result = [];
    
    for (var i = 0; i < arr.length ; i++){
        if (i%2 === 1){
            result.push(arr[i]);
        }
    }
    return result;
}

// console.log(onlyOdds([0,1,2,3,4]));



//input array of values
//target value

//how many times does target value exist in array?

var numTarget = function(arr, target){
    var result = 0; 
    
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === target){
            result++;
        }
    }
    return result;
}

// console.log(numTarget([1,1,2,3,4],1));





//input: array of values
//return boolean if hello exists

var hello = function (arr){
    for (var i = 0; i < arr.length ; i++){
        if (arr[i] === 'hello'){
            return true;
        }
    }
    return false;
}

// console.log(hello(["hi", "hola", "hello"]));

// console.log(hello(["hi", "hola"]));


//Exercise 8

var pluck = function (arr1, index){
    var removed;
    removed = arr1.splice(index,1);
    return removed;
}

var arr = [1,2,3,4];
pluck(arr, 0);

// console.log(arr);


var frenemies = ['ada', 'will', 'bianca', 'abe',
'john', 'alice'];

var start = 3;
var remove = 2;

var removed = frenemies.splice(start,remove);

// console.log("we took out", removed);
// console.log("remaining", frenemies);


//Exercise 7

var arrayCombiner = function(array1, array2){
    //loop through array 2 and push all of those to array 1
    
    var output = array1.slice();
    
    for (var i = 0; i < array2.length; i++){
        output.push(array2[i]);
    }
    return output;
}

// console.log(arrayCombiner([1,2], [3,4]));

var arrayDupe = function(arr){
    var output = [];
    for (var i = 0; i < arr.length; i++){
        output[i] = arr[i];
    }
    return output;
}

var origin = [1,2,3,4];
var dupe = arrayDupe(origin);

dupe.pop();
dupe.pop();
dupe.pop();

// console.log(origin, dupe);







//Exercise 6

// arr = [1,2,3,4];

// // console.log(arr);

// var arr2 = arr;

// console.log(arr2);
// arr2.pop();
// console.log(arr2);
// console.log(arr);

// var arr3 = arr.slice();
// console.log(arr3);
// arr3.pop();
// console.log(arr3);
// console.log(arr2);
// var arr3 = arr.slice(); //clones array




//Exercise 5

var biggestSmallest = function(arr){
    var biggest = 0, smallest = 0;
    
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > biggest){
            biggest = arr[i];
        }
        if (arr[i] < smallest){
            smallest = arr[i];
        }
        console.log("biggest", biggest);
        console.log("smallest", smallest);
    }
    return [smallest, biggest];
}

// biggestSmallest([1,-10,33,16,4,25,106]);


//Exercise 2

// var recipe = [];

// var recipe = ["bake cake", "set table"];

// console.log(recipe[0]);

// var lastStep = recipe.length-1;

// console.log(recipe[lastStep]);

// var arr = ["stuff", "more stuff", "even more"];

// console.log(arr.length);

// console.log(arr.push("more at the end"));

// console.log(arr.unshift("More at the beginning!"));

//Exercise 4

var reverser = function (arr){
    var output = [];
    for (var i = arr.length-1; i >= 0; i--){
        console.log(output.push(arr[i]));
    }
    return output;
}

var some_array = [1,2,3,4,5];

// console.log(reverser(some_array));

// var err = [];
// console.log(err.push(1));
// console.log(err.push(2));

// reverser(some_array);