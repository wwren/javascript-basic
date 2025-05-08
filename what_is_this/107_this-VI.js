const a = {
  dev: "BFE.dev",
  update: (name) => {
    this.dev = name;
  },
  update2: function (name) {
    this.dev = name;
  },
};
a.update("bigfrontend.dev"); // `update` is arrow function. `this` points to the lexical scope which is scope where a is created -> object creation does not create a new lexical scope
console.log(a.dev); // BFE.dev
console.log(this.dev); // bigfrontend.dev // this `this` points to the global `this` and it is altered

a.update2("new name");
console.log(a.dev); // 'new name'. `this` points to the `a` at the run time. `a` is altered
console.log(this.dev); // undefined. The global `this` has not been updated
