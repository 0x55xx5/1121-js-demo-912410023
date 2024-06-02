const calculateBtn = document.querySelector('#calculate');
const bmiResult = document.querySelector('#result');
const suggest = document.querySelector('#suggest');

function bmiCalcResult_23(height, weight) {
  let bmi = bmiCalc_23(height, weight).toFixed(2);
  console.log(`For (h,w) = (${height},${weight}), the BMI = ${bmi}`);
}

function bmiDataCalc(data) {
  data.forEach(function (item) {
      bmiCalcResult_23(item.height, item.weight)
  });
}

function bmiCalc_23(height, weight) {
  return weight / (height * height);
}
function bmi_normal_low(height) {
  return 18.5 * (height * height);
}
function bmi_normal_high(height) {
  return 24 * (height * height);
}
