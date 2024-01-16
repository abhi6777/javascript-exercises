const removeFromArray = function(array, ...toRemove) {
     let finalArray = [];
     array.forEach((item) => {
          if (!toRemove.includes(item)) {
               finalArray.push(item);
          }
     })

     return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
