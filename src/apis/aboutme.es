import send from './send'

export async function query () {
  return send('get', '/aboutme')
}
