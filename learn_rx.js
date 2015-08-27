
//Exercise 3: Project an array of videos into an array of {id,title} pairs using forEach()

function() {
  var newReleases = [
      {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id:432534, time:65876586 }]
      },
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id:432534, time:65876586 }]
      }
    ],
    videoAndTitlePairs = [];

  newReleases.forEach(function(item) {

    newItem = { "id" : item.id, "title" : item.title};
    videoAndTitlePairs.push(newItem);
  });

  return videoAndTitlePairs;
}

//Exercise 4: Implement map()

Array.prototype.map = function(projectionFunction) {
  var results = [];
  this.forEach(function(itemInArray) {

    // ------------ INSERT CODE HERE! ----------------------------
    // Apply the projectionFunction to each item in the array and add
    // each result to the results array.
    // Note: you can add items to an array with the push() method.
    // ------------ INSERT CODE HERE! ----------------------------
    
    results.push(projectionFunction(itemInArray));

  });

  return results;
};

// JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'

//Exercise 5: Use map() to project an array of videos into an array of {id,title} pairs

function() {
  var newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id:432534, time:65876586 }]
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id:432534, time:65876586 }]
    }
  ];

  // ------------ INSERT CODE HERE! -----------------------------------
  // Use map function to accumulate {id, title} pairs from each video.
  //return newReleases.map // finish this expression!
  // ------------ INSERT CODE HERE! -----------------------------------
  
    return newReleases.map(function(itemArray){
      return {"id": itemArray.id, "title" : itemArray.title};
    });
}

//Exercise 6: Use forEach() to collect only those videos with a rating of 5.0

function() {
  var newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id:432534, time:65876586 }]
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id:432534, time:65876586 }]
    }
  ],
  videos = [];

  // ------------ INSERT CODE HERE! -----------------------------------
  // Use forEach function to accumulate every video with a rating of 5.0
  // ------------ INSERT CODE HERE! -----------------------------------
  
  newReleases.forEach(function(item){
    if (item.rating === 5.0){
    videos.push(item);
    }
  });

  return videos;
}

//Exercise 7: Implement filter()

Array.prototype.filter = function(predicateFunction) {
  var results = [];
  this.forEach(function(itemInArray) {
    // ------------ INSERT CODE HERE! ----------------------------
    // Apply the predicateFunction to each item in the array.
    // If the result is truthy, add the item to the results array.
    // Note: remember you can add items to the array using the array's
    // push() method.
    // ------------ INSERT CODE HERE! ----------------------------
      if (predicateFunction(itemInArray)){
          results.push(itemInArray);
          }
  });
  return results;
};

// JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === "[3]"

//Exercise 8: Chain filter and map to collect the ids of videos that have a rating of 5.0

function() {
  var newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id:432534, time:65876586 }]
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id:432534, time:65876586 }]
    }
  ];

  // ------------ INSERT CODE HERE! -----------------------------------
  // Chain the filter and map functions to select the id of all videos
  // with a rating of 5.0.
  var ifRatingFive = function(item){
    if (item.rating === 5.0){
    return true;
    } else {
    return false;
    }
  }
  
      var returnID = function(item){
        return item.id;
      }
 

  return newReleases.filter(ifRatingFive).map(returnID);
    // Complete this expression
  // ------------ INSERT CODE HERE! -----------------------------------
    
    
}

//Exercise 9: Flatten the movieLists array into an array of video ids

function() {
  var movieLists = [
    {
      name: "New Releases",
      videos: [
        {
          "id": 70111470,
          "title": "Die Hard",
          "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id:432534, time:65876586 }]
        }
      ]
    },
    {
      name: "Dramas",
      videos: [
        {
          "id": 65432445,
          "title": "The Chamber",
          "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 675465,
          "title": "Fracture",
          "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id:432534, time:65876586 }]
        }
      ]
    }
  ],
  allVideoIdsInMovieLists = [];

  // ------------   INSERT CODE HERE!  -----------------------------------
  // Use two nested forEach loops to flatten the movieLists into a list of
  // video ids.
  // ------------   INSERT CODE HERE!  -----------------------------------
  
  var getGenre = function(genre){
      console.log(genre.videos);
    genre.videos.forEach(pushVideoID);
  };
  
  var pushVideoID = function(video){
      allVideoIdsInMovieLists.push(video.id);
  };
  
  var videoIdList = movieLists.forEach(getGenre);
  
    //console.log(allVideoIdsInMovieLists);

  return allVideoIdsInMovieLists;

}

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
    subArray.forEach(pushSubArray);
  });

  return results;
};


// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array



    