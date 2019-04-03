// Find the maximum
function maxOfTwoNumbers (num1, num2) {
  if (num1 < num2) {
    return num2;
  } else if (num1 > num2) {
    return num1;
  } else {
    return num1;
  }
}

// Finding Longest Word
var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
 function findLongestWord (para1) {
   console.log(para1);
  if(para1.length === 0){
    return undefined;
  }
  var currentLongest = ""; 
  for (var i = 0; i < para1.length; i++) {

    if (currentLongest.length < para1[i].length) {

      currentLongest = para1[i];
    } 
   } 
   return currentLongest;
 }

// Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumArray(para1){
  var sum =0;
  para1.forEach(element => { sum += element ;
  });
  return sum;
}
// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(para1){
  if(para1.length === 0){
    return undefined;
  }
  var sum = 0;
  para1.forEach(element => { sum += element ;
  });
  return ( sum / para1.length);
}

// Array of Strings
var wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
function averageWordLength(para1){
  if(para1.length === 0){
    return undefined;
  }
  var sumW = 0;
for(var j = 0; j < para1.length; j++){
  sumW += para1[j].length;
}
return (sumW / para1.length);
}
// Unique Arrays
var wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(para1){
  for (var x = 0; x < para1.length; x++) {
    var word = para1[x];
    for (var w = 0; w < para1.length; w++) {
      if (word === para1[w]) {
        var indexWord = para1.indexOf(para1[w])
        para1.slice(indexWord);
        var slicedArray = para1;
      }
    }
    }
    return slicedArray;
  }


// Finding Elements
var wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];
function doesWordExist (para1, para2){
  if(para1.length === 0){
    return false;
  }
   return para1.includes(para2) || para2.includes(para1)
}
// Counting Repetion
var wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(para1,para2){
  if(para1.length === 0){
    return false;
  }
  counter =0;
  for( var q = 0;q < para1.length;q++){
    if(para1[q] === para2){
      counter ++;
    }
  }
  return counter;
}
// Bonus Quest

var matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];


function greatestProduct(para1){
  if (para1.length === 0) {
    return undefined;
  }
  var currentLargest = 0;

  for (var x = 0; x < para1.length-5; x++) {
    console.log("works");

    for (var w = 0; w < para1[x].length-5; w++) {
      var product = para1[x][w] * para1[x][w+1] * para1[x][w+2] * para1[x][w+3];
      console.log(product);
      if (currentLargest < product) {
        currentLargest = product;
        console.log(currentLargest);
      } 
      
    }
    console.log("------------------");
    for (var r = 0; r < para1[x].length; r++) {
      var product2 = para1[x][r] * para1[x+1][r] * para1[x+2][r] * para1[x+3][r];
       if (currentLargest < product2) {
         currentLargest = product2;
         console.log(currentLargest);
       }
    }
    }
    return currentLargest;
  }