var Assert = require('assert')

var invertAssoc = require('./')

describe('invert-array', function () {
  it('takes a key -> array map and inverts it', function () {
    var keyArrayMap = {
      a: [ 'b', 'c', 'd' ]
    }

    var inversion = invertAssoc(keyArrayMap)

    return Assert.deepEqual(inversion, {
      b: 'a',
      c: 'a',
      d: 'a'
    })
  })

  it('throws if an object is not passed', function () {
    return Assert.throws(invertAssoc.bind(null, ''))
  })

  it('throws if a key in the map points to a non-array', function () {
    return Assert.throws(invertAssoc.bind(null, {
      foo: 'bar'
    }))
  })

  it('throws if a key in the map points to an array that contains a non-string',
    function () {
      return Assert.throws(invertAssoc.bind(null, {
        foo: [ new Date() ]
      }))
    })
})
