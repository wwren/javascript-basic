/**
 * Solution using __proto__
 */
function myObjectCreate(proto) {
  if (typeof proto !== "object" || !proto) {
    throw Error("error");
  }

  const result = {};
  Object.setPrototypeOf(result, proto);

  return result;
}

/**
 * Solution using F.prototype
 * new objects can be created with a constructor function, like F()
 * If F.prototype is an object, then the new operator uses it to set [[Prototype]] for the new object
 */

function myObjectCreate2(proto) {
  if (typeof proto !== "object" || !proto) {
    throw Error("error");
  }

  function Constructor() {}

  Constructor.prototype = proto;

  return new Constructor();
}

/**
 * How setting the prototype of a constructor function to null differs from using Object.create(null)
 * https://stackoverflow.com/questions/18198178/null-prototype-object-prototype-and-object-create
 * a function constructed with the new operator will always have an object prototype -> Object.prototype
 * ECMA quote: if Type(proto) is not Object, set the [[Prototype]] internal property of obj to the standard built-in Object prototype object as described in 15.2.4.
 *
 * Object.create(o)
 * ECMA quote: set the [[Prototype]] internal property of obj to O.
 */
function F() {}
F.prototype = null;
const f = new F();
f.toString; // use Object.prototype.toString

function F2() {}
F2.prototype = Object.create(null);
const f2 = new F2();
f2.toString; // undefined
