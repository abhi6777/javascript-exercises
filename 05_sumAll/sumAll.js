const sumAll = function(firstNumber, lastNumber) {
     let finalSum = 0;
     let startingNumber = firstNumber;
     let endNumber = lastNumber;

     if(firstNumber < 0 || lastNumber < 0) {
          let result = "ERROR";

          return result;
     }
     if(!(typeof firstNumber === 'number' && typeof lastNumber === 'number')) {
          let result = "ERROR";

          return result;
     }

     if (startingNumber > lastNumber) {
          while (endNumber <= firstNumber) {
               finalSum = finalSum + endNumber;
               endNumber++;
     
          }
     }

     while (startingNumber <= lastNumber) {
          finalSum = finalSum + startingNumber;
          startingNumber++;

     }
     return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
