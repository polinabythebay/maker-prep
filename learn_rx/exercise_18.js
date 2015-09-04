

// /Exercise 18: Retrieve url of the largest boxart

function() {
  var boxarts = [
      { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
      { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
      { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
      { width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
    ];

  // You should return an array containing only the largest box art. Remember that reduce always
  // returns an array with one item.
  
  var returnURL = function(boxart){
    return boxart.url;
 }

 var combiner = function(largestBoxArt, currentBoxArt){
      currentSize = currentBoxArt.width * currentBoxArt.height;
      largestSize = largestBoxArt.width * largestBoxArt.height;

    if (currentSize > largestSize) {
      return currentBoxArt;
    } else{
      return largestBoxArt;
    }
 }

  return boxarts.reduce(combiner).map(returnURL);

}
  

