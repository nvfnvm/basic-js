const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

 function dateSample(sampleActivity) {  
  if(isNaN(+sampleActivity) || +sampleActivity <= 0 || sampleActivity.length === 0 || typeof sampleActivity != 'string') {
    return false;
  } else {
    let coef = 0.693 / HALF_LIFE_PERIOD;
    let x = MODERN_ACTIVITY / +sampleActivity;
    let result = Math.ceil(Math.log(x) / (coef));
    return Math.ceil(result) > 0 ? Math.ceil(result) : false;
  }
}

module.exports = {
  dateSample
};
