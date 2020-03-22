const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

const CONSOLE_LOG_ENABLE = false;

module.exports = function dateSample(string_data/* sampleActivity */) {
  // throw 'Not implemented';
  if (CONSOLE_LOG_ENABLE) console.log(string_data);
  if (!((typeof string_data) === "string")) {
    return false;
  }

  let num = parseFloat(string_data);
  if (CONSOLE_LOG_ENABLE) console.log(num);
  if (!((num < MODERN_ACTIVITY) && (num > 0))) {
    return false;
  }

  let age = Math.ceil(HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY / num) / 0.693);
  if (CONSOLE_LOG_ENABLE) console.log(age);
  return age;
};
