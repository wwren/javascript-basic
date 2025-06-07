/**
 * Object.assign() assigns the enumerable properties, so getters are not copied, non-enumerable properties are ignored.
 * Suppose we have following source object.
 *  * const source = Object.create(
  {
    a: 3 // prototype
  },
  {
    b: {
      value: 4,
      enumerable: true // enumerable data descriptor
    },
    c: {
      value: 5, // non-enumerable data descriptor
    },
    d: { // non-enumerable accessor descriptor 
      get: function() {
        return this._d;
      },
      set: function(value) {
        this._d = value
      }
    },
    e: { // enumerable accessor descriptor 
      get: function() {
        return this._e;
      },
      set: function(value) {
        this._e = value
      },
      enumerable: true
    }
  }
)
 * Object.assign({}, source)
// {b: 4, e: undefined}
// e is undefined because `this._e` is undefined
 * Rather than above result, could you implement a completeAssign() which have the same parameters as Object.assign() but fully copies the data descriptors and accessor descriptors?
 */

function completeAssign(target, ...sources) {
  if (target === undefined || target === null) {
    throw TypeError("error");
  }

  target = Object(target);

  for (const source of sources) {
    if (!source) {
      continue;
    }

    const descriptors = Object.getOwnPropertyDescriptors(source);
    Object.defineProperties(target, descriptors);
  }

  return target;
}
