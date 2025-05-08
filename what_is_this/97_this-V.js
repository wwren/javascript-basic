// This is a JavaScript quiz from BFE.dev

const obj = {
  prefix: "BFE",
  list: ["1", "2", "3"],
  log() {
    this.list.forEach(function (item) {
      console.log(this);
      console.log(this.prefix + item);
    });
  },
  log2() {
    this.list.forEach((item) => {
      console.log(this.prefix + item);
    });
  },
  log3: () => {
    // this.list = [4, 5, 6]; // `this` points to the global `this` & it added field list to the global `this`
    this.list.forEach((item) => {
      // throw error because the `this` points to the global `this`. undefined.forEach will throw error
      console.log(this.prefix + item);
    });
  },
};

// obj.log(); // undefined1, undefined2 & undefined3. The callback inside forEach is function defination - `this` is binded at runtime. The function invoked at runtime has no `this.prefix` and `this` points to `global` in no-strict mode
// obj.log2(); //BFE1, BFE2, BFE3. The callback is arrow function - `this` is decided by lexical scope. The lexical scope is log2. the `this` for log2 depends on object invoking the function. `this` for obj2 = obj
obj.log3(); // throw error
