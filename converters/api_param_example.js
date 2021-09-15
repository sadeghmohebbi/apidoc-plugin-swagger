/**
 * get current pathItemObject and return modified by apidoc parsedElement
 * @param {Object} parsedElement apidoc parsed element
 * @param {Object} swaggerPathItemObject current swagger path Item object
 */
module.exports.init = (parsedElement, swaggerPathItemObject) => {
  try {
    if (!Array.isArray(swaggerPathItemObject.consumes)) {
      swaggerPathItemObject.consumes = []
    }
    swaggerPathItemObject.consumes.push("application/json")

    if (!Array.isArray(swaggerPathItemObject.parameters)) {
      swaggerPathItemObject.parameters = []
    }
    swaggerPathItemObject.parameters.push({
      name: "body",
      in: "body",
      description: "request body example",
      required: true,
      schema: {
        type: "object",
        example: JSON.parse(parsedElement.content)
      }
    })
  } catch (err) {
    //nothing to do
  }
  return swaggerPathItemObject
}