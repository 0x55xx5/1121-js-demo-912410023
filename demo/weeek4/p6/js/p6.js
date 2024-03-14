import { d1 } from '../data_23.js';
let bmi_data = d1;
console.log(bmi_data);
const { height, weight, name } = bmi_data;
const bmiVal = (height, weight) => {
  return weight / (height * height);
};
function ShowData(h, w) {
  let bmi = bmiVal(h, w).toFixed(2);
  console.log(`bmi data are ${h}-${w}, bmi is ${bmi}`);
}
ShowData(1.75, 70);
const showMoreData = (bmi_data) => {
  bmi_data.forEach((itm) => {
    ShowData(itm.height / 100, itm.weight);
  });
};
showMoreData(bmi_data);

function ShowDataWithSuggestion(h, w) {
  let bmi = bmiVal(h, w).toFixed(2);

  if (18.5 > bmi) {
    console.log(
      `${h}-${w}, bmi is ${bmi} and ${below(h) - w} kg lower than normal`
    );
  } else if (bmi < 24 && 27 > bmi) {
    console.log(
      `${h}-${w}, bmi is ${bmi} and ${normal(h) - w} kg higher than normal`
    );
  } else {
    console.log(
      `${h}-${w}, bmi is ${bmi} abnormal  and ${
        w - normal(h)
      } kg higher than normal`
    );
  }
}
const below = (h) => {
  return 18.5 * h * h;
};
const normal = (h) => {
  return 24 * h * h;
};
ShowDataWithSuggestion(1.75, 45);
ShowDataWithSuggestion(1.75, 70);
ShowDataWithSuggestion(1.75, 99);
