import uuid from 'uuid'

const api = 'http://localhost:3001'

let token = localStorage.token

if (!token) token = localStorage.token = uuid()

const headers = {
  Accept: 'application/json',
  Authorization: token,
}

export const getPosts = () =>
  fetch(`${api}/posts`, { headers }).then(result => result.json())

export const getCategories = () =>
  fetch(`${api}/categories`, { headers }).then(result => result.json())

export const getComments = postID =>
  fetch(`${api}/posts/${postID}/comments`, { headers }).then(result =>
    result.json()
  )

export const postComment = comment =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  })
