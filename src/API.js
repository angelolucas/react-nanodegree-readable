import uuid from 'uuid'

const api = 'http://localhost:3001'

let token = localStorage.token

if (!token) token = localStorage.token = uuid()

const headers = {
  Accept: 'application/json',
  Authorization: token,
}

// Categories
export const getCategories = () =>
  fetch(`${api}/categories`, { headers }).then(result => result.json())

export const getComments = id =>
  fetch(`${api}/posts/${id}/comments`, { headers }).then(result =>
    result.json()
  )

// Post
export const getPosts = () =>
  fetch(`${api}/posts`, { headers }).then(result => result.json())

export const getPostsByCategory = category =>
  fetch(`${api}/${category}/posts`, { headers }).then(result => result.json())

export const getPost = id =>
  fetch(`${api}/posts/${id}`, { headers }).then(result => result.json())

export const deletePost = id =>
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers: { ...headers },
  })
export const postPost = post =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  })

// Comments
export const postComment = comment =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  }).then(result => result.json())

export const deleteComment = id =>
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers: { ...headers },
  })

export const editComment = (id, changes) =>
  fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(changes),
  })

// Vote post & comment
export const vote = (contentType, vote, contentId) =>
  fetch(`${api}/${contentType}s/${contentId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ option: vote }),
  })
