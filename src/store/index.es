import {action} from 'mobx'
import UiStore from './UiStore'
import GoalStore from './GoalStore'
import FeedbackStore from './FeedbackStore'
import AboutmeStore from './AboutmeStore'

class MainStore {
  uiStore = new UiStore()
  goalStore = new GoalStore()
  feedbackStore = new FeedbackStore()
  aboutmeStore = new AboutmeStore()

  init:Function = async () => {
    this.uiStore.loading = true
    try {
      await this.goalStore.query()
    } catch (e) {
      this.uiStore.showError(e)
    }
    this.uiStore.loading = false
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
