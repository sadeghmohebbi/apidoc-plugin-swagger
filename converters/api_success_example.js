/**
 * get current pathItemObject and return modified by apidoc parsedElement
 * @param {Object} parsedElement apidoc parsed element
 * @param {Object} swaggerPathItemObject current swagger path Item object
 */
module.exports.init = (parsedElement, swaggerPathItemObject) => {
  if (!Array.isArray(swaggerPathItemObject.produces)) {
    swaggerPathItemObject.produces = []
  }
  swaggerPathItemObject.produces.push("application/json")

  try {
    swaggerPathItemObject.responses = {}
    swaggerPathItemObject.responses["200"] = {
      description: `${parsedElement.title} type ${parsedElement.type}`,
      schema: {
        type: "object",
        example: JSON.parse(parsedElement.content)
      }
    }
  } catch (err) {
    //nothing to do
  }
  return swaggerPathItemObject
}