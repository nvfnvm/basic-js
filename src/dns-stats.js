const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let resultDns = {};
  for(let el of domains) {
    let domain = "";
    let piece = el.split(".").reverse();
    for(let el of piece) {
      domain += `.${el}`
      if(resultDns.hasOwnProperty(domain)) {
        resultDns[domain]++;
      } else {
        resultDns[domain] = 1;
      }
    }
  }
  return resultDns
}

module.exports = {
  getDNSStats
};
