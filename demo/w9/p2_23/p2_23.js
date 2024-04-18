const calculateBtn = document.querySelector('#calculate');
const bmiResult = document.querySelector('#result');
const suggest = document.querySelector('#suggest');

function bmiCalc_40(height, weight) {
  return weight / ((height/100) * (height/100));
}

function bmi_normal_low(height) {
  return 18.5 * (height/100) * (height/100);
}

function bmi_normal_high(height) {
  return 24 * (height/100) * (height/100);
}

function calculateBMI() {
  const weight = Number(document.querySelector('#weight').value);
  const height = Number(document.querySelector('#height').value);
  // console.log(weight, height);
  const bmi = bmiCalc_40(height, weight);
  const normal_low = bmi_normal_low(height);
  const normal_hight = bmi_normal_high(height);

  let status;
  let suggestion;

  if(bmi < 18.5){
    status = 'underweight'
    suggestion = `add at least ${(normal_low - weight).toFixed(1)} kg to normal.`
  } else if (bmi <= 24) {
    status = 'normal';
    suggestion = ``;
  } else {
    status = 'Overweight';
    suggestion = `reduce at least ${(weight - normal_hight).toFixed(1)} kg to normal.`;
  }


  bmiResult.innerHTML = `Your BMI is ${bmi.toFixed(1)}. ${status}.`
  suggest.innerHTML = `${suggestion}`
};

calculateBtn.addEventListener('click', calculateBMI);
