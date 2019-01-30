import UiStore from './UiStore'
import GoalStore from './GoalStore'

class MainStore {
  uiStore = new UiStore()
  goalStore = new GoalStore()

  init:Function = async () => {
    this.uiStore.loading = true
    try {
      await this.goalStore.query()
    } catch (e) {
      this.uiStore.showError(e)
    }
    this.uiStore.loading = false
  }
}

export default new MainStore()
