const convertToCelsius = function(toChange) {
    let result = Math.round((toChange - 32) * (5/9) * 10) / 10;

    return result;
};

const convertToFahrenheit = function(toChange) {
    let result = Math.round(((toChange * 9)/5 + 32) * 10) / 10;

    return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
