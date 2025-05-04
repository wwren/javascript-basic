// This is a JavaScript Quiz from BFE.dev

const obj = {
  a: 1,
  b: function () {
    console.log(this.a);
  },
  c() {
    console.log(this.a);
  },
  d: () => {
    console.log(this.a);
  },
  e: (function () {
    this.a = 234;
    return () => {
      console.log(this.a);
    };
  })(),
  f: function () {
    this.a = 123;

    return () => {
      console.log(this.a);
    };
  },
  g: function () {
    return () => {
      console.log(this.a);
    };
  },
};

console.log(obj.a); //1 // object property of a
obj.b(); // 1 // `this` evaluates to the left of the dot
const b = obj.b;
b(); // undefined // function call instead of object method
obj.b.apply({ a: 2 }); // 2 // change `this` to {a: 2}
obj.c(); // 1 // syntax shorthand
obj.d(); // undefined // arrow function, `this` is created when defined and taken from its lexical scope -> where obj is defined
// prettier-ignore
(obj.d)(); // undefined
obj.d.apply({ a: 2 }); // undefined // apply, call, bind does not change `this`. `this` is created when arrow function is defined
obj.e(); // 234 // IIFE returns an arrow function immediately, `this` taken from its lexical scope -> scope of IIFE
// prettier-ignore
(obj.e)(); // 234
obj.e.call({ a: 2 }); // 234 // `this` inside the arrow function cannot be changed by apply, call and bind
obj.f()(); // 123 // obj.f() is a function. This function's `this` is obj. Arrow function capture the `this` from its lexical scope. `this.a` is altered
obj.f().call({ a: 2 }); // 1 // `this` of arrow function cannot be altered
obj.g()(); // 1
