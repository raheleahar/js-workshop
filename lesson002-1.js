//
//
// const addThree = (a) => {
//   return a + 3;
// };
//
// const name = 'hamid';
//
// const sayHello = () => {
//   const temp = () => { return 5; };
//
//   const hi = 'hi';
//   console.log(hi + ' ' + name);
// };

function operationAdd(env) {
  return function (a, b) {
    if (env === 'test') {
      console.log('lesson002-1.js:19', {a, b});
    }
    return a + b;
  }
}

const addWithLog = operationAdd('test');
const addProduction = operationAdd();

console.log(addProduction(1, 3));

