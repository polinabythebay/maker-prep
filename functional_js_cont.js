
//non destructive

var forEach = function(arr, callback){
    for (var i = 0; i < arr.length; i++){
        callback(arr[i]);
    }
};

var languages = [1,2,3,4];

forEach(languages, function(item){
    console.log(item);
});

var map = function(arr, callback){
    result = [];
    for (var i = 0; i< arr.length; i++){
        result[i] = callback(arr[i]);
    }
    return result;
}

var result = map(languages, function(item){
    return item + 2;
});

console.log(result);