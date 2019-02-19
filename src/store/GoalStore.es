import { observable, computed, action, runInAction, toJS } from 'mobx'
import * as goalApis from '../apis/goal'

export default class {

	@observable list = []
	@observable currentId = ''
	@observable bgColor = ''

	@computed get currentItem(){
		return this.list.find(item => item.id === this.currentId)
	}
  query:Function = async () => {
    this.list = await goalApis.query()
  }
	get:Function = async (id) => {
    this.detailData = await goalApis.get(id)
  }
	remove:Function = async (id:String) => {
		this.currentId = id
		await goalApis.remove(this.currentId)
	}
  add:Function = async (data:Object) => {
    const item = await goalApis.add(data)
    this.list.push(item)
  }
	modify:Function = async (id:String) => {
		this.currentId = id
		await  goalApis.modify(this.currentId)
	}
}
