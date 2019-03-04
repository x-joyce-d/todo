import { observable, computed, action, runInAction, toJS } from 'mobx'
import * as aboutmeApis from '../apis/aboutme'

export default class {
  query:Function = async () => {
    await aboutmeApis.query()
  }
}
