import fetch from 'isomorphic-fetch-improve'
import qs from 'qs'

const SUCCESS_CODES = [200, 201, 204]

export default function send (method, pathname, data) {
  let url = global.restUrl || '', headers = {}, body
  switch (method.toLowerCase()) {
    case 'get':
      url += pathname + (data ? qs.stringify(data, {
        addQueryPrefix: true,
      }) : '')
      break
    case 'post':
    case 'put':
    case 'patch':
      url += pathname
      headers['Content-Type'] = 'application/json'
      body = JSON.stringify(data)
      break
    default:
      url += pathname
  }
  return fetch(url, {
    timeout: 30 * 1000,
    method: method.toUpperCase(),
    headers,
    body,
  }).then(res => {
    if (SUCCESS_CODES.indexOf(res.status) != -1) {
      return res.json()
    } else {
      throw new Error(res.statusText)
    }
  })
}
