const URL = 'http://localhost:3000/api/tweet'

const list = async () => {
  const response = await window.fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

const send = async (data) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response.json()
}

const tweets = {
  list,
  send
}

export const angularElement = [() => tweets]

export default tweets
