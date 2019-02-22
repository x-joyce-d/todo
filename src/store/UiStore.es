import { observable, computed, action, runInAction, toJS } from 'mobx'

export default class {
  @observable loading = false

	@observable path = '/'
	@observable isShow =false
	@observable listVis =false
	@observable fdVis =false
  @observable attentionVis =false

  showError (e:Error):void {
    alert(e.message)
  }
}
