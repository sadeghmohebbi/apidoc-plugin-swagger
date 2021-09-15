/**
 * get current pathItemObject and return modified by apidoc parsedElement
 * @param {Object} parsedElement apidoc parsed element
 * @param {Object} swaggerPathItemObject current swagger path Item object
 */
module.exports.init = (parsedElement, swaggerPathItemObject) => {
  if (!Array.isArray(swaggerPathItemObject.parameters)) {
    swaggerPathItemObject.parameters = []
  }
  swaggerPathItemObject.parameters.push({
    name: parsedElement.field,
    in: 'body',
    required: !parsedElement.optional,
    description: parsedElement.description,
    type: String(parsedElement.type).toLowerCase()
  })
  return swaggerPathItemObject
}