import { observable, computed, action, runInAction, toJS } from 'mobx'
import * as feedbackApis from '../apis/feedback'

export default class {
  add:Function = async (data:Object) => {
		return feedbackApis.add(data)
	}
}
