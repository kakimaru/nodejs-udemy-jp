// const calc = require('./calc')
// const { plus } = require("./calc");
import minus, * as calc from "./calc.cjs";


const result = calc.default(1, 2);
const result2 = minus(1, 2);
console.log(result);
console.log(result2);
