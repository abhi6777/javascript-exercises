const repeatString = function(str, num) {
     if (num < 0) {
          return "ERROR";
     }     
     let count = 0;
     let result = "";
     while (count < num) {
          result += str;
          count++;
     }
     return result;
};

// Do not edit below this line
module.exports = repeatString;
