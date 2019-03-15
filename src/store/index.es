import { observable } from 'mobx'
import { create, persist } from 'mobx-persist'

import UiStore from './UiStore'
import GoalStore from './GoalStore'

class MainStore {
  uiStore = new UiStore()
  goalStore = new GoalStore()

  @persist @observable count = 0

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

const store = new MainStore()
create()('mainStore', store)
export default store
