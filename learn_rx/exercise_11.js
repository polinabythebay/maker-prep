 //Use map() and concatAll() to project and 
 //flatten the movieLists into an array of video ids

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
    ];

  // ------------   INSERT CODE HERE!  -----------------------------------
  // Use map and concatAll to flatten the movieLists in a list of video ids.
  // ------------   INSERT CODE HERE!  -----------------------------------

  //return video.id from videos array
  var returnID = function(video){
    return video.id;
  }

  //return videos array from genre
  var returnVideos = function(genre){
    return genre.videos.map(returnID);
  }

//movies array of two genres
//genre object with videos array
//videos array of two videos where you want video.id

   return movieLists.map(returnVideos).concatAll();

}