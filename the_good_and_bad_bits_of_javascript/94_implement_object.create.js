/**
 * @param {any} proto
 * @return {object}
 */
function myObjectCreate(proto) {
  if (typeof proto !== "object" || !proto) {
    throw Error("error");
  }

  const result = {};
  Object.setPrototypeOf(result, proto);

  return result;
}
