import { observable, computed, action, runInAction, toJS } from 'mobx'

export default class {
  @observable loading = false

  showError (e:Error):void {
    alert(e.message)
  }
}
