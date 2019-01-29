const path = require('path')
const loadJsonFile = require('load-json-file')

require('babel-register')(loadJsonFile.sync(path.resolve('.babelrc')))

global.restUrl = 'http://localhost:3000'
const goalApis = require('../src/apis/goal')

describe('goal', () => {
  describe('query()', () => {
    it('normal', async () => {
      return await goalApis.query()
    })
  })
})
