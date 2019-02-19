import send from './send'

export async function add (data) {
  return send('post', '/feedbacks', data)
}
