Lets you make network requests without reloading the page.

Ajax: asynchronous js with xml.

what's special about json.

1. really easy for humans to read and write.
2. really easy for computers to deal with


//trading off order for names

var each = function(options){
    for (var i = 0; i < options.array.length; i++){
        options.callback(options.array[i]);
    }
}

each({
    array: [1,2,3],
    callback: function(item){
        console.log(item);
    }
})

//trading off knowing names for order 

var normalEach = function(array, callback){
    for (var i = 0; i< array.length; i++){
        callback(array[i]);
    }
}

normalEach([1,2,3], function(item){
    console.log(item);
});

