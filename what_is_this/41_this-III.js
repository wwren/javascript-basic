// This is a JavaScript Quiz from BFE.dev

const obj = {
  a: 1,
  b: this.a + 1,
  c: () => this.a + 1,
  d() {
    return this.a + 1;
  },
  e() {
    return (() => this.a + 1)();
  },
};
console.log(obj.b); // NaN // Only function calls establish a new lexical scope. Object constructor (even if it has {}) does not create a new lexical scope. `this` is where obj is defined
console.log(obj.c()); // NaN // Arrow function's `this` is from when the arrow function is defined not called. `this` taken from its lexical scope -> where obj is defined
console.log(obj.d()); // 2 // function's `this` is the object to the eft of dot
console.log(obj.e()); // 2 // when e is defined, return this.a + 1. e is the same as d
