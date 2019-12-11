// !!Test function!!
// expected input: array, callback function
// expected output: string
function fooBarBanana(arr, cb) {
  return cb(arr[0]);
}

// Return a list of all character names
// expected input: array
// expected output: array
function listCharacterNames(/** your code here */) {
  // your code here
}

// return a count of all characters where 'dead' is true
// expected input: array
// expected output: integer
function findOnlyDeadCharacters(/** your code here */) {
  // your code here
}

// Return the character name of the player who has completed the most challenges
// expected input: array
// expect output: string "{ name } has completed the most challenges!"
function mostChallengesCompleted(/** your code here */) {
  // your code here
}

////////////////// TESTS! IGNORE ME! //////////////////
////////////////// TESTS! IGNORE ME! //////////////////
////////////////// TESTS! IGNORE ME! //////////////////
////////////////// TESTS! IGNORE ME! //////////////////
////////////////// TESTS! IGNORE ME! //////////////////
////////////////// TESTS! IGNORE ME! //////////////////
////////////////// TESTS! IGNORE ME! //////////////////
////////////////// TESTS! IGNORE ME! //////////////////
////////////////// TESTS! IGNORE ME! //////////////////
////////////////// TESTS! IGNORE ME! //////////////////

if (typeof exports !== "undefined") {
  module.exports = module.exports || {};
  if (fooBarBanana) {
    module.exports.fooBarBanana = fooBarBanana;
  }
  if (listCharacterNames) {
    module.exports.listCharacterNames = listCharacterNames;
  }
  if (findOnlyDeadCharacters) {
    module.exports.findOnlyDeadCharacters = findOnlyDeadCharacters;
  }
  if (mostChallengesCompleted) {
    module.exports.mostChallengesCompleted = mostChallengesCompleted;
  }
}
