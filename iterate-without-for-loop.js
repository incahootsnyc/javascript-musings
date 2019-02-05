
let arrayToIterate = Array.from({ length: 5 }, (value, index) => index);

// OR

let arrayToIterate = Array.from({ length: 5 }, (...args) => args[1]);

/*
  [0, 1, 2, 3, 4]
*/

let newThing = function(val) {
  return {
    id: val
  };
};

arrayToIterate.map(value => newThing(value))