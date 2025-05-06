// This is a JavaScript Quiz from BFE.dev

// var bar = 1; // in browser
global.bar = 1; // in node

function foo() {
  // postfix - operator after operand. The increment operator increments and returns the value before incrementing
  return this.bar++;
}

const a = {
  bar: 10,
  foo1: foo,
  foo2: function () {
    return foo();
  },
  foo3: () => foo(),
};

// call with null/ undefined `this` in non strict mode `this` points to the global `this`
console.log(a.foo1.call()); // 1 // `this` points to the global `this`. Increment bar by 1 and return the bar before incrementing
console.log(bar); // 2
console.log(a.foo1()); // 10 // foo is called as a method of an object. `this` points to the object before dot - `a`. Increment bar by 1 and return the bar before incrementing.
console.log(a.bar); // 11
console.log(a.foo2.call()); // 2 // foo2.call() has undefined `this` & `this` points to the global `this`. return foo(), foo() is called as function not as a method of an object
console.log(a.foo2()); // 3
console.log(a.foo3()); // 4
