//Exercise 17: Retrieve the largest rating.

function() {
  var ratings = [2,3,1,4,5];

  // You should return an array containing only the largest rating. Remember that reduce always
  // returns an array with one item.
  
  var combiner = function(accumulatedValue, currentValue){
    if (accumulatedValue >== currentValue){
      return accumulatedValue;
    } else {
      return currentValue;
    }
  }
  
  return ratings.
    reduce(combiner,0);     
}