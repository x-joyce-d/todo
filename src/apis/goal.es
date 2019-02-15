import send from './send'

export async function add (data) {
  return send('post', '/goals/', data)
}

export async function modify ({id, ...data}) {
  return send('patch', '/goals/'+id, data)
}

export async function save ({id, ...data}) {
	if(id){
		return send('patch', '/goals/'+id, data)
	}
	return send('post', '/goals/', data)
}

export async function remove (id) {
  return send('delete', '/goals/'+id)
}

export async function get (id) {
  return send('get', '/goals'+id)
}

export async function query () {
  return send('get', '/goals')
}
