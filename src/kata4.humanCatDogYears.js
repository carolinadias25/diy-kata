const humanCatDogYears = number => {
if (number === 1){
    catYear = 15,
    dogYear = 15
} else if (number === 2){
    catYear =24,
    dogYear = 24;
} else if (number > 2) {
    catYear = 24 + (number - 2) * 4;
    dogYear = 24 + (number - 2) * 5;
  }

  return [number,catYear,dogYear];
};

module.exports = humanCatDogYears;
