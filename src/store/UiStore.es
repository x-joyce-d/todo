import { observable, computed, action, runInAction, toJS } from 'mobx'

export default class {
  @observable loading = false
	@observable path = '/'

  showError (e:Error):void {
    alert(e.message)
  }
}
