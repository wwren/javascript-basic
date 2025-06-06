/**
 * Object.assign() static method copies all `enumerable` `own` properties from one or more source objects to a target object. It returns the modified target object
 * What is enumerable own property?
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties
 * Every property in JS objects can be classified by three factors:
 *  1. enumerable or non-enumerable: for...in loops and Object.keys only visit enumerable keys
 *  2. string or symbol
 *  3. own property or inherited property from the prototype chain: whether the property belongs to the object directly or its prototype chain
 */

/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 */
function objectAssign(target, ...sources) {
  // your code here
  if (target === null || target === undefined) {
    throw TypeError("Error");
  }

  target = Object(target); // Ability to wrap primitive number, string, boolean

  for (const source of sources) {
    if (!source) {
      // null and undefined have type object
      continue;
    }

    /**
     * Object.keys return an array of a given object's `own` `enumerable` `string-keyed`
     * Using Object.keys on primitive
     * Non-object arguments are coerced to objects. undefined and null cannot be coerced to objects and throw a TypeError upfront.
     */
    Object.keys(source).forEach((key) => {
      const descriptor = Object.getOwnPropertyDescriptor(target, key);

      if (descriptor && !descriptor.writable) {
        throw TypeError("Cannot assign read only property");
      }

      target[key] = source[key];
    });

    Object.getOwnPropertySymbols(source).forEach((key) => {
      // to get the symbol key
      const descriptor = Object.getOwnPropertyDescriptor(target, key);

      if (descriptor && !descriptor.writable) {
        throw TypeError("Cannot assign read only property");
      }

      target[key] = source[key];
    });

    // Or to use Reflect.ownKeys
  }

  return target; // target is altered earlier but this will ensure calling the function always returns something if no error exception
}

/**
 * read-only property is not mutable & will throw TypeError
 * const describer = Object.getOwnPropertyDescriber(object, key)
 * describer.writable -> true / false
 */

// const target1 = Object.defineProperty({}, "foo", {
//   value: 1,
//   writable: false,
// }); // target.foo is a read-only property
// expect(() => objectAssign(target1, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 })).toThrow();
// expect(target1).toEqual({ bar: 2, foo2: 3 });

/**
 * Enumerable property
 */
// const target2 = {};
// const b = Object.create(
//   { a: 3 }, // proto -> objectAssign should ignore inherited property
//   {
//     b: {
//       value: 4, // by default enumerable is false
//     },
//     c: {
//       value: 5,
//       enumerable: true,
//     },
//   }
// );
// expect(objectAssign({}, b)).toEqual({ c: 5 });
