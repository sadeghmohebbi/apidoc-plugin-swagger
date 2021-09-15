/**
 * get current pathItemObject and return modified by apidoc parsedElement
 * @param {Object} parsedElement apidoc parsed element
 * @param {Object} swaggerPathItemObject current swagger path Item object
 */
module.exports.init = (parsedElement, swaggerPathItemObject) => {
  if (!Array.isArray(swaggerPathItemObject.tags)) {
    swaggerPathItemObject.tags = []
  }
  swaggerPathItemObject.tags.push(parsedElement.group)
  return swaggerPathItemObject
}