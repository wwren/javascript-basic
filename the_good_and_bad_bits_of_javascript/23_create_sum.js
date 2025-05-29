/**
 * ``__proto__``
 * __proto__ points to the prototype
 *
 * all objects have a hidden property [[Prototype]] that is either null or points to another object (which is called prototype)
 * The property [[Prototype]] is internal and hidden, but there are many ways to set it.
 *
 * const animal = {
 *    eats: true
 * }
 *
 * const rabbit = {
 *    jumps: true
 * }
 *
 * rabbit.__proto__ = animal // rabbit.eats = true
 *
 * Note: The __proto__ property is a bit outdated
 * Modern JavaScript suggests that we should use Object.getPrototypeOf/Object.setPrototypeOf
 *
 * ``F.prototype``
 * Constructor functions and classes can have .prototype property that will become the prototype for instances created by that constructor if it points to an object
 * const animal = {
 *   eats: true
 * }
 *
 * function Person(name) {
 *   this.name = name
 * }
 *
 * Person.prototype = animal
 *
 * const john = new Person('John') // john.__proto__ = animal
 *
 * Note: the F.prototype is called when used with new F. It assigns the [[Prototype]] of the new instance/ object
 * If the .prototype changes, the new objects will have a different prototype compared to the old objects
 *
 * String.prototype.toString() means all string instances created with String constructor function inherit methods from String.prototype
 *
 * ``F.prototype vs __proto__``
 * Person ----> prototype: animal
 *                            |
 *                            |  [[Prototype]] __proto__
 * instance of Person:      join
 */

/**
 * Object.prototype.valueOf
 * @param none
 * @return `this` value convert to an object
 * The valueOf() method of Object instances converts the this value to an object
 *
 * example:
 * const obj = {foo: 1};
 * console.log(obj.valueOf() === obj);
 *
 * Overriding valueOf for custom objects
 * function MyNumberType(n) {
 *     this.number = n;
 * }
 *
 * MyNumberType.prototype.valueOf = function() {
 *     return this.number;
 * }
 *
 * const object1 = new MyNumberType(4);
 *
 * console.log(object1 + 3) // 7 // JS first type conversion object1 by calling .valueOf which is overwritten
 * // object1 -> instance of MyNumberType
 */

/**
 * Type coercion
 *
 * JS is a weakly typed language - can use a value of one type where another type is expected & JS will convert it to the right type
 * The Date() constructor
 * The +/- operator
 * The == operator
 *
 * The operation does not do any conversion if the value is already a primitive. Objects are converted to primitives by calling its [Symbol.toPrimitive](),
 * valueOf(), and toString() method, in that order. It must return a primitive, if returns an object will results in a TypeError
 */

/**
 * @param {number} num
 */
function sum(num) {
  // your code here
  const sumFn = (num2) => {
    return sum(num + num2);
  };

  sumFn.valueOf = () => num;

  return sumFn;
}

const sum1 = sum(1);
sum1(2) == 3; // true
sum1(3) == 4; // true
sum(1)(2)(3) == 6; // true
sum(5)(-1)(2) == 6; // true
