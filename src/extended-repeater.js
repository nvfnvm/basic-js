const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = [];
  let rep = [];
  let repeatTimes = options.hasOwnProperty("repeatTimes") ? options.repeatTimes : 1;
  let separator = options.hasOwnProperty("separator") ? options.separator + "" : "+";
  let addition = options.hasOwnProperty("addition") ? options.addition + "" : "";
  let additionTimes = options.hasOwnProperty("additionRepeatTimes") ? options.additionRepeatTimes : 1;
  let additionSeparator = options.hasOwnProperty("additionSeparator") ? options.additionSeparator : "|";

  for(let i = 0; i < additionTimes; i++) {
    rep.push(addition)
  }
  rep = rep.join(additionSeparator);
  for(let j = 0; j < repeatTimes; j++) {
    result.push(str + rep)
  }
  return result.join(separator)
}

module.exports = {
  repeater
};
