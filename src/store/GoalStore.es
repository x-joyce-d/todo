import { observable, computed, action, runInAction, toJS } from 'mobx'
import * as goalApis from '../apis/goal'

export default class {

	@observable list = []
	@observable currentId = ''

	@computed get currentItem(){
		return this.list.find(item => item.id === this.currentId)
	}
  @computed get newList(){
    return this.list.sort((a,b)=>{
      console.log("45",a,b)
      return a.create_time > b.create_time
    })
    console.log("45465",this.list)
  }
  query:Function = async () => {
    this.list = await goalApis.query()
    // for(let i=this.list.length-1;i>=0;i--){
    //   this.newList.push(this.list[i])
    // }
  }
	get:Function = async (id) => {
    await goalApis.get(id)
  }
	remove:Function = async (id:String) => {
		this.currentId = id
		await goalApis.remove(this.currentId)
		for(let i=0;i<this.list.length;i++){
			const item = this.list[i]
			if(item.id === this.currentId){
				this.list.splice(i,1)
				// this.list.remove(item)
				break
			}
		}
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
