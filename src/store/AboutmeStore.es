import { observable, computed, action, runInAction, toJS } from 'mobx'
import * as aboutmeApis from '../apis/aboutme'

@observable list = []
export default class {
  query:Function = async () => {
    this.list = await goalApis.query()
  }
}
