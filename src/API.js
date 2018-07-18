const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Authorization': token
}

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(result => result.json())
