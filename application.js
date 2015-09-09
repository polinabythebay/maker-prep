var myArray = [];
myArray.push('Polina Soshnin');
myArray.push('polina.soshnin');

var cutName = function(str){
  var result = str.split(" ");
  return result;
}

var myData = {};

myData = {
  "fullName" : cutName(myArray[0]),
  "skype" : myArray[1],
  "github" : "polinadotio"
}