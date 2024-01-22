const fibonacci = function(index) {
     index = Number(index);
     if(index === 0){
          return 0;
     } else if(index < 1) {
          return "OOPS";
     }

     let fibArray = [1, 1];

     for (let i = 2; i < index; i++) {
          fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
     }

     return fibArray[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
