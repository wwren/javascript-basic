class A {
  static dev = "BFE";
  dev = "bigfrontend";

  constructor() {
    this.dev = "123";
  }
}

class C {
  dev = "bigfrontend"; // class fields are initialised before the constructor body runs

  constructor() {
    console.log(this.dev);
    this.dev = "123"; // overwrite to '123'
  }
}

class D {
  constructor() {
    console.log(this.dev);
    this.dev = "123";
  }

  dev = "smallworld"; // class fields are initialised before the constructor body runs
}

class B extends A {
  log() {
    console.log(this.dev);
  }

  static log() {
    console.log(this.dev);
  }
}

// B.log(); // "BFE"
// new B().log(); // "bigfrontend"

// const c = new C();
// console.log(c.dev); // print "bigfrontend", c.dev = '123'

const d = new D();
console.log(d.dev);
