import { observable, computed, action, runInAction, toJS } from 'mobx'

export default class {
  @observable loading = false

	@observable path = '/'
	@observable isShow ='hidden'
	@observable listVis ='hidden'
	@observable fdVis ='hidden'
  @observable attentionVis ='hidden'

  showError (e:Error):void {
    alert(e.message)
  }
}
