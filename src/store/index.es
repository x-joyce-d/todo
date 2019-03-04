import {action} from 'mobx'
import UiStore from './UiStore'
import GoalStore from './GoalStore'
import FeedbackStore from './FeedbackStore'

class MainStore {
  uiStore = new UiStore()
  goalStore = new GoalStore()
  feedbackStore = new FeedbackStore()

  init:Function = async () => {
    this.uiStore.loading = true
    try {
      await this.goalStore.query()
    } catch (e) {
      this.uiStore.showError(e)
    }
    this.uiStore.loading = false
  }
	@action showProgress (id:String):void {
		this.goalStore.currentId = id
		this.uiStore.path = '/attention'
	}
	@action showDetail (id:String):void {
		this.goalStore.currentId = id
		this.uiStore.path = '/detail'
	}
	goHome ():void {
		this.uiStore.path = '/'
	}
	showForm (data:?Object):void {
		this.uiStore.path = data ? '/modify' : '/add'
	}
	showFeedback ():void {
		this.uiStore.path = '/feedback'
	}
  showAboutme ():void {
		this.uiStore.path = '/aboutme'
	}
}

export default new MainStore()
