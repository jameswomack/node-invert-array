var
    isArray  = require('amp-is-array'),
    isObject = require('amp-is-object'),
    isString = require('amp-is-string')

var moduleName = '[invert-array] '

module.exports = function (keyArrayMap) {
  if (!isObject(keyArrayMap)) {
    throw new TypeError(moduleName + 'An object is required')
  }

  var inversion = { }

  for (var key in keyArrayMap) {
    if (keyArrayMap.hasOwnProperty(key)) {
      var array = keyArrayMap[key]

      if (!isArray(array)) {
        throw new TypeError(moduleName + 'An array is required at each key')
      }

      array.forEach(function (arrayKey) {
        if (!isString(arrayKey)) {
          throw new Error(moduleName + 'keys must be strings')
        } else if (inversion[arrayKey]) {
          throw new Error(moduleName + 'key ' + arrayKey + 'already assigned to')
        }

        inversion[arrayKey] = key
      })
    }
  }

  return inversion
}
