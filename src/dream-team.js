const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let firstName;
  if (!Array.isArray(members)) {
    firstName = false;
  } else {
    firstName = members.map(el => (typeof(el) == "string" ? el.trim().toUpperCase()[0] : "")).sort().join("")
  }
  return firstName;
}

module.exports = {
  createDreamTeam
};
