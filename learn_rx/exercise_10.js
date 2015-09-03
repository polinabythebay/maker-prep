
//Exercise 10: Implement concatAll()

Array.prototype.concatAll = function() {
  var results = [];
  
  var pushSubArray = function(array){
      results.push(array);
  };
  
  this.forEach(function(subArray) {
    // ------------ INSERT CODE HERE! ----------------------------
    // Add all the items in each subArray to the results array.
    // ------------ INSERT CODE HERE! ----------------------------
    subArray.forEach(function(id){
      results.push(id);
    });
  });

  return results;
};