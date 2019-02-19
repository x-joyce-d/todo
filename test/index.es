const path = require('path')
const assert = require('assert')
const loadJsonFile = require('load-json-file')
const users = require('./users.json')

require('babel-register')(loadJsonFile.sync(path.resolve('.babelrc')))

global.restUrl = `http://test:${users.test}@localhost:3000`
const goalApis = require('../src/apis/goal')
const feedbackApis = require('../src/apis/feedback')

describe('goal', () => {
  describe('add()', () => {
    it('normal', async () => {
      const data = await goalApis.add({
        title: 'english',
        desc: 'cet-6',
				content: '',
      })
      assert.equal(data.title, 'english')
    })
  })

	describe('feedback', () => {
	  describe('add()', () => {
	    it('normal', async () => {
	      const data = await feedbackApis.add({
					describe: '',
	      })
	      assert.equal(data.title, 'english')
	    })
	  })

  describe('query()', () => {
    it('normal', async () => {
      const data = await goalApis.query()
    })
  })

  describe('remove()', () => {
    it('normal', async () => {
      const data = await goalApis.query()
      for (const {id} of data) {
        await goalApis.remove(id)
      }
    })
  })

})
