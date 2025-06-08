/**
 * Write you own myInstanceOf().
 *
 */

/**
 * @param {any} obj
 * @param {target} target
 * @return {boolean}
 */
function myInstanceOf(obj, target) {
  return target.prototype.isPrototypeOf(obj);
}

class A {}
class B extends A {}
const b = new B();
myInstanceOf(b, B); // true
myInstanceOf(b, A); // true
myInstanceOf(b, Object); // true
function C() {}
myInstanceOf(b, C); // false
C.prototype = B.prototype;
myInstanceOf(b, C); // true
C.prototype = {};
myInstanceOf(b, C); // false
