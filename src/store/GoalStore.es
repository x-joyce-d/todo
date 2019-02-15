import { observable, computed, action, runInAction, toJS } from 'mobx'
import * as goalApis from '../apis/goal'

export default class {

	@observable list = []

  query:Function = async () => {
    this.list = await goalApis.query()
  }

  add:Function = async (data:Object) => {
    const item = await goalApis.add(data)
    this.list.push(item)
  }
	remove:Function = async (id) => {
		await  goalApis.remove()
	}
	modify:Function = async (id) => {
		await  goalApis.modify()
	}
}
