// This is a JavaScript Quiz from BFE.dev

const obj = {
  a: 1,
  b() {
    return this.a;
  },
};
console.log(obj.b()); // 1
console.log((true ? obj.b : a)()); // undefined // evaluates to obj.b, used as a function call & lose object context
console.log((true, obj.b)()); // undefined // comma operator evaluates all operants and return the last expression as a function, used as function call & lose object context
console.log((3, obj["b"])()); // undefined
// prettier-ignore
console.log((obj.b)()); // 1
console.log((obj.c = obj.b)()); // undefined // assignment expression evaluates to the value of the right-hand side, used as a function call & lose object context
obj.d = obj.b;
// prettier-ignore
console.log((obj.d)()); // 1
