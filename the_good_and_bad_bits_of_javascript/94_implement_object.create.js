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
