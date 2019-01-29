import fetch from 'isomorphic-fetch-improve'
import qs from 'qs'

export default function send (method, pathname, data) {
  let url = global.restUrl || '', body
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
      body = qs.stringify(data)
      break

  }
  return fetch(url, {
    timeout: 30 * 1000,
    // headers: {
    //
    // },
    method,
    body,
  })
}
