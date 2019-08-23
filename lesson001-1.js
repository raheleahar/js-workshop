function add3(a, b) {
  return a + b;
}

const abcd = function (a, b) {
  return a + b;
};

const def = (a, b) => a + b;

const def2 = (a, b) => {
  if (a < b) {
    throw new Error('Bad Number');
  }

  return a + b;
};


const value = add3(1, 3);

console.log(value);


