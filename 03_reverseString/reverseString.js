const reverseString = function(str) {
     let count = 0;
     let finalString = "";

     while (count < str.length) {
          let reverse = str.slice((str.length - (count+1)), (str.length - count));
          finalString += reverse; 
          count++;
     }
     return finalString;
};

// Do not edit below this line
module.exports = reverseString;
