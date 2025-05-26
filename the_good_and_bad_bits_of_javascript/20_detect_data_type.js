/**
 * Question: https://bigfrontend.dev/problem/detect-data-type-in-JavaScript
 * Reference:
 * Object instance property (constructor): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
 * Function instance property (name): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
 * Object.prototype.constructor returns a reference to the constructor function that created the instance object -> function itself
 * All funciton instances have name property
 */

/**
 * @param {any} data
 * @return {string}
 */
function detectType(data) {
  // your code here
  if (!data) {
    if (data === undefined) {
      return "undefined";
    }

    if (data === null) {
      return "null";
    }
  }

  if (typeof data === "object") {
    return data.constructor.name.toLowerCase();
  }

  return typeof data;
}

detectType(1); // 'number'
detectType(new Map()); // 'map'
detectType([]); // 'array'
detectType(null); // 'null'
