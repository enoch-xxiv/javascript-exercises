function convertToCelsius (temp) {
  let tempInCelcius = (temp - 32) * (5/9);
    let roundedTemp = parseFloat(tempInCelcius.toFixed(1));
    return roundedTemp;
}

function convertToFahrenheit (temp) {
  let tempInFahrenheit = temp * (9/5) + 32;
  let roundedTemp = parseFloat(tempInFahrenheit.toFixed(1));
  return roundedTemp;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
