let schema = {}

function iterateOverKeyValue(element) {
  if (Array.isArray(element)) {
    element.forEach(obj => {
      build(obj)
    })
  } else {

  }
}

module.exports.build = (parsedJson) => {
  const keys = Object.keys(parsedJson)
  for (let n = 0; n < keys.length; n++) {
    const key = keys[n];
    schema[key] = iterateOverKeyValue(parsedJson[key])
  }
  return schema
}